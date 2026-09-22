import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { SlidersHorizontal } from 'lucide-react';

interface ProductCatalogProps {
  onQuickView: (product: Product) => void;
}

const CATEGORIES = [
  'All Gifts',
  'Luxury Hampers',
  'Personalized Gifts',
  'Chocolates & Gourmet',
  'Home & Fragrance',
  'Anniversary & Romantic',
  'Birthday Surprises',
];

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onQuickView }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Gifts');
  const [sortBy, setSortBy] = useState<string>('featured');

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== 'All Gifts') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <section id="shop" className="py-16 sm:py-24 bg-white border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-hand text-2xl sm:text-3xl text-coral-500 font-bold uppercase tracking-wider mb-1">
              CURATED GIFTS FOR EVERYONE
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#141414] tracking-tight">
              Best Selling Gift Hampers & Keepsakes
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl">
              From grand celebration hampers and artisanal chocolates to customized keepsakes and romantic roses, find heirloom gifts wrapped with love.
            </p>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <SlidersHorizontal className="w-4 h-4 text-gray-500" />
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-cream-100 border border-cream-300 text-gray-800 text-xs sm:text-sm font-semibold rounded-2xl px-3 py-2 outline-none focus:ring-2 focus:ring-coral-400 cursor-pointer"
            >
              <option value="featured">Featured Picks</option>
              <option value="rating">Top Customer Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-display font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-coral-500 text-white shadow-md shadow-coral-500/25 scale-105'
                  : 'bg-cream-100 text-gray-700 hover:bg-cream-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={() => onQuickView(product)}
            />
          ))}
        </div>

        {/* Footer Guarantee Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#faf9f5] rounded-[32px] p-6 sm:p-8 border border-cream-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-coral-100 text-coral-600 flex items-center justify-center text-2xl shrink-0">
              🎁
            </div>
            <div>
              <h4 className="font-display font-bold text-gray-900 text-base">Signature Keepsake Box</h4>
              <p className="text-gray-500 text-xs mt-0.5">Every gift arrives securely boxed with premium satin ribbon & gift tags.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sunny-100 text-sunny-700 flex items-center justify-center text-2xl shrink-0">
              ✨
            </div>
            <div>
              <h4 className="font-display font-bold text-gray-900 text-base">Bespoke Laser Engraving</h4>
              <p className="text-gray-500 text-xs mt-0.5">Custom names, dates, and photographs crafted with high-precision engraving.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-grass-100 text-grass-700 flex items-center justify-center text-2xl shrink-0">
              💌
            </div>
            <div>
              <h4 className="font-display font-bold text-gray-900 text-base">Handwritten Greeting Cards</h4>
              <p className="text-gray-500 text-xs mt-0.5">We write your heartfelt message with elegant calligraphy on floral stationery.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
