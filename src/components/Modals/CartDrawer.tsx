import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight, Calendar } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    deliveryDate,
    pickupDate,
    totalDays,
    setIsDateModalOpen,
    clearCart,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-200 p-4 md:p-5 bg-neutral-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-primary-900" />
              <h2 className="text-base md:text-lg font-bold text-neutral-900">
                Rental Cart ({cartCount})
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="rounded-full p-1.5 text-neutral-500 hover:bg-neutral-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Rental Date Notice Pill */}
          <div className="bg-primary-50 px-4 py-2.5 border-b border-primary-100 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-primary-900 font-medium">
              <Calendar className="w-4 h-4 text-primary-500" />
              <span>
                {deliveryDate && pickupDate
                  ? `Rental: ${deliveryDate} to ${pickupDate} (${totalDays} Days)`
                  : `Rental duration: ${totalDays || 1} Day(s)`}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsDateModalOpen(true)}
              className="text-primary-700 hover:underline font-bold"
            >
              Change
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 mb-4">
                  <ShoppingBag className="w-10 h-10 text-neutral-400" />
                </div>
                <h3 className="text-base font-bold text-neutral-800">Your cart is empty</h3>
                <p className="mt-1 text-xs text-neutral-500 max-w-xs">
                  Browse through gaming gadgets and add consoles, controllers, or games to rent.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-5 rounded-full bg-primary-900 text-white px-6 py-2.5 text-xs font-bold hover:bg-black transition-colors"
                >
                  Explore Gaming Gear
                </button>
              </div>
            ) : (
              cart.map(item => {
                const itemTotal = item.product.per_day_rent * item.rentalDays * item.quantity;
                return (
                  <div
                    key={item.product.id}
                    className="flex gap-3 rounded-2xl border border-neutral-200 p-3 bg-neutral-50/50"
                  >
                    {/* Item Image */}
                    <div className="h-20 w-20 flex-shrink-0 rounded-xl bg-white p-2 border border-neutral-100 flex items-center justify-center">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    {/* Item Info */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between items-start gap-1">
                        <h4 className="text-xs md:text-sm font-bold text-neutral-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-neutral-400 hover:text-red-500 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-neutral-500">
                        ₹{item.product.per_day_rent}/day × {item.rentalDays} days
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity controls */}
                        <div className="flex h-7 items-center rounded-full border border-neutral-300 bg-white px-2">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="text-neutral-500 hover:text-neutral-900"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="mx-2 text-xs font-bold text-neutral-900">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="text-neutral-500 hover:text-neutral-900"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Total per item */}
                        <span className="text-sm font-bold text-neutral-900">
                          ₹{Math.round(itemTotal)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="border-t border-neutral-200 bg-white p-4 md:p-5 shadow-lg">
              {/* Trust Badge */}
              <div className="mb-3 flex items-center gap-2 rounded-xl bg-green-50 p-2 text-xs font-semibold text-green-800">
                <ShieldCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Zero Security Deposit • Free Doorstep Delivery & Pickup</span>
              </div>

              {/* Price Details */}
              <div className="space-y-1.5 text-xs text-neutral-600 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal Rent:</span>
                  <span className="font-semibold text-neutral-900">₹{Math.round(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-green-700">
                  <span>Security Deposit:</span>
                  <span className="font-bold">₹0 Free</span>
                </div>
                <div className="flex justify-between text-green-700">
                  <span>Delivery & Return:</span>
                  <span className="font-bold">FREE</span>
                </div>
                <div className="flex justify-between border-t border-neutral-200 pt-2 text-sm font-bold text-neutral-900">
                  <span>Total Payable:</span>
                  <span className="text-base text-primary-900">₹{Math.round(cartTotal)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    alert('Order initiated successfully! SharePal zero-deposit verification will proceed.');
                    clearCart();
                    setIsCartOpen(false);
                  }}
                  className="flex-1 rounded-2xl bg-primary-900 py-3 text-sm font-bold text-white shadow-md hover:bg-black transition-all flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
