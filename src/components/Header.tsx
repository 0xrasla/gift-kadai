import React, { useState } from 'react';
import { Search, User, ShoppingBag, Heart, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  onOpenAuth: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenWishlist,
  onOpenAuth,
}) => {
  const { totalItems, setIsCartOpen } = useCart();
  const { wishlist } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Colorful letters for Khetheshwara matching Guzal styling
  const brandLetters = [
    { char: 'K', color: 'text-coral-500' },
    { char: 'h', color: 'text-grass-500' },
    { char: 'e', color: 'text-sunny-500' },
    { char: 't', color: 'text-royal-500' },
    { char: 'h', color: 'text-grape-500' },
    { char: 'e', color: 'text-coral-500' },
    { char: 's', color: 'text-grass-500' },
    { char: 'h', color: 'text-sunny-500' },
    { char: 'w', color: 'text-royal-500' },
    { char: 'a', color: 'text-grape-500' },
    { char: 'r', color: 'text-coral-500' },
    { char: 'a', color: 'text-grass-500' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-cream-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-6">
        
        {/* Left: Mobile menu toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-cream-100 transition shrink-0"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Brand Logo */}
        <a href="#" className="flex flex-col group items-start select-none shrink-0">
          <div className="flex items-center text-2xl sm:text-3xl font-display font-bold tracking-tight">
            {brandLetters.map((item, idx) => (
              <span
                key={idx}
                className={`${item.color} transition-transform group-hover:-translate-y-0.5 inline-block duration-200`}
                style={{ transitionDelay: `${idx * 20}ms` }}
              >
                {item.char}
              </span>
            ))}
          </div>
          <span className="font-hand text-sm sm:text-base text-coral-500 -mt-1 font-bold tracking-wider pl-0.5 whitespace-nowrap">
            Gifts & Hampers for Everyone ✨
          </span>
        </a>

        {/* Center: Desktop Navigation Links with generous spacing & no text wrap */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm xl:text-[15px] font-medium text-gray-700 whitespace-nowrap">
          <a
            href="#hero"
            className="flex items-center gap-1 text-coral-500 font-semibold transition hover:text-coral-600"
          >
            Home <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </a>

          <a
            href="#shop"
            className="flex items-center gap-1 hover:text-coral-500 transition"
          >
            Shop Gifts <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </a>

          <a
            href="#gift-finder"
            className="hover:text-coral-500 transition flex items-center gap-1"
          >
            <span>Gift Finder</span>
            <span className="text-xs">🎯</span>
          </a>

          <a
            href="#sale-offers"
            className="flex items-center gap-1.5 hover:text-coral-500 transition"
          >
            <span>Special Offers</span>
            <span className="bg-sunny-100 text-sunny-700 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full border border-sunny-300">
              SALE
            </span>
          </a>

          <a
            href="#what-we-offer"
            className="hover:text-coral-500 transition"
          >
            What We Offer
          </a>

          <a
            href="#testimonials"
            className="hover:text-coral-500 transition"
          >
            Reviews
          </a>

          <a
            href="#footer"
            className="hover:text-coral-500 transition"
          >
            Contact
          </a>
        </nav>

        {/* Right: Action Icons & Signature Guzal Cart Capsule */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2.5 rounded-full text-gray-700 hover:text-coral-500 hover:bg-coral-50 transition"
            title="Search gifts"
            aria-label="Search gifts"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Wishlist Trigger */}
          <button
            onClick={onOpenWishlist}
            className="relative p-2.5 rounded-full text-gray-700 hover:text-coral-500 hover:bg-coral-50 transition"
            title="Wishlist"
            aria-label="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-coral-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Account */}
          <button
            onClick={onOpenAuth}
            className="p-2.5 rounded-full text-gray-700 hover:text-coral-500 hover:bg-coral-50 transition hidden sm:flex"
            title="Account & Rewards"
            aria-label="User profile"
          >
            <User className="w-5 h-5" />
          </button>

          {/* Signature Guzal-style Cart Capsule Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="group flex items-center gap-2.5 sm:gap-3 bg-coral-500 hover:bg-coral-600 text-white rounded-full pl-4 sm:pl-5 pr-1.5 py-1.5 shadow-md shadow-coral-500/25 transition-all duration-200 active:scale-95 shrink-0"
            aria-label={`Shopping cart with ${totalItems} items`}
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
              Cart: {totalItems} Items
            </span>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#141414] text-white flex items-center justify-center transition-transform group-hover:rotate-12">
              <ShoppingBag className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-cream-200 bg-white px-6 py-5 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 text-base font-semibold text-gray-800">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-coral-500 transition"
            >
              Home
            </a>
            <a
              href="#shop"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-coral-500 transition"
            >
              Shop Curated Gifts
            </a>
            <a
              href="#gift-finder"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-coral-500 transition flex items-center justify-between"
            >
              <span>Interactive Gift Finder</span>
              <span>🎯</span>
            </a>
            <a
              href="#sale-offers"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-coral-500 transition flex items-center justify-between"
            >
              <span>Special Offers</span>
              <span className="bg-coral-100 text-coral-600 text-xs px-2 py-0.5 rounded-full font-bold">UP TO 48% OFF</span>
            </a>
            <a
              href="#what-we-offer"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-coral-500 transition"
            >
              What We Offer
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-coral-500 transition"
            >
              Customer Reviews
            </a>
            <a
              href="#footer"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-coral-500 transition"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
