import React from 'react';
import { REVIEWS, STATS } from '../../data/products';
import { Star, Quote } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="bg-neutral-50/80 py-12 md:py-16 border-y border-neutral-200">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="font-ubuntu text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900">
            Served more than <span className="text-category-purple">1 Lakh Orders</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-500 max-w-lg mx-auto">
            Gamers, creators, and adventurers across Bangalore trust SharePal for premium rentals with zero security deposit.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {REVIEWS.slice(0, 3).map(review => (
              <div
                key={review.id}
                className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm border border-neutral-200/80 hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-neutral-200 mb-2" />
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>
                <div className="mt-6 border-t border-neutral-100 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">{review.name}</h4>
                    <span className="text-xs text-neutral-400">{review.city}</span>
                  </div>
                  <span className="text-[11px] text-neutral-400">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental & Scale Impact Statistics */}
        <div className="mt-14 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center border-t border-neutral-200 pt-10">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <h3 className="bg-review-gradient bg-clip-text font-ubuntu text-4xl lg:text-5xl font-extrabold text-transparent">
                {stat.value}
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-neutral-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
