import React from 'react';

export const BrandLogos: React.FC = () => {
  return (
    <div className="py-10 bg-[#faf9f5] border-b border-cream-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-around gap-8 sm:gap-12 opacity-80 hover:opacity-100 transition-opacity">
          
          {/* Logo 1: GIFT BAR */}
          <div className="flex items-center gap-2 text-[#432d66] select-none hover:scale-105 transition-transform">
            <span className="font-hand font-extrabold text-3xl sm:text-4xl text-[#5b3b8c] tracking-tight">
              gift bar
            </span>
            <span className="w-5 h-5 rounded-full bg-sunny-400 border border-sunny-500 inline-block -ml-1.5 rotate-12 flex items-center justify-center text-[10px]">
              🎁
            </span>
          </div>

          {/* Logo 2: ROYAL HAMPER circular stamp */}
          <div className="flex items-center gap-3 select-none hover:scale-105 transition-transform text-[#1c1b1f]">
            <div className="relative w-16 h-16 rounded-full border-2 border-dashed border-[#1c1b1f] flex flex-col items-center justify-center p-1">
              <span className="text-[7px] font-bold tracking-widest uppercase">★ ROYAL ★</span>
              <span className="text-lg leading-none my-0.5">👑</span>
              <span className="text-[7px] font-bold tracking-wider uppercase">HAMPERS</span>
            </div>
          </div>

          {/* Logo 3: GIFT STUDIO */}
          <div className="flex items-center gap-2 select-none hover:scale-105 transition-transform text-[#1c1b1f]">
            <div className="w-9 h-9 rounded-full bg-cyan-300 border-2 border-[#1c1b1f] flex items-center justify-center text-xs font-bold text-[#1c1b1f] shadow-sm">
              ✨
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider leading-none">
                GIFT
              </span>
              <span className="text-[10px] font-bold tracking-[0.25em] text-gray-600">
                STUDIO
              </span>
            </div>
          </div>

          {/* Logo 4: SWEET BOX circular badge */}
          <div className="flex items-center gap-2 select-none hover:scale-105 transition-transform text-[#1c1b1f]">
            <div className="w-16 h-16 rounded-full border-2 border-[#1c1b1f] bg-sunny-100 flex flex-col items-center justify-center p-1 shadow-sm">
              <span className="text-[7px] font-extrabold tracking-wider">SWEET BOX</span>
              <span className="text-lg leading-none">🍫</span>
              <span className="text-[6px] font-semibold text-gray-600">GOURMET</span>
            </div>
          </div>

          {/* Logo 5: CELEBRATIONS */}
          <div className="flex items-center gap-2 select-none hover:scale-105 transition-transform text-[#1c1b1f]">
            <div className="flex flex-col items-center">
              <span className="font-display font-black text-sm tracking-widest text-[#1c1b1f]">
                MOMENTS
              </span>
              <div className="flex items-center gap-1 my-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-coral-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-sunny-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-grass-400"></span>
              </div>
              <span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase">
                GIFTING
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
