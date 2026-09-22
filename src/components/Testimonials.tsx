import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-hand text-2xl sm:text-3xl text-coral-500 font-bold uppercase tracking-wider mb-1">
            LOVED BY PARENTS & GIFT GIVERS
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#141414] tracking-tight">
            Heartwarming Reviews
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Over 10,000+ happy families have celebrated their most treasured milestones with our gifts.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-[32px] p-7 border border-cream-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-sunny-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <h4 className="font-display font-bold text-gray-900 text-base mb-2">
                  "{review.title}"
                </h4>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {review.comment}
                </p>
              </div>

              {/* Author & Gift details */}
              <div className="pt-4 border-t border-cream-200 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-coral-200"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <h5 className="font-display font-bold text-sm text-gray-900 truncate">
                      {review.author}
                    </h5>
                    <span title="Verified Customer" className="inline-flex">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400">
                    {review.city} • <span className="text-coral-500 font-semibold">{review.giftType}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
