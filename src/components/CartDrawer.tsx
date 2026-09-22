import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Gift, Tag, Check, ArrowRight, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onProceedToCheckout }) => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalItems,
    subtotal,
    discount,
    discountCode,
    applyDiscountCode,
    freeShippingThreshold,
    shippingCost,
    finalTotal,
    giftSettings,
    updateGiftSettings,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [showGiftOptions, setShowGiftOptions] = useState(false);

  if (!isCartOpen) return null;

  const freeShippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    if (!couponInput.trim()) return;

    const success = applyDiscountCode(couponInput);
    if (!success) {
      setCouponError('Invalid coupon code. Try GIFTJOY20 or SUPER48');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-cream-200 flex items-center justify-between bg-[#faf9f5]">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🎁</span>
              <div>
                <h3 className="font-display font-bold text-lg text-gray-900 leading-tight">
                  Your Gift Bag
                </h3>
                <span className="text-xs text-gray-500 font-medium">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'} ready for celebration
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full text-gray-500 hover:text-gray-800 hover:bg-cream-200 transition"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-sunny-50 px-5 py-3 border-b border-sunny-200">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-800 mb-1.5">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-sunny-600" />
                {amountNeededForFreeShipping === 0 ? (
                  <span className="text-emerald-700 font-bold">You unlocked FREE Express Shipping! 🎉</span>
                ) : (
                  <span>
                    Add <strong className="text-coral-600">₹{amountNeededForFreeShipping.toLocaleString('en-IN')}</strong> for FREE Shipping
                  </span>
                )}
              </div>
              <span className="text-sunny-700 font-bold">{freeShippingProgress}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-sunny-200 overflow-hidden">
              <div
                className="h-full bg-sunny-500 transition-all duration-500 rounded-full"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="text-5xl mb-3">🛍️</div>
                <h4 className="font-display font-bold text-gray-800 text-lg mb-1">Your gift bag is empty</h4>
                <p className="text-gray-500 text-xs mb-6 max-w-xs mx-auto">
                  Explore our curated hampers and wooden toys to create the perfect surprise!
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-coral-500 text-white font-display font-semibold text-xs px-6 py-2.5 rounded-full hover:bg-coral-600 transition"
                >
                  Explore Gift Collections
                </button>
              </div>
            ) : (
              <>
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-3.5 p-3 rounded-2xl bg-cream-50 border border-cream-200/80 items-center"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-18 h-18 rounded-xl object-cover shrink-0 bg-white"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-bold text-gray-900 text-xs sm:text-sm line-clamp-1">
                        {item.product.name}
                      </h4>
                      
                      {item.personalizedName && (
                        <p className="text-[11px] text-grape-600 font-semibold truncate mt-0.5">
                          Engraved: "{item.personalizedName}"
                        </p>
                      )}

                      <div className="font-display font-black text-xs sm:text-sm text-gray-900 mt-1">
                        ₹{item.product.price.toLocaleString('en-IN')}
                      </div>

                      {/* Quantity selector & remove */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-cream-300 rounded-full bg-white px-2 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="text-gray-500 hover:text-coral-500 p-0.5"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-display font-bold text-xs text-gray-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="text-gray-500 hover:text-coral-500 p-0.5"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 hover:text-coral-500 transition p-1"
                          title="Remove item"
                          aria-label={`Remove ${item.product.name} from cart`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Gift Wrapping & Greeting Card Accordion */}
                <div className="rounded-2xl border border-cream-300 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={giftSettings.includeGiftBox}
                        onChange={(e) => updateGiftSettings({ includeGiftBox: e.target.checked })}
                        className="w-4 h-4 rounded text-coral-500 focus:ring-coral-400 cursor-pointer"
                      />
                      <span className="font-display font-bold text-xs sm:text-sm text-gray-800 flex items-center gap-1.5">
                        <Gift className="w-4 h-4 text-coral-500" />
                        Signature Gift Wrap & Card (+₹199)
                      </span>
                    </label>
                    <button
                      onClick={() => setShowGiftOptions(!showGiftOptions)}
                      className="text-[11px] font-bold text-coral-500 hover:underline"
                    >
                      {showGiftOptions ? 'Hide Note' : 'Edit Note'}
                    </button>
                  </div>

                  {giftSettings.includeGiftBox && (
                    <div className="mt-3 pt-3 border-t border-cream-200 text-xs space-y-2.5">
                      <div>
                        <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                          Satin Ribbon Color:
                        </label>
                        <div className="flex items-center gap-1.5">
                          {(['Blush Coral', 'Sage Green', 'Sunshine Yellow', 'Royal Blue'] as const).map((col) => (
                            <button
                              key={col}
                              onClick={() => updateGiftSettings({ ribbonColor: col })}
                              className={`px-2.5 py-1 rounded-full text-[10px] font-bold border transition ${
                                giftSettings.ribbonColor === col
                                  ? 'border-coral-500 bg-coral-50 text-coral-600'
                                  : 'border-cream-300 text-gray-600 bg-cream-50'
                              }`}
                            >
                              {col}
                            </button>
                          ))}
                        </div>
                      </div>

                      {showGiftOptions && (
                        <>
                          <div>
                            <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                              Recipient Name:
                            </label>
                            <input
                              type="text"
                              value={giftSettings.recipientName}
                              onChange={(e) => updateGiftSettings({ recipientName: e.target.value })}
                              placeholder="e.g. Baby Aarav"
                              className="w-full px-2.5 py-1.5 rounded-lg border border-cream-300 text-xs bg-cream-50"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                              Handwritten Card Message:
                            </label>
                            <textarea
                              rows={2}
                              value={giftSettings.cardMessage}
                              onChange={(e) => updateGiftSettings({ cardMessage: e.target.value })}
                              placeholder="Your custom heartfelt greeting..."
                              className="w-full px-2.5 py-1.5 rounded-lg border border-cream-300 text-xs bg-cream-50"
                            />
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Promo Code Input */}
                <form onSubmit={handleApplyCoupon} className="pt-2">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Coupon (GIFTJOY20 or SUPER48)"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 text-xs font-semibold rounded-xl border border-cream-300 bg-cream-50 outline-none uppercase"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-3.5 py-2 rounded-xl transition"
                    >
                      Apply
                    </button>
                  </div>
                  {discountCode && (
                    <p className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                      <Check className="w-3 h-3" /> Coupon <strong>{discountCode}</strong> applied successfully!
                    </p>
                  )}
                  {couponError && (
                    <p className="text-[11px] text-coral-500 font-semibold mt-1">
                      {couponError}
                    </p>
                  )}
                </form>
              </>
            )}
          </div>

          {/* Drawer Footer / Price Summary */}
          {items.length > 0 && (
            <div className="p-5 border-t border-cream-200 bg-[#faf9f5] space-y-3">
              <div className="space-y-1.5 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-coral-600 font-semibold">
                    <span>Discount ({discountCode})</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                {giftSettings.includeGiftBox && (
                  <div className="flex justify-between">
                    <span>Signature Gift Box & Card</span>
                    <span className="font-semibold text-gray-900">₹{giftSettings.giftBoxPrice}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Standard Delivery</span>
                  <span className="font-semibold text-gray-900">
                    {shippingCost === 0 ? <strong className="text-emerald-600">FREE</strong> : `₹${shippingCost}`}
                  </span>
                </div>

                <div className="pt-2 border-t border-cream-300 flex justify-between items-baseline font-display font-bold text-gray-900 text-base">
                  <span>Total Amount</span>
                  <span className="text-xl font-black text-coral-500">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  onProceedToCheckout();
                }}
                className="w-full bg-coral-500 hover:bg-coral-600 text-white font-display font-semibold text-sm py-3.5 rounded-full shadow-lg shadow-coral-500/25 flex items-center justify-center gap-2 active:scale-95 transition"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
