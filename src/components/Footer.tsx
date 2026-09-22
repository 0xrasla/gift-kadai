import React from 'react';
import { ArrowUp, Heart, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <footer id="footer" className="relative bg-[#141414] text-cream-200 pt-16 pb-12 overflow-hidden border-t-4 border-sunny-500">
      
      {/* Floating Scroll to Top button matching Image 3 */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-white text-gray-900 hover:text-coral-500 hover:bg-cream-100 shadow-xl border border-cream-200 flex items-center justify-center transition-all hover:-translate-y-1 active:scale-95"
        title="Back to top"
        aria-label="Scroll to top of page"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center text-3xl font-display font-bold tracking-tight mb-1">
              {brandLetters.map((item, idx) => (
                <span key={idx} className={item.color}>
                  {item.char}
                </span>
              ))}
            </div>
            <span className="font-hand text-lg text-coral-400 font-bold block mb-4">
              Curated Gifts & Luxury Hampers for Everyone ✨
            </span>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Handcrafting heartfelt gifting experiences for Birthdays, Anniversaries, Weddings, Festivals, and cherished moments. Every gift box is wrapped with love, satin ribbons, and customized greeting notes.
            </p>
            <div className="flex items-center gap-3">
              <a href="#social" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-coral-500 hover:text-white flex items-center justify-center transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#social" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-coral-500 hover:text-white flex items-center justify-center transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#social" aria-label="Twitter / X" className="w-9 h-9 rounded-full bg-white/10 hover:bg-coral-500 hover:text-white flex items-center justify-center transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Gift Links */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4">
              Gift Collections
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400 font-medium">
              <li><a href="#shop" className="hover:text-coral-400 transition">Imperial Luxury Hampers</a></li>
              <li><a href="#shop" className="hover:text-coral-400 transition">Personalized Photo Lamps</a></li>
              <li><a href="#shop" className="hover:text-coral-400 transition">Artisanal Belgian Truffles</a></li>
              <li><a href="#shop" className="hover:text-coral-400 transition">Everlasting Preserved Roses</a></li>
              <li><a href="#shop" className="hover:text-coral-400 transition">Executive Leather Sets</a></li>
            </ul>
          </div>

          {/* Gifting Assistance */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400 font-medium">
              <li><a href="#gift-finder" className="hover:text-coral-400 transition">Interactive Gift Finder 🎯</a></li>
              <li><a href="#cart" className="hover:text-coral-400 transition">Signature Gift Wrapping</a></li>
              <li><a href="#track" className="hover:text-coral-400 transition">Track Your Gift Order</a></li>
              <li><a href="#shipping" className="hover:text-coral-400 transition">Shipping & Delivery Info</a></li>
              <li><a href="#faq" className="hover:text-coral-400 transition">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Contact Boutique */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4">
              Boutique Store
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-400 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sunny-400 shrink-0 mt-0.5" />
                <span>#42, Heritage Boulevard, Indiranagar, Bengaluru, 560038</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sunny-400 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sunny-400 shrink-0" />
                <span>hello@khetheshwaragifts.com</span>
              </li>
              <li className="text-[11px] text-gray-500 pt-1">
                Mon - Sun: 9:00 AM - 9:30 PM IST
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & payment icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="flex items-center gap-1 text-center sm:text-left">
            © {new Date().getFullYear()} Khetheshwara Gift Shop. Handcrafted with <Heart className="w-3.5 h-3.5 text-coral-500 fill-current inline" /> for your loved ones.
          </p>
          <div className="flex items-center gap-3 text-gray-400 text-[11px]">
            <span className="bg-white/10 px-2 py-1 rounded">UPI / GPay</span>
            <span className="bg-white/10 px-2 py-1 rounded">RuPay</span>
            <span className="bg-white/10 px-2 py-1 rounded">Visa</span>
            <span className="bg-white/10 px-2 py-1 rounded">Mastercard</span>
            <span className="bg-white/10 px-2 py-1 rounded">Cash on Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
