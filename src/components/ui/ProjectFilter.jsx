import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

export const ProjectFilter = ({ activeCategory, onSelectCategory, counts = {} }) => {
  const { t } = useLanguage();

  const categories = [
    { id: 'all', label: t('projects.filters.all'), count: counts.all || 0 },
    { id: 'web', label: t('projects.filters.web'), count: counts.web || 0 },
    { id: 'backend', label: t('projects.filters.backend'), count: counts.backend || 0 },
    { id: 'data', label: t('projects.filters.data'), count: counts.data || 0 },
    { id: 'ml', label: t('projects.filters.ml'), count: counts.ml || 0 },
  ].filter((cat) => cat.id === 'all' || cat.count > 0);

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist" aria-label="Project filter tabs">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(cat.id)}
            className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              isActive
                ? 'text-white'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilterTab"
                className="absolute inset-0 bg-blue-600 rounded-xl shadow-md shadow-blue-600/30"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isActive
                    ? 'bg-blue-700/80 text-white'
                    : 'bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                {cat.count}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
};
