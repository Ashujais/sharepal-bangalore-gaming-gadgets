import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { X, Calendar, Clock, Check } from 'lucide-react';

export const DatePickerModal: React.FC = () => {
  const { isDateModalOpen, setIsDateModalOpen, setRentalDates, deliveryDate, pickupDate } = useCart();

  const today = new Date();
  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const defaultEnd = new Date(today);
  defaultEnd.setDate(defaultEnd.getDate() + 3);

  const [delivery, setDelivery] = useState<string>(deliveryDate || formatDate(tomorrow));
  const [pickup, setPickup] = useState<string>(pickupDate || formatDate(defaultEnd));

  if (!isDateModalOpen) return null;

  const calculateDays = () => {
    if (!delivery || !pickup) return 1;
    const d1 = new Date(delivery).getTime();
    const d2 = new Date(pickup).getTime();
    const diff = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  };

  const handleApply = () => {
    setRentalDates(delivery, pickup);
    setIsDateModalOpen(false);
  };

  const days = calculateDays();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-category-purple" />
            <h3 className="text-lg font-bold text-neutral-900">Select Rental Dates</h3>
          </div>
          <button
            type="button"
            onClick={() => setIsDateModalOpen(false)}
            className="rounded-full p-1.5 text-neutral-400 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="mt-2 text-xs text-neutral-500">
          Your gear will arrive by 3:00 PM on the Delivery Date. Pickup happens after 3:00 PM on the Return Date.
        </p>

        {/* Inputs */}
        <div className="mt-5 space-y-4">
          <div>
            <label className="text-xs font-bold text-neutral-700 block mb-1">
              Delivery Date (Start)
            </label>
            <input
              type="date"
              min={formatDate(today)}
              value={delivery}
              onChange={e => setDelivery(e.target.value)}
              className="w-full rounded-2xl border border-neutral-300 p-3 text-sm focus:border-category-purple focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-neutral-700 block mb-1">
              Pickup Date (Return)
            </label>
            <input
              type="date"
              min={delivery || formatDate(tomorrow)}
              value={pickup}
              onChange={e => setPickup(e.target.value)}
              className="w-full rounded-2xl border border-neutral-300 p-3 text-sm focus:border-category-purple focus:outline-none"
            />
          </div>
        </div>

        {/* Duration Preview Box */}
        <div className="mt-5 rounded-2xl bg-purple-50 p-4 border border-purple-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-category-purple" />
            <span className="text-xs font-medium text-purple-900">Total Rental Duration:</span>
          </div>
          <span className="text-sm font-bold text-category-purple bg-white px-2.5 py-1 rounded-full shadow-xs">
            {days} {days === 1 ? 'Day' : 'Days'}
          </span>
        </div>

        {/* Apply CTA */}
        <div className="mt-6 flex items-center gap-2">
          <button
            type="button"
            onClick={handleApply}
            className="w-full rounded-2xl bg-primary-900 py-3 text-sm font-bold text-white shadow-md hover:bg-black transition-all flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" /> Apply Rental Dates
          </button>
        </div>
      </div>
    </div>
  );
};
