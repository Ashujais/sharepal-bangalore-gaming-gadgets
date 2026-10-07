import React, { useState } from 'react';
import type { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import { Heart, Star, Flame, Plus, Minus, Tag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onCardClick?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onCardClick }) => {
  const {
    addToCart,
    cart,
    updateQuantity,
    isInWishlist,
    toggleWishlist,
    totalDays,
    setSelectedProductDetail,
  } = useCart();

  const [imageError, setImageError] = useState(false);

  const cartItem = cart.find(item => item.product.id === product.id);
  const isWishlisted = isInWishlist(product.id);

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button')) return;
    if (onCardClick) {
      onCardClick(product);
    } else {
      setSelectedProductDetail(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.out_of_stock) return;
    addToCart(product, totalDays || 1);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (cartItem) {
      updateQuantity(product.id, cartItem.quantity - 1);
    }
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (cartItem) {
      updateQuantity(product.id, cartItem.quantity + 1);
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  // Badge styling matching reference
  const renderBadge = () => {
    if (!product.tag || product.out_of_stock) return null;

    if (product.tag.toLowerCase() === 'trending') {
      return (
        <span className="absolute left-2 top-2 z-10 rounded-md border border-orange-500 bg-white/90 px-1.5 py-0.5 text-[10px] font-bold text-orange-600 md:left-3 md:top-3 md:border-2 md:px-2 md:text-xs shadow-xs">
          Trending
        </span>
      );
    }
    if (product.tag.toLowerCase() === 'new') {
      return (
        <span className="absolute left-2 top-2 z-10 rounded-md border border-blue-600 bg-white/90 px-1.5 py-0.5 text-[10px] font-bold text-blue-600 md:left-3 md:top-3 md:border-2 md:px-2 md:text-xs shadow-xs">
          New
        </span>
      );
    }
    if (product.tag.toLowerCase().includes('vote')) {
      return (
        <span className="absolute left-2 top-2 z-10 rounded-md border border-green-500 bg-green-50 px-1.5 py-0.5 text-[10px] font-bold text-green-800 md:left-3 md:top-3 md:border-2 md:px-2 md:text-xs shadow-xs">
          Vote to Launch
        </span>
      );
    }
    return (
      <span className="absolute left-2 top-2 z-10 rounded-md border border-neutral-400 bg-white/90 px-1.5 py-0.5 text-[10px] font-bold text-neutral-800 md:left-3 md:top-3 md:border-2 md:px-2 md:text-xs shadow-xs">
        {product.tag}
      </span>
    );
  };

  // Format price
  const formattedPrice =
    Number.isInteger(product.per_day_rent)
      ? `₹${product.per_day_rent}`
      : `₹${product.per_day_rent.toFixed(2)}`;

  return (
    <div
      onClick={handleCardClick}
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-2.5 leading-5 transition-all duration-300 md:rounded-3xl md:p-3 cursor-pointer ${
        product.out_of_stock
          ? 'opacity-85 hover:border-neutral-300 hover:bg-neutral-50/50'
          : 'hover:border-primary-500/40 hover:shadow-sharepal-card hover:bg-neutral-50/30'
      }`}
    >
      {/* Top Image Container */}
      <div className="relative aspect-square w-full flex-shrink-0 overflow-hidden rounded-xl bg-[#F8F9FA] p-2 md:rounded-2xl md:p-3 flex items-center justify-center">
        {/* Badge */}
        {renderBadge()}

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlistToggle}
          title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 backdrop-blur-xs transition-all duration-200 shadow-xs md:right-3 md:top-3 ${
            isWishlisted
              ? 'text-red-500 opacity-100 scale-105'
              : 'text-neutral-400 hover:text-red-500 opacity-80 md:opacity-0 group-hover:opacity-100'
          }`}
        >
          <Heart
            className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`}
          />
        </button>

        {/* Product Image with Fallback */}
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            loading="lazy"
            className="h-full w-full object-contain p-2 md:p-4 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-neutral-400 p-4 text-center">
            <span className="text-3xl mb-1">🎮</span>
            <span className="text-xs font-medium text-neutral-500 line-clamp-1">
              {product.name}
            </span>
          </div>
        )}

        {/* Out of stock overlay */}
        {product.out_of_stock && (
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center bg-black/80 py-1.5 px-2 text-white backdrop-blur-xs">
            <p className="text-xs font-bold md:text-sm">Out of Stock</p>
            <p className="text-[10px] text-gray-300">Will be available soon</p>
          </div>
        )}
      </div>

      {/* Card Info Content */}
      <div className="flex flex-1 flex-col justify-between pt-2.5 md:pt-3">
        {/* Title */}
        <div>
          <h3
            title={product.name}
            className="line-clamp-2 text-xs sm:text-sm md:text-base font-bold text-neutral-900 group-hover:text-primary-500 transition-colors"
          >
            {product.name}
          </h3>
        </div>

        {/* Divider */}
        <div className="my-2 h-[1px] w-full bg-neutral-200" />

        {/* Price & Action Button Row */}
        <div className="flex items-end justify-between gap-1 max-md:flex-wrap">
          {/* Price info */}
          <div className="flex flex-col">
            <span className="text-[11px] md:text-xs text-neutral-500">Rent/day</span>
            <div className="flex items-center gap-1.5">
              <span className="text-sm sm:text-base md:text-lg font-bold text-neutral-900">
                {formattedPrice}
                <span className="text-xs font-normal text-neutral-600">/day</span>
              </span>
            </div>
            <span className="inline-block mt-0.5 w-max rounded bg-[#9EFF00] px-1.5 py-0.5 text-[9px] md:text-[10px] font-bold text-neutral-950">
              Incl. of GST
            </span>
          </div>

          {/* Action Button: In stock vs Out of stock */}
          {!product.out_of_stock ? (
            <div>
              {cartItem ? (
                /* Quantity Counter Pill */
                <div
                  onClick={e => e.stopPropagation()}
                  className="flex h-8 items-center justify-between rounded-full border-2 border-primary-900 bg-gray-50 px-2 md:h-9"
                >
                  <button
                    type="button"
                    onClick={handleDecrement}
                    className="flex h-5 w-5 items-center justify-center text-primary-900 hover:text-red-600"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="mx-2 text-xs font-bold text-primary-900">
                    {cartItem.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={handleIncrement}
                    className="flex h-5 w-5 items-center justify-center text-primary-900 hover:text-green-600"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                /* Add Button */
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex items-center justify-center gap-1 rounded-full border-2 border-primary-900 bg-transparent text-primary-900 transition-all duration-200 hover:bg-primary-900 hover:text-white max-md:h-8 max-md:w-full max-md:px-3 md:h-9 md:w-9 lg:h-10 lg:w-10"
                >
                  <span className="text-xs font-bold md:hidden">Add</span>
                  <Plus className="w-4 h-4" />
                </button>
              )}
            </div>
          ) : (
            /* Out of Stock Wishlist Button */
            <button
              type="button"
              onClick={handleWishlistToggle}
              className={`w-full mt-1.5 rounded-full border border-primary-900 px-2 py-1 text-xs font-semibold transition-colors ${
                isWishlisted
                  ? 'bg-primary-900 text-white'
                  : 'bg-neutral-100 text-primary-900 hover:bg-neutral-200'
              }`}
            >
              {isWishlisted ? 'In Wishlist' : 'Add to Wishlist'}
            </button>
          )}
        </div>

        {/* Rating and Popularity Footer */}
        <div className="mt-2.5 flex flex-col gap-1 border-t border-neutral-150 pt-2 text-neutral-600">
          {/* Star Rating */}
          {product.rating > 0 && (
            <div className="flex items-center gap-1 text-xs">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : i < product.rating
                        ? 'fill-amber-200 text-amber-400'
                        : 'text-neutral-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold text-neutral-800 text-[11px] md:text-xs">
                ({product.rating})
              </span>
            </div>
          )}

          {/* Booked Count */}
          {product.booked_count > 0 && (
            <div className="flex items-center gap-1 text-[11px] md:text-xs font-semibold text-green-700">
              <Flame className="w-3.5 h-3.5 fill-green-500 text-green-500 flex-shrink-0" />
              <span>
                {product.booked_count >= 10000
                  ? '10,000+ booked'
                  : `${product.booked_count} booked this month`}
              </span>
            </div>
          )}

          {/* Lowest Price Guarantee */}
          <div className="flex items-center gap-1 text-[10px] md:text-[11px] font-semibold text-pink-600">
            <Tag className="w-3 h-3 text-pink-500 flex-shrink-0" />
            <span>Lowest Price Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};
