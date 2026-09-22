import React from 'react';

interface GalleryCard {
  id: number;
  bgGradient: string;
  image: string;
  alt: string;
  title: string;
  category: string;
  cardClass: string;
}

export const PerspectiveGallery: React.FC = () => {
  const cards: GalleryCard[] = [
    {
      id: 1,
      bgGradient: 'from-[#8ec07c] to-[#a3d98f]',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80',
      alt: 'Luxury satin-tied gift hamper box',
      title: 'Luxury Hampers',
      category: 'Celebration',
      cardClass: 'perspective-card-1',
    },
    {
      id: 2,
      bgGradient: 'from-[#54ced4] to-[#6de3e8]',
      image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80',
      alt: 'Artisanal chocolate gift box with ribbon',
      title: 'Chocolates & Sweets',
      category: 'Gourmet Treats',
      cardClass: 'perspective-card-2',
    },
    {
      id: 3,
      bgGradient: 'from-[#fec325] to-[#fed352]',
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=600&q=80',
      alt: 'Golden celebration surprise gift box',
      title: 'Festive Gift Boxes',
      category: 'Anniversary & Wedding',
      cardClass: 'perspective-card-3',
    },
    {
      id: 4,
      bgGradient: 'from-[#f98ca7] to-[#faabc0]',
      image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=600&q=80',
      alt: 'Pastel pink ribbon surprise gift box with confetti',
      title: 'Surprise Gift Boxes',
      category: 'Birthday Gifts',
      cardClass: 'perspective-card-4',
    },
    {
      id: 5,
      bgGradient: 'from-[#f99b24] to-[#fbae4e]',
      image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=600&q=80',
      alt: 'Aroma diffuser and scented candle relaxation gift',
      title: 'Aroma & Keepsakes',
      category: 'Personalized Sets',
      cardClass: 'perspective-card-5',
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 md:py-16 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* 5 3D Perspective Skewed Gift Cards Row matching Image 2 */}
        <div className="perspective-1000 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 items-center justify-center">
            {cards.map((card) => (
              <a
                key={card.id}
                href="#shop"
                className={`group relative overflow-hidden rounded-[26px] aspect-[4/5] bg-gradient-to-br ${card.bgGradient} shadow-md cursor-pointer ${card.cardClass}`}
              >
                {/* Photo of actual gift box with smooth hover effect */}
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Subtle Overlay Label */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sunny-300">
                    {card.category}
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base leading-tight">
                    {card.title}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Section Header Below Gallery matching Image 2 */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="font-hand text-2xl sm:text-3xl text-coral-500 font-bold tracking-wider uppercase mb-1">
            CURATED GIFTS FOR EVERY CELEBRATION
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#141414] tracking-tight">
            Exclusive Gift Offers & Hampers
          </h2>
        </div>
      </div>
    </section>
  );
};
