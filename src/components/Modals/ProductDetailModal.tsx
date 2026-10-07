import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { X, Star, Flame, Heart, ShieldCheck, Truck, RotateCcw, Check, Plus } from 'lucide-react';

export const ProductDetailModal: React.FC = () => {
  const {
    selectedProductDetail,
    setSelectedProductDetail,
    addToCart,
    cart,
    isInWishlist,
    toggleWishlist,
    totalDays,
  } = useCart();

  const [customDays, setCustomDays] = useState<number>(totalDays || 1);

  if (!selectedProductDetail) return null;

  const product = selectedProductDetail;
  const cartItem = cart.find(item => item.product.id === product.id);
  const isWishlisted = isInWishlist(product.id);

  const calculatedRent = Math.round(product.per_day_rent * customDays);

  const handleClose = () => setSelectedProductDetail(null);

  const handleAddToCart = () => {
    addToCart(product, customDays);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col md:flex-row overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Image Area */}
        <div className="relative flex w-full md:w-1/2 flex-col items-center justify-center bg-[#F8F9FA] p-6 md:p-8">
          {product.tag && (
            <span className="absolute left-4 top-4 rounded-md border border-category-purple bg-white px-2.5 py-0.5 text-xs font-bold text-category-purple shadow-xs">
              {product.tag}
            </span>
          )}

          <img
            src={product.image}
            alt={product.name}
            className="max-h-60 md:max-h-80 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />

          {product.out_of_stock && (
            <div className="mt-4 rounded-full bg-black/80 px-4 py-1 text-xs font-bold text-white">
              Currently Out of Stock
            </div>
          )}
        </div>

        {/* Right: Details & Booking Area */}
        <div className="flex w-full md:w-1/2 flex-col justify-between overflow-y-auto p-6 md:p-8">
          <div>
            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 leading-snug">
              {product.name}
            </h2>

            {/* Ratings & Booked info */}
            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
              {product.rating > 0 && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-neutral-900">{product.rating}</span>
                  <span className="text-neutral-500">Rating</span>
                </div>
              )}
              {product.booked_count > 0 && (
                <div className="flex items-center gap-1 font-semibold text-green-700">
                  <Flame className="w-4 h-4 fill-green-500 text-green-500" />
                  <span>{product.booked_count.toLocaleString()}+ orders booked</span>
                </div>
              )}
            </div>

            {/* Price Box */}
            <div className="mt-4 rounded-2xl bg-neutral-50 p-4 border border-neutral-200">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-neutral-500">Rent per day:</span>
                  <div className="text-2xl font-extrabold text-neutral-900">
                    ₹{product.per_day_rent}
                    <span className="text-xs font-normal text-neutral-500"> / day</span>
                  </div>
                </div>
                <span className="rounded bg-[#9EFF00] px-2 py-0.5 text-xs font-bold text-neutral-950">
                  Incl. of GST
                </span>
              </div>

              {/* Security Deposit Note */}
              <div className="mt-3 flex items-center justify-between border-t border-neutral-200 pt-2 text-xs">
                <span className="text-neutral-600">Security Deposit:</span>
                <span className="font-bold text-green-700">₹0 (Zero Deposit)</span>
              </div>
            </div>

            {/* Rental Duration Options */}
            <div className="mt-4">
              <label className="text-xs font-bold text-neutral-700 block mb-1">
                Choose Rental Duration:
              </label>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {[1, 2, 3, 7].map(days => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => setCustomDays(days)}
                    className={`rounded-xl py-2 text-xs font-bold border transition-all ${
                      customDays === days
                        ? 'border-category-purple bg-category-purple/10 text-category-purple'
                        : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                    }`}
                  >
                    {days} {days === 1 ? 'Day' : 'Days'}
                  </button>
                ))}
              </div>
            </div>

            {/* Key Assurance Badges */}
            <div className="mt-4 space-y-1.5 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary-500" />
                <span>Sanitized & Tested Original Sony PS5 Hardware</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-primary-500" />
                <span>Free Doorstep Delivery & Pickup across Bangalore</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-primary-500" />
                <span>Easy Extension & Free Cancellation before dispatch</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-6 border-t border-neutral-200 pt-4">
            <div className="flex items-center justify-between mb-3 text-sm">
              <span className="text-neutral-600">Total Rent ({customDays} Days):</span>
              <span className="text-lg font-bold text-neutral-900">₹{calculatedRent}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => toggleWishlist(product.id)}
                className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-colors ${
                  isWishlisted
                    ? 'border-red-300 bg-red-50 text-red-500'
                    : 'border-neutral-300 text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500' : ''}`} />
              </button>

              {!product.out_of_stock ? (
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 rounded-2xl bg-primary-900 py-3 text-sm font-bold text-white shadow-md hover:bg-black transition-all flex items-center justify-center gap-2"
                >
                  {cartItem ? (
                    <>
                      <Check className="w-4 h-4" /> Added ({cartItem.quantity}) • Add More
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" /> Add to Rental Cart
                    </>
                  )}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  className="flex-1 rounded-2xl bg-neutral-100 py-3 text-sm font-bold text-neutral-700 hover:bg-neutral-200 transition-colors"
                >
                  {isWishlisted ? 'Saved in Wishlist' : 'Notify Me When Available'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
