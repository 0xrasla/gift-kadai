import React, { useState } from 'react';
import { Sparkles, Gift, RotateCcw } from 'lucide-react';
import { PRODUCTS, GIFT_FINDER_OPTIONS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface GiftFinderProps {
  onQuickView: (product: Product) => void;
}

export const GiftFinder: React.FC<GiftFinderProps> = ({ onQuickView }) => {
  const [selectedRecipient, setSelectedRecipient] = useState<string>('For Everyone');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('all');
  const [selectedBudget, setSelectedBudget] = useState<string>('all');

  const filteredProducts = PRODUCTS.filter((product) => {
    // Filter by recipient
    if (selectedRecipient && selectedRecipient !== 'all' && product.recipientGroup !== 'For Everyone' && product.recipientGroup !== selectedRecipient) {
      return false;
    }
    // Filter by occasion
    if (selectedOccasion && selectedOccasion !== 'all' && !product.occasion.includes(selectedOccasion as any)) {
      return false;
    }
    // Filter by budget
    if (selectedBudget === 'under-1500' && product.price >= 1500) return false;
    if (selectedBudget === '1500-3000' && (product.price < 1500 || product.price > 3000)) return false;
    if (selectedBudget === 'above-3000' && product.price < 3000) return false;

    return true;
  });

  const resetFilters = () => {
    setSelectedRecipient('For Everyone');
    setSelectedOccasion('all');
    setSelectedBudget('all');
  };

  return (
    <section id="gift-finder" className="py-16 sm:py-20 bg-gradient-to-b from-[#faf9f5] via-cream-100 to-[#faf9f5] border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-sunny-100 border border-sunny-400 text-sunny-700 px-4 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-sunny-500" />
            <span>Interactive Gift Concierge</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#141414] tracking-tight">
            Find the Perfect Gift in 3 Easy Steps
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3">
            Tailor-made gifts for Him, Her, Couples, Parents, Birthdays, and cherished celebrations.
          </p>
        </div>

        {/* Step Cards Selector */}
        <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-xl border border-cream-200/80 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Step 1: Who are you gifting? */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-display font-bold text-gray-900 text-base sm:text-lg flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-coral-500 text-white text-xs flex items-center justify-center font-bold">1</span>
                  Who are you gifting?
                </label>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {GIFT_FINDER_OPTIONS.recipients.map((rec) => (
                  <button
                    key={rec.id}
                    onClick={() => setSelectedRecipient(rec.id)}
                    className={`p-3 rounded-2xl text-xs sm:text-sm font-semibold border-2 transition-all text-left flex items-center justify-between ${
                      selectedRecipient === rec.id
                        ? 'border-coral-500 bg-coral-50 text-coral-600 shadow-sm'
                        : 'border-cream-200 hover:border-coral-200 text-gray-700 bg-cream-50'
                    }`}
                  >
                    <span>{rec.label}</span>
                    <span className="text-base">🎁</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Occasion */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-display font-bold text-gray-900 text-base sm:text-lg flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-sunny-500 text-white text-xs flex items-center justify-center font-bold">2</span>
                  Special Occasion
                </label>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedOccasion('all')}
                  className={`col-span-2 p-2.5 rounded-2xl text-xs sm:text-sm font-semibold border-2 transition-all text-center ${
                    selectedOccasion === 'all'
                      ? 'border-sunny-500 bg-sunny-50 text-sunny-700 shadow-sm'
                      : 'border-cream-200 hover:border-sunny-200 text-gray-700 bg-cream-50'
                  }`}
                >
                  All Occasions
                </button>
                {GIFT_FINDER_OPTIONS.occasions.map((occ) => (
                  <button
                    key={occ.id}
                    onClick={() => setSelectedOccasion(occ.id)}
                    className={`p-2.5 rounded-2xl text-xs sm:text-sm font-semibold border-2 transition-all text-left truncate ${
                      selectedOccasion === occ.id
                        ? 'border-sunny-500 bg-sunny-50 text-sunny-700 shadow-sm'
                        : 'border-cream-200 hover:border-sunny-200 text-gray-700 bg-cream-50'
                    }`}
                  >
                    <span>{occ.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Budget Range */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-display font-bold text-gray-900 text-base sm:text-lg flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-grass-500 text-white text-xs flex items-center justify-center font-bold">3</span>
                  Budget Range (INR)
                </label>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setSelectedBudget('all')}
                  className={`p-2.5 rounded-2xl text-xs sm:text-sm font-semibold border-2 transition-all text-left ${
                    selectedBudget === 'all'
                      ? 'border-grass-500 bg-grass-50 text-grass-700 shadow-sm'
                      : 'border-cream-200 hover:border-grass-200 text-gray-700 bg-cream-50'
                  }`}
                >
                  All Budgets
                </button>
                {GIFT_FINDER_OPTIONS.budgets.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBudget(b.id)}
                    className={`p-2.5 rounded-2xl text-xs sm:text-sm font-semibold border-2 transition-all text-left ${
                      selectedBudget === b.id
                        ? 'border-grass-500 bg-grass-50 text-grass-700 shadow-sm'
                        : 'border-cream-200 hover:border-grass-200 text-gray-700 bg-cream-50'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Filter Status Bar */}
          <div className="mt-6 pt-6 border-t border-cream-200 flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Gift className="w-4 h-4 text-coral-500" />
              <span>Found <strong>{filteredProducts.length}</strong> matching gifts</span>
            </div>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-coral-500 transition-colors font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Choices
            </button>
          </div>
        </div>

        {/* Filtered Products Display */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={`finder-${product.id}`}
                product={product}
                onQuickView={() => onQuickView(product)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center max-w-md mx-auto shadow-sm">
            <div className="text-4xl mb-3">🎁</div>
            <h4 className="font-display font-bold text-lg text-gray-900 mb-1">No gifts match this exact filter</h4>
            <p className="text-gray-500 text-sm mb-4">Try widening your budget or selecting "Everyone" to view all hampers.</p>
            <button
              onClick={resetFilters}
              className="bg-coral-500 text-white font-semibold px-5 py-2 rounded-full text-sm hover:bg-coral-600 transition"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
