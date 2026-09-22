import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, GiftSettings } from '../types';
import confetti from 'canvas-confetti';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedColor?: string, personalizedName?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  discount: number;
  discountCode: string;
  applyDiscountCode: (code: string) => boolean;
  freeShippingThreshold: number;
  shippingCost: number;
  finalTotal: number;
  giftSettings: GiftSettings;
  updateGiftSettings: (settings: Partial<GiftSettings>) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  triggerCelebration: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const FREE_SHIPPING_THRESHOLD = 1999; // Free shipping above ₹1,999

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('khetheshwara_cart');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse cart storage', e);
      }
    }
    // Default initial cart item for instant life
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  const [giftSettings, setGiftSettings] = useState<GiftSettings>({
    includeGiftBox: true,
    giftBoxPrice: 199,
    ribbonColor: 'Blush Coral',
    greetingCard: true,
    cardMessage: 'Wishing you endless joy and warm memories! 💕',
    recipientName: 'Little Angel'
  });

  useEffect(() => {
    localStorage.setItem('khetheshwara_cart', JSON.stringify(items));
  }, [items]);

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff5757', '#f9be28', '#72b947', '#3d82de', '#9b6ee5']
    });
  };

  const addToCart = (product: Product, quantity = 1, selectedColor?: string, personalizedName?: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity, selectedColor, personalizedName }
            : item
        );
      }
      return [...prev, { product, quantity, selectedColor, personalizedName }];
    });
    setIsCartOpen(true);
    triggerCelebration();
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const applyDiscountCode = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === 'GIFTJOY20' || clean === 'KIDS20') {
      setDiscountCode(clean);
      setDiscountPercent(20);
      triggerCelebration();
      return true;
    } else if (clean === 'SUPER48') {
      setDiscountCode(clean);
      setDiscountPercent(48);
      triggerCelebration();
      return true;
    }
    return false;
  };

  const updateGiftSettings = (settings: Partial<GiftSettings>) => {
    setGiftSettings((prev) => ({ ...prev, ...settings }));
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const giftBoxAddon = giftSettings.includeGiftBox ? giftSettings.giftBoxPrice : 0;
  const discount = Math.round((subtotal * discountPercent) / 100);
  const shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 149;
  const finalTotal = Math.max(0, subtotal - discount + giftBoxAddon + shippingCost);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        discount,
        discountCode,
        applyDiscountCode,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        shippingCost,
        finalTotal,
        giftSettings,
        updateGiftSettings,
        isCartOpen,
        setIsCartOpen,
        triggerCelebration
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
