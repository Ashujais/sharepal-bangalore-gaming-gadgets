import React from 'react';
import { Gamepad2, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 pt-4 pb-2">
      <div
        className="relative flex min-h-[170px] md:min-h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl md:rounded-3xl shadow-md text-white"
        style={{ background: 'linear-gradient(135deg, #4C187C 0%, #7B1FA2 50%, #8A2BE2 100%)' }}
      >
        {/* Subtle background glow & decorative gamepad watermarks */}
        <div className="absolute -left-8 -bottom-8 opacity-15 pointer-events-none transform -rotate-12">
          <Gamepad2 className="w-48 h-48 md:w-64 md:h-64 text-white" />
        </div>
        <div className="absolute -right-8 -top-8 opacity-15 pointer-events-none transform rotate-12">
          <Gamepad2 className="w-48 h-48 md:w-64 md:h-64 text-white" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex w-full flex-col items-center justify-center gap-2 px-4 py-8 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-md text-secondary-400 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Zero Deposit Rentals • Doorstep Delivery</span>
          </div>

          <h1 className="font-ubuntu text-3xl sm:text-4xl md:text-5xl font-bold capitalize leading-tight tracking-tight drop-shadow-md">
            Gaming Consoles
          </h1>

          <p className="w-full max-w-2xl text-xs sm:text-sm md:text-base font-normal text-white/90 drop-shadow-sm leading-relaxed">
            Rent the latest gaming gadgets from PS5, Xbox, Oculus VR, Racing Wheel on rent in Bangalore.
          </p>

          {/* Quick trust pill tags */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs text-white/80">
            <span className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-secondary-500" /> 100% Quality Checked
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-full">
              <Zap className="w-3.5 h-3.5 text-secondary-500" /> Same Day / Scheduled Delivery
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
