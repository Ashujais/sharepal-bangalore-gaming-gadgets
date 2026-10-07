import React from 'react';
import { useCart } from '../../context/CartContext';
import { CITIES } from '../../data/products';
import { X, MapPin, Check } from 'lucide-react';

export const CityModal: React.FC = () => {
  const { isCityModalOpen, setIsCityModalOpen, selectedCity, setSelectedCity } = useCart();

  if (!isCityModalOpen) return null;

  const handleSelect = (city: string) => {
    setSelectedCity(city);
    setIsCityModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-category-purple" />
            <h3 className="text-lg font-bold text-neutral-900">Select Your City</h3>
          </div>
          <button
            type="button"
            onClick={() => setIsCityModalOpen(false)}
            className="rounded-full p-1.5 text-neutral-400 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="mt-2 text-xs text-neutral-500">
          SharePal offers free doorstep delivery & pickup across major Indian cities:
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2.5">
          {CITIES.map(city => {
            const isSelected = selectedCity === city;
            return (
              <button
                key={city}
                type="button"
                onClick={() => handleSelect(city)}
                className={`flex items-center justify-between rounded-2xl border p-3.5 text-sm font-semibold transition-all ${
                  isSelected
                    ? 'border-category-purple bg-purple-50/50 text-category-purple shadow-xs font-bold'
                    : 'border-neutral-200 hover:border-neutral-300 text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                <span>{city}</span>
                {isSelected && <Check className="w-4 h-4 text-category-purple" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
