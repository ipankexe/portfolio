import React from 'react';
import { motion } from 'framer-motion';

export function ProjectFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  counts = {}
}) {
  return (
    <div className="flex items-center gap-1.5 overflow-x-auto pb-3 pt-1 scrollbar-none no-scrollbar">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        const count = counts[category] !== undefined ? counts[category] : null;

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            type="button"
            className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 select-none focus-visible:outline-2 focus-visible:outline-blue-500 ${
              isSelected
                ? 'text-white'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {isSelected && (
              <motion.div
                layoutId="activeProjectFilter"
                className="absolute inset-0 bg-blue-600 rounded-xl -z-10 shadow-sm"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span>{category}</span>
            {count !== null && (
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected
                    ? 'bg-blue-700/60 text-blue-100'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
