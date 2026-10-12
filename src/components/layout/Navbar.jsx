import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageToggle } from '../ui/LanguageToggle';
import { Button } from '../ui/Button';
import { scrollToSection } from '../../utils/helpers';

export const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: t('nav.about') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'analytics', label: t('nav.analytics') },
    { id: 'education', label: t('nav.education') },
    { id: 'contact', label: t('nav.contact') },
  ];

  // Track scroll position for navbar styling & active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'analytics', 'education', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/85 dark:bg-[#07090e]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo Monogram */}
          <button
            type="button"
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
            aria-label="Muhammad Irfan Setiawan Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white font-extrabold text-base tracking-tighter shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              IS
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-sm font-bold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                M. Irfan Setiawan
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                Software Engineer
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 ${
                    isActive
                      ? 'text-blue-600 dark:text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white dark:bg-blue-600/30 dark:border dark:border-blue-500/40 rounded-xl shadow-xs"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Language, Theme, CV Download & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <LanguageToggle />
            <ThemeToggle />

            {/* Quick CV Download in Navbar for Recruiters */}
            <div className="hidden md:block">
              <Button
                variant="primary"
                size="sm"
                href="/Muhammad-Irfan-Setiawan-CV.pdf"
                download="Muhammad-Irfan-Setiawan-CV.pdf"
                icon={FileDown}
              >
                {t('nav.downloadCv')}
              </Button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={mobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#07090e]/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors text-left cursor-pointer ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800">
                <Button
                  variant="primary"
                  size="md"
                  href="/Muhammad-Irfan-Setiawan-CV.pdf"
                  download="Muhammad-Irfan-Setiawan-CV.pdf"
                  icon={FileDown}
                  className="w-full"
                >
                  {t('nav.downloadCv')}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
