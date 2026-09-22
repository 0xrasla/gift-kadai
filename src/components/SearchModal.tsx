import React, { useState } from 'react';
import { Search, X, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuickView: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onQuickView }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  if (!isOpen) return null;

  const results = searchTerm.trim() === ''
    ? []
    : PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-[32px] overflow-hidden shadow-2xl border border-cream-200">
        
        {/* Search input bar */}
        <div className="p-4 sm:p-5 border-b border-cream-200 flex items-center gap-3 bg-[#faf9f5]">
          <Search className="w-5 h-5 text-coral-500 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search gifts, toys, onesies, hampers, milestones..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-base sm:text-lg font-medium text-gray-900 placeholder:text-gray-400 bg-transparent outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-cream-200 text-gray-500 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
          {searchTerm.trim() === '' ? (
            <div className="text-center py-8 text-gray-500 text-xs sm:text-sm">
              <p className="font-semibold text-gray-700 mb-2">Popular Gift Searches:</p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {['Welcome Baby Hamper', 'Rainbow Montessori', 'Cuddle Bear', 'Milestone Plaque', 'Swaddle Set'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="bg-cream-100 hover:bg-coral-50 hover:text-coral-600 text-gray-700 px-3 py-1.5 rounded-full text-xs font-semibold transition"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10 text-gray-500 text-sm">
              <p>No gifts found for "{searchTerm}". Try searching for "hamper" or "wooden".</p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">
                Found {results.length} gifts
              </p>
              {results.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 p-2.5 rounded-2xl hover:bg-cream-50 transition border border-transparent hover:border-cream-200"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0 cursor-pointer" onClick={() => { onQuickView(product); onClose(); }}>
                    <h4 className="font-display font-bold text-sm text-gray-900 line-clamp-1 hover:text-coral-500">
                      {product.name}
                    </h4>
                    <span className="text-xs font-semibold text-coral-500">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] text-gray-400 ml-2">
                      ({product.category})
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(product, 1);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl bg-coral-500 hover:bg-coral-600 text-white transition active:scale-95 shrink-0"
                    title="Add to cart"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
