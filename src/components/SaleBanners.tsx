import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const SaleBanners: React.FC = () => {
  const { applyDiscountCode } = useCart();

  return (
    <section id="sale-offers" className="py-8 sm:py-12 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 3 Sale Cards Grid matching Image 3 with Real Gift Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          
          {/* Card 1: Green "20% Off Favorite Hampers!" */}
          <div className="group relative overflow-hidden rounded-[32px] bg-[#61a457] p-7 sm:p-8 text-white min-h-[380px] flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Background Concentric Pink Rings graphic */}
            <div className="absolute -bottom-16 -left-10 w-72 h-72 rounded-full border-[28px] border-[#f8a5c2]/40 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full border-[32px] border-[#4b8a43]/50 pointer-events-none"></div>

            {/* Top Row: Sparkles & Arrow Action */}
            <div className="relative z-10 flex items-start justify-between">
              <div className="flex items-center gap-1 text-[#f8a5c2] font-bold text-lg">
                <Sparkles className="w-5 h-5" />
                <span>+ + +</span>
              </div>
              <a
                href="#shop"
                className="w-11 h-11 rounded-full border-2 border-white/80 flex items-center justify-center text-white hover:bg-white hover:text-[#61a457] transition-colors"
                aria-label="Shop 20% off favorite hampers"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            {/* Middle: Headline Text */}
            <div className="relative z-10 my-auto pt-4">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#fbb1cd] tracking-tight">
                20% Off
              </div>
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-0.5">
                Favorite Hampers!
              </div>
              <p className="text-white/85 text-xs sm:text-sm font-medium mt-2 max-w-[210px]">
                Handpicked artisanal sweets, dry fruits, and relaxation hampers.
              </p>
            </div>

            {/* Bottom: Gift Image */}
            <div className="relative z-10 flex justify-end -mr-4 -mb-8">
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=450&q=80"
                alt="Luxury wrapped gift hamper"
                className="w-48 sm:w-56 h-48 sm:h-56 object-cover rounded-full border-4 border-white/30 shadow-md group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Card 2: Orange "48% Off Super Sale!" (Featured Center Card) */}
          <div className="group relative overflow-hidden rounded-[32px] bg-[#ff5a26] p-7 sm:p-8 text-white min-h-[380px] flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 md:-translate-y-2">
            {/* Wavy zig-zag background pattern */}
            <svg
              className="absolute inset-0 w-full h-full text-[#ea4712] opacity-40 pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M-10 40 Q25 20, 50 40 T110 40 L110 110 L-10 110 Z"
                fill="currentColor"
              />
            </svg>

            {/* Top Row: Badge & Arrow Action */}
            <div className="relative z-10 flex items-start justify-between">
              <span className="bg-white/20 backdrop-blur-sm text-sunny-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Festive Mega Offer
              </span>
              <button
                onClick={() => applyDiscountCode('SUPER48')}
                className="w-11 h-11 rounded-full border-2 border-white/80 flex items-center justify-center text-white hover:bg-white hover:text-[#ff5a26] transition-colors"
                title="Apply 48% Off Coupon: SUPER48"
                aria-label="Apply 48% super sale coupon"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

            {/* Middle: Headline Text */}
            <div className="relative z-10 my-auto pt-4">
              <div className="font-display font-black text-4xl sm:text-5xl text-[#ffeb3b] tracking-tight">
                48% Off
              </div>
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-0.5">
                Super Sale!
              </div>
              <p className="text-white/90 text-xs sm:text-sm font-medium mt-2 max-w-[220px]">
                Apply coupon <strong className="text-yellow-200 underline font-bold">SUPER48</strong> on luxury celebration gift boxes!
              </p>
            </div>

            {/* Bottom: Gift Image */}
            <div className="relative z-10 flex justify-end -mr-4 -mb-8">
              <img
                src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=450&q=80"
                alt="Golden festive celebration gift box"
                className="w-52 sm:w-60 h-52 sm:h-60 object-cover rounded-full border-4 border-white/30 shadow-md group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Card 3: Royal Blue "20% Off Personalized Gifts!" */}
          <div className="group relative overflow-hidden rounded-[32px] bg-[#3e79d1] p-7 sm:p-8 text-white min-h-[380px] flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Subtle Diagonal Diamond Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_2px,transparent_2px)] [background-size:16px_16px] pointer-events-none"></div>

            {/* Top Row: Sparkles & Arrow Action */}
            <div className="relative z-10 flex items-start justify-between">
              <div className="flex items-center gap-1 text-sunny-300 font-bold text-lg">
                <Sparkles className="w-5 h-5" />
                <span>✦ ✦ ✦</span>
              </div>
              <a
                href="#shop"
                className="w-11 h-11 rounded-full border-2 border-white/80 flex items-center justify-center text-white hover:bg-white hover:text-[#3e79d1] transition-colors"
                aria-label="Shop personalized gifts"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            {/* Middle: Headline Text */}
            <div className="relative z-10 my-auto pt-4">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#ffb0ca] tracking-tight">
                20% Off
              </div>
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-0.5">
                Personalized!
              </div>
              <p className="text-white/85 text-xs sm:text-sm font-medium mt-2 max-w-[210px]">
                Custom photo lamps, engraved pens, and preserved roses.
              </p>
            </div>

            {/* Bottom: Gift Image */}
            <div className="relative z-10 flex justify-end -mr-4 -mb-8">
              <img
                src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=450&q=80"
                alt="Preserved rose and romantic gift"
                className="w-48 sm:w-56 h-48 sm:h-56 object-cover rounded-full border-4 border-white/30 shadow-md group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
