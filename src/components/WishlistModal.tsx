import React from 'react';
import { X, Trash2, ShoppingBag, Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuickView: (product: Product) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({ isOpen, onClose, onQuickView }) => {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-[32px] overflow-hidden shadow-2xl border border-cream-200 max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-cream-200 flex items-center justify-between bg-[#faf9f5]">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-coral-500 fill-current" />
            <h3 className="font-display font-bold text-lg text-gray-900">
              Saved Gifts ({wishlist.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-cream-100 hover:bg-cream-200 text-gray-600 flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Wishlist Items */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          {wishlist.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-2">💖</div>
              <h4 className="font-display font-bold text-gray-800 text-base mb-1">No saved gifts yet</h4>
              <p className="text-gray-500 text-xs max-w-xs mx-auto mb-4">
                Click the heart icon on any product to curate your favorite gifts for upcoming celebrations.
              </p>
            </div>
          ) : (
            wishlist.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-cream-50 border border-cream-200/80"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0 cursor-pointer"
                  onClick={() => { onQuickView(product); onClose(); }}
                />
                <div className="flex-1 min-w-0 cursor-pointer" onClick={() => { onQuickView(product); onClose(); }}>
                  <h4 className="font-display font-bold text-gray-900 text-xs sm:text-sm line-clamp-1 hover:text-coral-500">
                    {product.name}
                  </h4>
                  <div className="font-display font-black text-sm text-gray-900 mt-0.5">
                    ₹{product.price.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      addToCart(product, 1);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl bg-coral-500 hover:bg-coral-600 text-white transition active:scale-95 flex items-center gap-1 text-xs font-semibold"
                    title="Move to cart"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Add</span>
                  </button>
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="p-2.5 rounded-xl text-gray-400 hover:text-coral-500 transition"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
