import React from 'react';
import { SharePalLogo } from './SharePalLogo';
import { MapPin, Calendar, Search, ShoppingBag, User, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const {
    cartCount,
    setIsCartOpen,
    selectedCity,
    setIsCityModalOpen,
    deliveryDate,
    pickupDate,
    setIsDateModalOpen,
    setIsSearchModalOpen,
  } = useCart();

  const formattedDelivery = deliveryDate
    ? new Date(deliveryDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
    : 'Delivery Date';

  const formattedPickup = pickupDate
    ? new Date(pickupDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
    : 'Pickup Date';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-max w-full flex-col items-center justify-center gap-1 overflow-hidden pb-3 pt-2 md:pb-4 lg:flex-row bg-[#4C187C] shadow-md transition-all duration-300">
      {/* Desktop Header */}
      <div className="container hidden w-full max-w-7xl items-end justify-between gap-1 transition-all lg:flex px-6">
        {/* Left: Logo */}
        <div className="flex items-end justify-start">
          <Link to="/bangalore/gaming-gadgets-on-rent" className="block focus:outline-none">
            <SharePalLogo />
          </Link>
        </div>

        {/* Middle: City & Date Selector Pill */}
        <div className="middle relative flex items-center justify-center gap-1 rounded-full border-2 bg-gray-100 border-category-purple p-0.5 shadow-sm">
          {/* City Selector */}
          <button
            type="button"
            onClick={() => setIsCityModalOpen(true)}
            className="city flex items-center justify-center gap-1.5 rounded-l-full bg-neutral-200 px-3 py-1.5 text-sm font-semibold text-primary-900 hover:bg-neutral-250 transition-colors"
          >
            <MapPin className="w-4 h-4 text-primary-900" />
            <span>{selectedCity}</span>
            <ChevronDown className="h-3.5 w-3.5 font-bold" />
          </button>

          {/* Date Selector */}
          <div
            onClick={() => setIsDateModalOpen(true)}
            className="flex w-max cursor-pointer items-center justify-center gap-3 bg-gray-100 text-neutral-700 px-3 py-1 hover:text-neutral-900 transition-colors"
            title="Click to select rental dates"
          >
            <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-neutral-800">
              <Calendar className="h-3.5 w-3.5 text-primary-900" />
              <span>{formattedDelivery}</span>
            </div>
            <span className="h-4 w-[1px] bg-neutral-300"></span>
            <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-neutral-800">
              <Calendar className="h-3.5 w-3.5 text-primary-900" />
              <span>{formattedPickup}</span>
            </div>
          </div>

          {/* Select Button */}
          <button
            type="button"
            onClick={() => setIsDateModalOpen(true)}
            className="inline-flex items-center justify-center rounded-full bg-primary-900 text-white px-3 py-1.5 text-xs font-semibold hover:bg-primary-950 transition-colors gap-1 ml-1"
          >
            <Calendar className="h-3.5 w-3.5" />
            <span>Select</span>
          </button>
        </div>

        {/* Right: Search, Cart, Profile */}
        <div className="right flex items-center justify-end gap-3 text-gray-100">
          {/* Search Button */}
          <button
            type="button"
            onClick={() => setIsSearchModalOpen(true)}
            aria-label="Search"
            className="search relative h-10 w-10 p-2 text-gray-100 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Cart Button */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            aria-label="Cart"
            className="cart relative h-10 w-10 p-2 text-gray-100 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary-500 text-[11px] font-bold text-neutral-950 shadow-sm animate-pulse-subtle">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile / Login */}
          <div className="profile flex cursor-pointer items-center justify-end gap-2 text-gray-100 hover:text-white transition-colors">
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-category-purple bg-gray-100 text-neutral-900 shadow-sm">
              <User className="h-5 w-5 text-neutral-800" />
            </div>
            <span className="text-sm font-medium">Hi, Login</span>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="mobile container flex w-full flex-col items-center justify-center gap-2 lg:hidden px-4">
        <div className="flex h-full w-full items-center justify-between gap-2">
          {/* Mobile Logo */}
          <Link to="/bangalore/gaming-gadgets-on-rent" className="block focus:outline-none">
            <SharePalLogo isMobile />
          </Link>

          {/* Mobile Right Icons */}
          <div className="flex items-center gap-2">
            {/* City selector pill */}
            <button
              type="button"
              onClick={() => setIsCityModalOpen(true)}
              className="city flex items-center justify-center gap-1 rounded-full border border-category-purple bg-category-purple/30 text-white px-2.5 py-1 text-xs font-semibold shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span>{selectedCity}</span>
              <ChevronDown className="w-3 h-3 text-white" />
            </button>

            {/* Mobile Search */}
            <button
              type="button"
              onClick={() => setIsSearchModalOpen(true)}
              className="text-white p-1.5 hover:bg-white/10 rounded-full"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Cart */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="text-white p-1.5 hover:bg-white/10 rounded-full relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary-500 text-[10px] font-bold text-neutral-950">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Login */}
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-neutral-900 text-white">
              <User className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Mobile Date Bar */}
        <div
          onClick={() => setIsDateModalOpen(true)}
          className="flex h-[34px] w-full items-center justify-between gap-1 rounded-full border-2 bg-gray-100 border-category-purple px-1 cursor-pointer"
        >
          <div className="flex items-center gap-1.5 px-2 text-xs font-semibold text-neutral-700">
            <Calendar className="w-3.5 h-3.5 text-primary-900" />
            <span>
              {deliveryDate && pickupDate
                ? `${formattedDelivery} → ${formattedPickup}`
                : 'Select Rental Dates'}
            </span>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-primary-900 text-white h-[26px] px-3 text-xs font-semibold gap-1"
          >
            Select
          </button>
        </div>
      </div>
    </header>
  );
};
