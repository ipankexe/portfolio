import React from 'react';
import { Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export function LanguageToggle({ className = '', variant = 'segmented' }) {
  const { language, toggleLanguage, setLanguage, t } = useLanguage();

  if (variant === 'compact') {
    return (
      <button
        onClick={toggleLanguage}
        type="button"
        title={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
        aria-label={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700/60 shadow-xs transition-colors cursor-pointer ${className}`}
      >
        <Languages className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
        <span className="font-mono uppercase">{language}</span>
      </button>
    );
  }

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center p-0.5 rounded-xl border border-slate-200/90 dark:border-slate-800/90 bg-slate-100/90 dark:bg-slate-900/90 shadow-2xs backdrop-blur-md ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage('id')}
        aria-pressed={language === 'id'}
        title="Bahasa Indonesia"
        className={`relative px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
          language === 'id'
            ? 'text-white'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        {language === 'id' && (
          <motion.div
            layoutId="langPill"
            className="absolute inset-0 bg-blue-600 dark:bg-blue-600 rounded-lg -z-10 shadow-xs"
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          />
        )}
        <span className="font-mono text-[11px] tracking-wider">ID</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        title="English"
        className={`relative px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
          language === 'en'
            ? 'text-white'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        {language === 'en' && (
          <motion.div
            layoutId="langPill"
            className="absolute inset-0 bg-blue-600 dark:bg-blue-600 rounded-lg -z-10 shadow-xs"
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          />
        )}
        <span className="font-mono text-[11px] tracking-wider">EN</span>
      </button>
    </div>
  );
}
