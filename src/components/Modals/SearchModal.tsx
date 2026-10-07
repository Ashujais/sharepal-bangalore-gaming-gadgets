import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { productsData } from '../../data/products';
import { X, Search, Sparkles, ArrowRight } from 'lucide-react';
import { Product } from '../../types/product';

export const SearchModal: React.FC = () => {
  const { isSearchModalOpen, setIsSearchModalOpen, setSelectedProductDetail } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  if (!isSearchModalOpen) return null;

  const popularSearches = ['PS5', 'FC25', 'Controllers', 'God of War', 'Racing Wheel', 'PlayStation Portal'];

  const searchResults = searchTerm.trim()
    ? productsData.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : [];

  const handleSelectProduct = (product: Product) => {
    setSelectedProductDetail(product);
    setIsSearchModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-xs p-4 pt-16 md:pt-24 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-neutral-200 px-5 py-4">
          <Search className="w-5 h-5 text-neutral-400 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search gaming consoles, games, controllers..."
            className="w-full text-sm md:text-base bg-transparent focus:outline-none placeholder:text-neutral-400"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="text-neutral-400 hover:text-neutral-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsSearchModalOpen(false)}
            className="rounded-full bg-neutral-100 p-1.5 text-neutral-600 hover:bg-neutral-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="max-h-[60vh] overflow-y-auto p-5">
          {searchTerm.trim() ? (
            /* Results */
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-wider text-neutral-400">
                Found {searchResults.length} Products
              </div>
              {searchResults.length === 0 ? (
                <div className="py-8 text-center text-xs text-neutral-500">
                  No products found for "{searchTerm}".
                </div>
              ) : (
                <div className="space-y-2">
                  {searchResults.map(product => (
                    <div
                      key={product.id}
                      onClick={() => handleSelectProduct(product)}
                      className="flex items-center justify-between rounded-2xl p-2.5 hover:bg-neutral-50 transition-colors cursor-pointer border border-transparent hover:border-neutral-200"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-12 w-12 object-contain rounded-lg bg-neutral-100 p-1"
                        />
                        <div>
                          <h4 className="text-xs md:text-sm font-bold text-neutral-900 line-clamp-1">
                            {product.name}
                          </h4>
                          <span className="text-[11px] text-neutral-500">
                            ₹{product.per_day_rent}/day {product.tag && `• ${product.tag}`}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-400" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Popular Searches Suggestions */
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-category-purple" />
                <span>Popular Gaming Searches:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map(term => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setSearchTerm(term)}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-xs font-semibold text-neutral-700 hover:border-category-purple hover:bg-purple-50 transition-all"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
