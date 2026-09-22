import React from 'react';
import { ArrowUpRight, Gift, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#faf9f5] pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Decorative Whimsical Background Shapes matching Image 1 */}
      
      {/* Top Left: Soft powder-blue flower cloud */}
      <div className="absolute top-6 left-12 sm:left-24 w-16 h-16 sm:w-24 sm:h-24 text-[#bde0fe]/80 animate-float-slow pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 15 C45 2 25 2 20 15 C5 20 2 40 15 50 C2 60 5 80 20 85 C25 98 45 98 50 85 C55 98 75 98 80 85 C95 80 98 60 85 50 C98 40 95 20 80 15 C75 2 55 2 50 15 Z" />
        </svg>
      </div>

      {/* Large Center-Left Sage/Lime Green Pinwheel / Flower Petal Shape */}
      <div className="absolute -left-16 sm:-left-12 top-1/2 -translate-y-1/2 w-56 sm:w-80 h-56 sm:h-80 text-[#9bc658] opacity-85 animate-spin-slow pointer-events-none select-none z-0">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 100 C100 40 140 10 180 30 C200 70 170 100 100 100 Z" opacity="0.9" />
          <path d="M100 100 C160 100 190 140 170 180 C130 200 100 170 100 100 Z" opacity="0.9" />
          <path d="M100 100 C100 160 60 190 20 170 C0 130 30 100 100 100 Z" opacity="0.9" />
          <path d="M100 100 C40 100 10 60 30 20 C70 0 100 30 100 100 Z" opacity="0.9" />
        </svg>
      </div>

      {/* Bottom Right: Soft Baby-Blue 4-point Organic Star/Flower Shape */}
      <div className="absolute -bottom-6 right-8 sm:right-28 w-28 sm:w-44 h-28 sm:h-44 text-[#b9dcf7] opacity-80 animate-float-slow pointer-events-none select-none z-0">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C45 35 35 45 0 50 C35 55 45 65 50 100 C55 65 65 55 100 50 C65 45 55 35 50 0 Z" />
        </svg>
      </div>

      {/* Subtle top right sparkle */}
      <div className="absolute top-16 right-16 hidden lg:block text-coral-400 animate-pulse">
        <Sparkles className="w-8 h-8" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Playful Headline Typography adapted to Curated Gifts for Everyone */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#141414] leading-[1.18] sm:leading-[1.15] mb-6">
          <span className="block">Curated Gifting</span>
          
          <span className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span>Choice in</span>
            
            {/* Cute Gift Box Badge (circular badge with ribbon gift icon) */}
            <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#fed7aa] border-2 sm:border-3 border-coral-400 shadow-sm transform hover:rotate-12 transition-transform cursor-pointer">
              <span className="text-2xl sm:text-3xl" role="img" aria-label="Cute gift badge">🎁</span>
            </span>

            {/* "Colorful" with Lilac Brush Highlighter Background */}
            <span className="relative inline-block px-3 py-0.5 sm:px-4 sm:py-1">
              <span className="absolute inset-0 bg-[#d8b4fe]/60 rounded-full -rotate-1 transform -z-10 scale-105"></span>
              <span className="relative text-[#141414]">Colorful</span>
            </span>
          </span>

          {/* "Celebrations" with Warm Yellow Curved Highlighter Underline */}
          <span className="relative inline-block mt-1 sm:mt-2">
            <span className="relative z-10">Celebrations</span>
            <svg
              className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-4 sm:h-6 text-sunny-400 -z-10"
              viewBox="0 0 300 24"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M4 18 C60 8, 140 5, 296 14 C210 24, 90 20, 4 18 Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </h1>

        {/* Subtitle explicitly focusing on Gifts for Everyone */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 font-normal leading-relaxed mb-8 sm:mb-10">
          Discover Handcrafted Gift Hampers, Personalized Keepsakes, Artisanal Chocolates, and Heartfelt Surprises for Everyone You Love at <strong className="font-semibold text-gray-800">Khetheshwara Gift Shop</strong>.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-coral-500 hover:bg-coral-600 text-white font-display text-lg font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-coral-500/30 hover:shadow-xl hover:shadow-coral-500/40 hover:-translate-y-0.5 transition-all duration-200 active:scale-95 group"
          >
            <span>Explore Gifts</span>
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-coral-500 transition-colors">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>

          <a
            href="#gift-finder"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-sunny-50 text-gray-800 font-display text-lg font-semibold px-7 py-3.5 rounded-full border-2 border-sunny-400 shadow-sm hover:border-sunny-500 transition-all duration-200 active:scale-95"
          >
            <Gift className="w-5 h-5 text-sunny-500" />
            <span>Interactive Gift Finder</span>
          </a>
        </div>
      </div>
    </section>
  );
};
