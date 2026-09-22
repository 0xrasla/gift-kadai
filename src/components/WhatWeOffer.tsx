import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const WhatWeOffer: React.FC = () => {
  const offerings = [
    {
      num: '01',
      badgeBg: 'bg-[#ff6f3c]',
      badgeRing: 'ring-4 ring-[#ff6f3c]/20',
      title: "Personalized & Engraved Keepsakes",
      description: "Laser-engraved 3D optical acrylic lamps, custom photo memory frames, monogrammed leather wallets & pens, etched glassware, and bespoke anniversary plaques.",
    },
    {
      num: '02',
      badgeBg: 'bg-[#8957e5]',
      badgeRing: 'ring-4 ring-[#8957e5]/20',
      title: "Luxury Hampers & Gourmet Trunks",
      description: "Handcrafted opulent baskets filled with Belgian chocolates, California dry fruits, botanical soy candles, Kashmiri saffron, and celebratory gourmet delights.",
    },
    {
      num: '03',
      badgeBg: 'bg-[#76c245]',
      badgeRing: 'ring-4 ring-[#76c245]/20',
      title: "Occasion & Milestone Celebrations",
      description: "Curated gift collections for Birthdays, Anniversaries, Weddings, Housewarmings, Corporate gifting, and festive celebrations with hand-tied satin ribbons.",
    },
  ];

  return (
    <section id="what-we-offer" className="py-16 sm:py-24 bg-[#faf9f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header matching Image 4 */}
        <div className="mb-12 sm:mb-16">
          <p className="font-hand text-2xl sm:text-3xl text-coral-500 font-bold uppercase tracking-wider mb-1">
            BESPOKE GIFTING SERVICES FOR EVERYONE
          </p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#141414] tracking-tight">
            What Can We Offer
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Numbered Items (01, 02, 03) */}
          <div className="lg:col-span-6 flex flex-col gap-8 sm:gap-10">
            {offerings.map((item) => (
              <div key={item.num} className="flex items-start gap-5 sm:gap-6 group">
                {/* Number Badge */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full shrink-0 ${item.badgeBg} ${item.badgeRing} text-white flex items-center justify-center font-display font-extrabold text-xl sm:text-2xl shadow-md transition-transform group-hover:scale-110 duration-200`}
                >
                  {item.num}
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#141414] mb-2 group-hover:text-coral-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* About Us Button */}
            <div className="pt-4">
              <a
                href="#shop"
                className="inline-flex items-center gap-2.5 bg-coral-500 hover:bg-coral-600 text-white font-display text-base sm:text-lg font-semibold px-7 py-3 rounded-full shadow-md shadow-coral-500/25 hover:shadow-lg transition-all duration-200 active:scale-95 group"
              >
                <span>Explore Curated Gifts</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-coral-500 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Whimsical Collage with Real Gift Boxes matching Image 4 */}
          <div className="lg:col-span-6 relative min-h-[440px] sm:min-h-[500px] flex items-center justify-center">
            
            {/* Background Graphic Blobs */}
            <div className="relative w-full max-w-lg aspect-square">
              
              {/* Photo Card 1 (Top Center: Luxury wrapped gift hamper, orange backdrop) */}
              <div className="absolute top-2 left-1/3 w-44 sm:w-56 h-48 sm:h-60 rounded-[32px] overflow-hidden bg-[#ff6f3c] p-2 shadow-xl -rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
                <img
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=500&q=80"
                  alt="Luxury gift hamper with ribbon"
                  className="w-full h-full object-cover rounded-[26px]"
                  loading="lazy"
                />
              </div>

              {/* Photo Card 2 (Bottom Left: Pastel surprise gift box with confetti, purple backdrop) */}
              <div className="absolute bottom-4 left-4 w-44 sm:w-56 h-48 sm:h-60 rounded-[36px] overflow-hidden bg-[#8957e5] p-2 shadow-xl rotate-2 hover:rotate-0 transition-transform duration-300 z-20">
                <img
                  src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=500&q=80"
                  alt="Pastel birthday surprise gift box"
                  className="w-full h-full object-cover rounded-[30px]"
                  loading="lazy"
                />
              </div>

              {/* Photo Card 3 (Center Right: Golden festive celebration gift box, green backdrop) */}
              <div className="absolute top-28 right-2 sm:right-6 w-44 sm:w-56 h-48 sm:h-60 rounded-[32px] overflow-hidden bg-[#9ecc4a] p-2 shadow-xl rotate-6 hover:rotate-0 transition-transform duration-300 z-10">
                <img
                  src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=500&q=80"
                  alt="Golden festive celebration box"
                  className="w-full h-full object-cover rounded-[26px]"
                  loading="lazy"
                />
              </div>

              {/* Sticker 1: 25k+ Happy Givers Orange Badge */}
              <div className="absolute bottom-16 right-4 sm:right-8 bg-[#ff6f3c] text-white px-3.5 py-2 rounded-2xl shadow-xl z-30 flex flex-col items-center rotate-3 animate-pulse-soft">
                <span className="font-display font-extrabold text-xl sm:text-2xl leading-none">25k+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">Happy Givers</span>
              </div>

              {/* Sticker 2: Coral Heart Speech Bubble */}
              <div className="absolute top-12 left-16 sm:left-20 bg-coral-500 text-white p-2 rounded-full shadow-md z-30 -rotate-12">
                <span className="text-xl leading-none">💌</span>
              </div>

              {/* Sticker 3: Yellow Heart Speech Bubble */}
              <div className="absolute bottom-24 left-1/2 bg-sunny-400 text-white p-2 rounded-full shadow-md z-30 rotate-12">
                <span className="text-xl leading-none">🎁</span>
              </div>

              {/* Sticker 4: Green Leaf/Sparkle Bubble */}
              <div className="absolute top-8 right-16 bg-grass-500 text-white p-2 rounded-full shadow-md z-30 rotate-6">
                <span className="text-xl leading-none">✨</span>
              </div>

              {/* Doodle Arrow SVG */}
              <div className="absolute bottom-6 right-28 sm:right-36 w-16 h-16 pointer-events-none text-black/80 z-30">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                  <path d="M 80 20 C 60 50, 40 80, 20 60 C 10 50, 20 30, 40 40 C 60 50, 75 75, 85 80" />
                  <path d="M 75 85 L 85 80 L 80 70" />
                </svg>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
