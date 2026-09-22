import React from 'react';
import { Heart, Star, ShoppingBag, Eye, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  product: Product;
  onQuickView: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  return (
    <div className="group relative bg-white rounded-[28px] p-3.5 border border-cream-200/90 shadow-sm hover:shadow-xl hover:border-coral-200 transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Image Container */}
      <div className="relative aspect-[4/4.2] rounded-[22px] overflow-hidden bg-cream-100 mb-3.5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
          {product.tag && (
            <span className={`text-[11px] font-display font-bold px-2.5 py-0.5 rounded-full shadow-sm uppercase tracking-wider text-white ${
              product.tag === 'Bestseller' ? 'bg-coral-500' :
              product.tag === 'Sale' ? 'bg-sunny-500' :
              product.tag === 'New' ? 'bg-royal-500' :
              product.tag === 'Luxury Hamper' ? 'bg-grape-500' :
              'bg-grass-500'
            }`}>
              {product.tag}
            </span>
          )}

          {product.discountPercent && (
            <span className="text-[10px] font-display font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white shadow-sm">
              -{product.discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-2.5 right-2.5 w-9 h-9 rounded-full flex items-center justify-center transition-transform active:scale-90 shadow-md ${
            isWishlisted
              ? 'bg-coral-500 text-white'
              : 'bg-white/90 text-gray-700 hover:text-coral-500 hover:bg-white'
          }`}
          title={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Button (desktop hover) */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center z-10">
          <button
            onClick={onQuickView}
            className="w-full bg-white/95 backdrop-blur-sm hover:bg-white text-gray-800 font-display font-semibold text-xs py-2 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-coral-500" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="px-1 flex flex-col flex-grow justify-between">
        <div>
          {/* Category & Recipient Tag */}
          <div className="flex items-center justify-between text-[11px] text-gray-500 font-medium mb-1">
            <span className="uppercase tracking-wider text-coral-500 font-semibold">{product.category}</span>
            <span className="bg-cream-200 px-2 py-0.5 rounded-md text-gray-600 font-medium">{product.recipientGroup}</span>
          </div>

          {/* Product Title */}
          <h3
            onClick={onQuickView}
            className="font-display font-bold text-gray-900 text-sm sm:text-base leading-snug line-clamp-2 hover:text-coral-500 cursor-pointer transition-colors mb-2"
          >
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2.5">
            <div className="flex items-center text-sunny-400">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-bold text-gray-800">{product.rating}</span>
            <span className="text-[11px] text-gray-400">({product.reviewsCount})</span>
            {product.isPersonalizable && (
              <span className="ml-auto text-[10px] text-grape-600 bg-grape-100 px-1.5 py-0.5 rounded font-bold flex items-center gap-0.5">
                <Sparkles className="w-2.5 h-2.5" />
                Personalized
              </span>
            )}
          </div>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="pt-2 border-t border-cream-200/80 flex items-center justify-between gap-2 mt-auto">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display font-black text-lg sm:text-xl text-gray-950">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-700 font-semibold">Taxes included</span>
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="group/btn bg-coral-500 hover:bg-coral-600 text-white rounded-2xl p-2.5 sm:px-3 sm:py-2 flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
            title="Add to cart"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
            <span className="hidden sm:inline font-display font-semibold text-xs">Add</span>
          </button>
        </div>
      </div>

    </div>
  );
};
