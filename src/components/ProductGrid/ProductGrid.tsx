import React, { useState, useMemo } from 'react';
import type { Product, SortOption } from '../../types/product';
import { ProductCard } from '../ProductCard/ProductCard';
import { Search, X, ArrowUpDown, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [stockFilter, setStockFilter] = useState<'all' | 'in-stock' | 'out-of-stock'>('all');
  const [sortBy, setSortBy] = useState<SortOption>('recommended');
  const [visibleCount, setVisibleCount] = useState<number>(24);
  const [showOutOfStockSeparated] = useState<boolean>(true);

  // Available tags dynamically derived from products
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    products.forEach(p => {
      if (p.tag) tags.add(p.tag);
    });
    return ['All', ...Array.from(tags)];
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesTag = product.tag.toLowerCase().includes(query);
        if (!matchesName && !matchesTag) return false;
      }

      // Tag filter
      if (selectedTag !== 'All') {
        if (product.tag.toLowerCase() !== selectedTag.toLowerCase()) return false;
      }

      // Stock filter
      if (stockFilter === 'in-stock' && product.out_of_stock) return false;
      if (stockFilter === 'out-of-stock' && !product.out_of_stock) return false;

      return true;
    });
  }, [products, searchQuery, selectedTag, stockFilter]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];

    switch (sortBy) {
      case 'price-low':
        return list.sort((a, b) => a.per_day_rent - b.per_day_rent);
      case 'price-high':
        return list.sort((a, b) => b.per_day_rent - a.per_day_rent);
      case 'rating':
        return list.sort((a, b) => b.rating - a.rating);
      case 'popular':
        return list.sort((a, b) => b.booked_count - a.booked_count);
      case 'recommended':
      default:
        return list.sort((a, b) => {
          if (a.out_of_stock !== b.out_of_stock) {
            return a.out_of_stock ? 1 : -1;
          }
          return b.booked_count - a.booked_count;
        });
    }
  }, [filteredProducts, sortBy]);

  // Separate in-stock and out-of-stock products when default viewing
  const { inStockList, outOfStockList } = useMemo(() => {
    const inStock: Product[] = [];
    const outOfStock: Product[] = [];
    sortedProducts.forEach(p => {
      if (p.out_of_stock) outOfStock.push(p);
      else inStock.push(p);
    });
    return { inStockList: inStock, outOfStockList: outOfStock };
  }, [sortedProducts]);

  // Displayed products based on load more
  const displayedInStock = inStockList.slice(0, visibleCount);
  const hasMoreInStock = visibleCount < inStockList.length;

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedTag('All');
    setStockFilter('all');
    setSortBy('recommended');
  };

  const isFiltered = searchQuery !== '' || selectedTag !== 'All' || stockFilter !== 'all' || sortBy !== 'recommended';

  return (
    <section id="products-section" className="relative z-10 py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs text-neutral-500 mb-3" aria-label="Breadcrumb">
          <Link to="/bangalore" className="hover:text-primary-500 transition-colors">
            Bangalore
          </Link>
          <ChevronRight className="w-3 h-3 text-neutral-400" />
          <span className="font-semibold text-neutral-900">Gaming gadgets on rent</span>
        </nav>

        {/* Section Heading & Total Items Count */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-neutral-200 pb-3 md:pb-4 gap-2">
          <div className="flex items-baseline gap-2">
            <h1 className="font-inter text-xl sm:text-2xl md:text-3xl font-bold capitalize text-neutral-900">
              gaming gadgets on rent
            </h1>
            <span className="text-xs md:text-sm font-semibold text-primary-500 bg-primary-50 px-2 py-0.5 rounded-full">
              Bangalore
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-500">
            <span>Total items:</span>
            <span className="font-bold text-neutral-800 bg-neutral-100 px-2 py-0.5 rounded-md">
              {filteredProducts.length} items
            </span>
          </div>
        </div>

        {/* Filter & Search Controls Bar */}
        <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-neutral-50/70 p-3 rounded-2xl border border-neutral-200">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search PS5, FC25, controllers, games..."
              className="w-full pl-9 pr-8 py-2 text-xs md:text-sm bg-white rounded-full border border-neutral-300 focus:outline-none focus:border-category-purple focus:ring-1 focus:ring-category-purple transition-all placeholder:text-neutral-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Tag Chips Filters (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {availableTags.map(tag => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-all whitespace-nowrap ${
                  selectedTag === tag
                    ? 'bg-category-purple text-white shadow-xs'
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Sort & Stock Filters */}
          <div className="flex items-center gap-2 justify-between md:justify-end">
            {/* Stock Filter Pills */}
            <div className="flex items-center bg-white border border-neutral-200 rounded-full p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setStockFilter('all')}
                className={`px-2.5 py-1 rounded-full font-medium transition-colors ${
                  stockFilter === 'all' ? 'bg-neutral-900 text-white' : 'text-neutral-600'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setStockFilter('in-stock')}
                className={`px-2.5 py-1 rounded-full font-medium transition-colors ${
                  stockFilter === 'in-stock' ? 'bg-neutral-900 text-white' : 'text-neutral-600'
                }`}
              >
                In Stock
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative flex items-center">
              <div className="flex items-center gap-1 bg-white border border-neutral-300 rounded-full px-3 py-1.5 text-xs font-semibold text-neutral-700">
                <ArrowUpDown className="w-3.5 h-3.5 text-neutral-500" />
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as SortOption)}
                  className="bg-transparent focus:outline-none cursor-pointer text-xs"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popular">Popularity</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Clear filters if active */}
            {isFiltered && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs text-category-purple hover:underline font-semibold"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Mobile Tag Scrollbar */}
        <div className="flex sm:hidden items-center gap-1.5 overflow-x-auto no-scrollbar py-2 mt-1">
          {availableTags.map(tag => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-all whitespace-nowrap ${
                selectedTag === tag
                  ? 'bg-category-purple text-white shadow-xs'
                  : 'bg-white border border-neutral-200 text-neutral-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Product Grid Area */}
        {filteredProducts.length === 0 ? (
          /* Empty Search State matching SharePal */
          <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl bg-neutral-50 px-4 py-16 text-center border border-neutral-200">
            <div className="text-4xl mb-1">🎮</div>
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900">
              Exciting Things are on the Way! 🚀
            </h3>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500">
              We couldn't find any products matching "{searchQuery}". We're gearing up with new products—stay tuned!
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-2 rounded-full bg-primary-900 text-white px-5 py-2 text-xs font-bold hover:bg-primary-950 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="mt-6">
            {/* Promotional Banner in-between grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
              {/* First 4 products */}
              {displayedInStock.slice(0, 4).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}

              {/* In-feed Coupon Promo Banner */}
              {displayedInStock.length >= 4 && (
                <div className="col-span-full my-1 rounded-2xl bg-gradient-to-r from-[#4C187C] via-[#7B1FA2] to-[#8A2BE2] p-4 md:p-5 text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-center sm:text-left">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md">
                      <Sparkles className="w-6 h-6 text-secondary-500" />
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold">
                        Special Bangalore Gaming Offer 🎉
                      </h4>
                      <p className="text-xs text-white/90">
                        Get flat 10% off on your first gaming console rental! Zero security deposit.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                    <span className="text-xs font-mono font-bold tracking-wider text-secondary-400">
                      FIRST10
                    </span>
                    <button
                      type="button"
                      onClick={() => navigator.clipboard?.writeText('FIRST10')}
                      className="text-[11px] font-bold text-white bg-primary-900 px-2.5 py-0.5 rounded-full hover:bg-black transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              )}

              {/* Next products */}
              {displayedInStock.slice(4).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}

              {/* If user filtered specifically for out of stock or all */}
              {stockFilter !== 'in-stock' &&
                !showOutOfStockSeparated &&
                outOfStockList.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Out-of-Stock Section Toggle Button (Matching SharePal's exact UX) */}
            {stockFilter === 'all' && showOutOfStockSeparated && outOfStockList.length > 0 && (
              <div className="mt-8 border-t border-neutral-200 pt-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-800">
                      Currently Out of Stock
                    </h3>
                    <p className="text-xs text-neutral-500">
                      These popular items are rented out right now. Join the waitlist or add to wishlist to get notified!
                    </p>
                  </div>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-600">
                    {outOfStockList.length} items
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
                  {outOfStockList.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}

            {/* Load More / Showing Results Footer */}
            <div className="mt-8 flex flex-col items-center justify-center border-t border-neutral-200 py-6 gap-3">
              <p className="text-xs md:text-sm text-neutral-500">
                Showing{' '}
                <span className="font-bold text-neutral-800">
                  {displayedInStock.length +
                    (stockFilter === 'all' && showOutOfStockSeparated ? outOfStockList.length : 0)}
                </span>{' '}
                of <span className="font-bold text-neutral-800">{filteredProducts.length}</span> results
              </p>

              {hasMoreInStock && (
                <button
                  type="button"
                  onClick={() => setVisibleCount(prev => prev + 12)}
                  className="w-full sm:w-auto min-w-[200px] rounded-full border-2 border-primary-900 bg-white px-6 py-2.5 text-xs sm:text-sm font-bold text-primary-900 hover:bg-primary-900 hover:text-white transition-all shadow-xs"
                >
                  Show More Products
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
