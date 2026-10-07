import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { Calendar, ArrowUp } from 'lucide-react';

export const FloatingControls: React.FC = () => {
  const { setIsDateModalOpen, deliveryDate, pickupDate, totalDays } = useCart();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Center Sticky Date Selector Pill */}
      <div className="fixed left-4 right-4 z-40 mx-auto flex max-w-max justify-center bottom-4 md:bottom-8 animate-in slide-in-from-bottom duration-300 pointer-events-auto">
        <button
          type="button"
          onClick={() => setIsDateModalOpen(true)}
          className="relative rounded-full border-2 border-secondary-500 bg-primary-900 shadow-xl hover:bg-black transition-all transform hover:scale-105"
        >
          <div className="flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-gray-100">
            <Calendar className="h-4 w-4 text-secondary-500" />
            <span>
              {deliveryDate && pickupDate
                ? `Renting for ${totalDays} Day(s) • Edit Dates`
                : 'Select rental dates to view prices'}
            </span>
          </div>
        </button>
      </div>

      {/* Floating Right Actions */}
      <div className="fixed right-4 md:right-6 bottom-4 md:bottom-8 z-40 flex flex-col items-center gap-3">
        {/* Back to top button */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-white text-neutral-800 shadow-lg border border-neutral-200 hover:bg-neutral-100 transition-all transform hover:-translate-y-1"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Chat Support Button */}
        <a
          href="https://wa.me/919108372345?text=Hi%20SharePal,%20I%20want%20to%20rent%20gaming%20gadgets%20in%20Bangalore"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-secondary-600 hover:bg-secondary-500 text-neutral-950 shadow-xl transition-all transform hover:scale-110 active:scale-95"
          title="Chat with SharePal Bangalore on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            viewBox="0 0 30 30"
          >
            <path
              fill="#000"
              d="m7.881 24.741 1.086.634A11.9 11.9 0 0 0 15.002 27a12 12 0 1 0-12-12 11.9 11.9 0 0 0 1.626 6.036l.633 1.086-.98 3.602zM.008 30l2.028-7.452A14.9 14.9 0 0 1 .002 15c0-8.285 6.715-15 15-15s15 6.716 15 15c0 8.285-6.715 15-15 15a14.9 14.9 0 0 1-7.545-2.032zm9.58-22.038q.303-.021.605-.006.121.009.243.024c.239.027.501.172.59.373q.67 1.523 1.302 3.06c.093.229.037.521-.14.806-.09.146-.231.35-.395.558-.169.218-.534.617-.534.617s-.148.176-.091.397c.021.084.09.205.153.307l.088.143c.384.64.9 1.29 1.53 1.902.18.174.356.352.545.519a9 9 0 0 0 2.355 1.5l.008.003c.127.056.191.085.377.165q.14.058.287.099.054.015.11.017a.52.52 0 0 0 .442-.213c1.085-1.314 1.185-1.4 1.193-1.4v.003a.72.72 0 0 1 .567-.19.8.8 0 0 1 .265.06c.796.364 2.1.933 2.1.933l.873.391c.147.07.28.237.285.397.006.101.015.263-.02.56-.047.389-.165.855-.282 1.1q-.122.25-.314.453a3.6 3.6 0 0 1-.495.431 3 3 0 0 1-.188.136 8 8 0 0 1-.575.33 3 3 0 0 1-1.249.345c-.277.015-.555.035-.834.02-.012 0-.852-.13-.852-.13a14.2 14.2 0 0 1-5.76-3.069c-.339-.299-.654-.62-.975-.939-1.332-1.328-2.342-2.76-2.955-4.113a5.25 5.25 0 0 1-.495-2.12 4.1 4.1 0 0 1 .847-2.52c.11-.14.213-.287.392-.457.189-.18.31-.276.441-.342a1.5 1.5 0 0 1 .556-.15"
            />
          </svg>
        </a>
      </div>
    </>
  );
};
