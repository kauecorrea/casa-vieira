import React from 'react';
import { cn } from '../../utils/cn';

interface ProductFilterProps {
  categories: { slug: string | 'all'; label: string; count: number }[];
  activeCategory: string;
  onSelectCategory: (slug: string) => void;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="flex overflow-x-auto pb-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap gap-3 scrollbar-hide">
      {categories.map((category) => {
        const isActive = activeCategory === category.slug;
        return (
          <button
            key={category.slug}
            onClick={() => onSelectCategory(category.slug)}
            className={cn(
              "relative px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2",
              isActive 
                ? "bg-brand-green text-white shadow-md shadow-brand-green/20" 
                : "bg-white border border-gray-200 text-gray-700 hover:bg-red-50 hover:border-brand-red/30 hover:text-brand-red"
            )}
          >
            {category.label}
            <span className={cn(
              "px-2 py-0.5 rounded-full text-xs",
              isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
            )}>
              {category.count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
