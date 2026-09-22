import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState<string>('');
  const [personalizedName, setPersonalizedName] = useState('');

  if (!product) return null;

  const currentImage = activeImage || product.image;
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, undefined, personalizedName || undefined);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-[32px] overflow-hidden shadow-2xl border border-cream-200 max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-cream-100 hover:bg-cream-200 text-gray-700 flex items-center justify-center transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Images */}
        <div className="md:w-1/2 p-6 bg-[#faf9f5] flex flex-col justify-between">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm mb-4">
            <img
              src={currentImage}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            {product.discountPercent && (
              <span className="absolute top-3 left-3 bg-coral-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                SAVE {product.discountPercent}%
              </span>
            )}
          </div>

          {/* Thumbnails if gallery exists */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 shrink-0 transition ${
                    currentImage === img ? 'border-coral-500 ring-2 ring-coral-300' : 'border-cream-300'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Trust badges */}
          <div className="mt-4 pt-4 border-t border-cream-200 flex items-center justify-around text-[11px] text-gray-500">
            <span className="flex items-center gap-1 font-semibold text-emerald-700">
              <ShieldCheck className="w-4 h-4" /> 100% Quality Assured
            </span>
            <span>✦ Premium Packaging</span>
            <span>✦ Fast Dispatch</span>
          </div>
        </div>

        {/* Right: Product Details & Controls */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Category & Recipient */}
            <div className="flex items-center justify-between text-xs text-gray-500 font-semibold mb-1">
              <span className="text-coral-500 uppercase tracking-wider">{product.category}</span>
              <span className="bg-cream-200 px-2 py-0.5 rounded-md text-gray-700">{product.recipientGroup}</span>
            </div>

            {/* Title */}
            <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900 leading-tight mb-2">
              {product.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center text-sunny-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-800">{product.rating}</span>
              <span className="text-xs text-gray-400">({product.reviewsCount} verified reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-display font-black text-2xl sm:text-3xl text-gray-950">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-base text-gray-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
              {product.description}
            </p>

            {/* Features list */}
            {product.features && (
              <div className="mb-4 space-y-1.5">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                    <Check className="w-3.5 h-3.5 text-grass-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Optional Personalization Input */}
            {product.isPersonalizable && (
              <div className="mb-4 p-3 rounded-2xl bg-grape-50 border border-grape-200">
                <label className="block text-xs font-bold text-grape-700 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-grape-500" />
                  Add Custom Engraved Name / Note (Free):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul & Priya / Happy 25th / Dearest Mom"
                  value={personalizedName}
                  onChange={(e) => setPersonalizedName(e.target.value)}
                  className="w-full text-xs font-semibold px-3 py-2 rounded-xl bg-white border border-grape-200 text-gray-800 outline-none focus:ring-2 focus:ring-grape-400"
                />
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-cream-200">
            <div className="flex items-center gap-3">
              {/* Quantity Counter */}
              <div className="flex items-center border-2 border-cream-300 rounded-full px-3 py-1 bg-cream-50">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="text-gray-600 hover:text-coral-500 font-bold px-1 text-sm"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-8 text-center font-display font-bold text-sm text-gray-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="text-gray-600 hover:text-coral-500 font-bold px-1 text-sm"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="flex-grow bg-coral-500 hover:bg-coral-600 text-white font-display font-semibold text-sm sm:text-base py-3 px-6 rounded-full shadow-lg shadow-coral-500/25 flex items-center justify-center gap-2 active:scale-95 transition"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Gift Bag • ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3 rounded-full border-2 transition ${
                  isWishlisted
                    ? 'border-coral-500 bg-coral-50 text-coral-500'
                    : 'border-cream-300 hover:border-coral-300 text-gray-700'
                }`}
                title="Wishlist"
                aria-label="Toggle Wishlist"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
