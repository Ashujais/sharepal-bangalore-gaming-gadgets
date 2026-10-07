import React from 'react';
import { CATEGORIES } from '../../data/products';
import { Link } from 'react-router-dom';

export const CategoryBar: React.FC = () => {
  return (
    <div className="sticky z-20 bg-white/95 backdrop-blur-sm border-b border-neutral-200 py-1 transition-all duration-300 w-full top-[108px] lg:top-[84px] shadow-xs">
      <div className="relative mx-auto w-full max-w-4xl px-4 md:px-8">
        <div className="flex w-full items-center justify-between sm:justify-center sm:gap-10 overflow-x-auto no-scrollbar py-1">
          {CATEGORIES.map(category => {
            const isActive = category.slug === 'gaming-gadgets-on-rent';
            return (
              <div
                key={category.slug}
                className="relative px-3 py-1.5 text-center flex-shrink-0 cursor-pointer"
              >
                <Link
                  to={`/bangalore/${category.slug}`}
                  className="relative inline-block px-2 text-sm md:text-base font-medium transition-colors"
                >
                  <span
                    className={`${
                      isActive
                        ? 'text-category-purple font-bold'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {category.name}
                  </span>
                  {isActive && (
                    <div className="absolute left-1/2 -bottom-1 h-[3px] w-full -translate-x-1/2 rounded-full bg-category-purple shadow-xs" />
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
