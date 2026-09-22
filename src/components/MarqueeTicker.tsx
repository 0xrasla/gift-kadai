import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const tickerItems = [
    'Ready to find the perfect gift for someone special?',
    'Curated Luxury Hampers for Birthdays, Anniversaries & Weddings',
    'Free Signature Gift Wrapping on Orders Above ₹1,999',
    'Personalized Laser-Engraved Keepsakes for Everyone',
    'Handwritten Greeting Card & Satin Ribbon Included with Every Gift',
    'Express Same-Day Gifting Dispatch Across India',
  ];

  return (
    <div className="relative overflow-hidden bg-sunny-500 text-[#141414] py-3.5 sm:py-4 select-none border-y-2 border-black/10 shadow-inner">
      <div className="flex w-max animate-marquee font-display font-bold text-base sm:text-xl tracking-tight">
        {/* First repetition */}
        <div className="flex items-center gap-8 px-4">
          {tickerItems.map((item, idx) => (
            <React.Fragment key={`ticker-1-${idx}`}>
              <span className="whitespace-nowrap flex items-center gap-3">
                <span className="text-xl sm:text-2xl text-black">✦</span>
                <span>{item}</span>
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Second duplicate for seamless infinite loop */}
        <div className="flex items-center gap-8 px-4" aria-hidden="true">
          {tickerItems.map((item, idx) => (
            <React.Fragment key={`ticker-2-${idx}`}>
              <span className="whitespace-nowrap flex items-center gap-3">
                <span className="text-xl sm:text-2xl text-black">✦</span>
                <span>{item}</span>
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
