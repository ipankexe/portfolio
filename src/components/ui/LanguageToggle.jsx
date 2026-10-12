import React from 'react';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const LanguageToggle = ({ className = '' }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-xs font-semibold ${className}`}
      role="group"
      aria-label={t('nav.toggleLang')}
    >
      <Languages className="w-3.5 h-3.5 ml-1.5 mr-1 text-slate-400 shrink-0" aria-hidden="true" />
      <button
        type="button"
        onClick={() => setLanguage('id')}
        className={`relative px-2.5 py-1 rounded-lg transition-colors cursor-pointer select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 ${
          language === 'id'
            ? 'text-blue-600 dark:text-white font-bold'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
        }`}
        aria-pressed={language === 'id'}
      >
        {language === 'id' && (
          <motion.div
            layoutId="activeLangIndicator"
            className="absolute inset-0 bg-white dark:bg-blue-600 rounded-lg shadow-xs"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10">ID</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`relative px-2.5 py-1 rounded-lg transition-colors cursor-pointer select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 ${
          language === 'en'
            ? 'text-blue-600 dark:text-white font-bold'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
        }`}
        aria-pressed={language === 'en'}
      >
        {language === 'en' && (
          <motion.div
            layoutId="activeLangIndicator"
            className="absolute inset-0 bg-white dark:bg-blue-600 rounded-lg shadow-xs"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
    </div>
  );
};
