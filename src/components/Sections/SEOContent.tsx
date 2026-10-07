import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const SEOContent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="container mx-auto px-4 md:px-6 py-8 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto rounded-3xl bg-neutral-50/60 p-6 md:p-8 border border-neutral-200">
        <h2 className="font-ubuntu text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 mb-3">
          Rent Gaming Consoles & Gadgets in Bangalore with Zero Deposit
        </h2>

        <div
          className={`overflow-hidden transition-all duration-300 text-xs sm:text-sm text-neutral-600 leading-relaxed space-y-3 ${
            isExpanded ? 'max-h-[2000px]' : 'max-h-[160px]'
          }`}
        >
          <p>
            Looking to experience high-octane next-gen gaming without spending ₹50,000+ on a new console?
            SharePal brings you the most flexible, affordable, and trustworthy platform to <strong>rent gaming gadgets in Bangalore</strong>.
            Whether you want a PlayStation 5 for a weekend gaming party with friends, a competitive FIFA/FC tournament,
            or to try out exclusive titles like God of War Ragnarök and Spider-Man Miles Morales, we deliver everything right to your doorstep.
          </p>

          <h3 className="font-bold text-neutral-800 text-sm md:text-base pt-2">
            What Gaming Gadgets Can You Rent in Bangalore?
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>PlayStation 5 (PS5) Consoles:</strong> Rent PS5 with 1 or 2 DualSense wireless controllers, loaded with 100+ top-rated games including EA Play and PS Plus Deluxe subscriptions.
            </li>
            <li>
              <strong>Latest Football & Sports Titles:</strong> Rent PS5 bundled with FC25, FC26, FC27, and Cricket 24 for competitive couch co-op tournaments.
            </li>
            <li>
              <strong>PS5 Mega Racing Wheel Combos:</strong> Immersive force-feedback racing wheel and pedals setup for Gran Turismo 7 and F1 simulation gaming.
            </li>
            <li>
              <strong>PlayStation Portal Remote Player:</strong> Handheld PS5 streaming player for wireless handheld gaming freedom anywhere at home.
            </li>
          </ul>

          <h3 className="font-bold text-neutral-800 text-sm md:text-base pt-2">
            Why Rent from SharePal in Bangalore?
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Zero Security Deposit:</strong> Enjoy stress-free gaming rentals without locking up thousands of rupees in security deposits.
            </li>
            <li>
              <strong>Free Doorstep Delivery & Pickup:</strong> We deliver across all Bangalore localities including Koramangala, Indiranagar, HSR Layout, Whitefield, Electronic City, Jayanagar, Marathahalli, and Bellandur.
            </li>
            <li>
              <strong>100% Quality & Hygiene Inspected:</strong> Every console, controller, and accessory is sanitized and thoroughly tested before dispatch.
            </li>
            <li>
              <strong>Pay on Delivery:</strong> Verify your console upon arrival and pay conveniently via UPI, card, or cash.
            </li>
          </ul>
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-category-purple hover:underline"
        >
          <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </div>
    </section>
  );
};
