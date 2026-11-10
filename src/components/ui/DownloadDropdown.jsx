import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileDown, ChevronDown, FileText, Printer } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { downloadPortfolioAsPdf } from '../../utils/helpers';

export const DownloadDropdown = ({ className = '' }) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDownloadPortfolio = () => {
    setIsOpen(false);
    downloadPortfolioAsPdf('Muhammad-Irfan-Setiawan-Portofolio');
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 hover:shadow-lg transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <FileDown className="w-4 h-4 shrink-0" />
        <span>{t('nav.downloadDropdown')}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-64 p-1.5 rounded-2xl bg-white/95 dark:bg-[#0c101d]/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl z-50 overflow-hidden"
          >
            {/* Option 1: Official CV PDF */}
            <a
              href="/Muhammad-Irfan-Setiawan-CV.pdf"
              download="Muhammad-Irfan-Setiawan-CV.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <FileText className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {t('nav.cvLabel')}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                  {t('nav.cvSubtext')}
                </p>
              </div>
            </a>

            <div className="my-1 border-t border-slate-100 dark:border-slate-800/80" />

            {/* Option 2: Full Portfolio PDF Export */}
            <button
              type="button"
              onClick={handleDownloadPortfolio}
              className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors group cursor-pointer text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <Printer className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {t('nav.portfolioLabel')}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                  {t('nav.portfolioSubtext')}
                </p>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

