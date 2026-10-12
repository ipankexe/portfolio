import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';

export const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors cursor-pointer select-none ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={t('nav.toggleTheme')}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="absolute"
      >
        <Moon className="w-4.5 h-4.5 text-blue-400" aria-hidden="true" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? -180 : 0,
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="absolute"
      >
        <Sun className="w-4.5 h-4.5 text-amber-500" aria-hidden="true" />
      </motion.div>
    </motion.button>
  );
};
