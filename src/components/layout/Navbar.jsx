import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageToggle } from '../ui/LanguageToggle';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import { personalInfo } from '../../data/personalInfo';

export function Navbar({ activeSection, theme, toggleTheme, onOpenCommandMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.home', 'Home'), href: '#home', id: 'home' },
    { label: t('nav.about', 'About'), href: '#about', id: 'about' },
    { label: t('nav.skills', 'Skills'), href: '#skills', id: 'skills' },
    { label: t('nav.dataMl', 'Data & ML'), href: '#data-ml', id: 'data-ml' },
    { label: t('nav.projects', 'Projects'), href: '#projects', id: 'projects' },
    { label: t('nav.experience', 'Experience'), href: '#experience', id: 'experience' },
    { label: t('nav.education', 'Education'), href: '#education', id: 'education' },
    { label: t('nav.cv', 'CV'), href: '#cv', id: 'cv' },
    { label: t('nav.contact', 'Contact'), href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#080c14]/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group cursor-pointer shrink-0"
          aria-label="Irfan Setiawan Homepage"
        >
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white flex items-center justify-center font-mono font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
              IS
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white dark:border-[#080c14]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-display">
              Irfan Setiawan
            </span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
              S.Kom • Software Eng.
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden xl:flex items-center gap-0.5 bg-slate-100/80 dark:bg-slate-900/80 p-1 rounded-full border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-blue-600 dark:bg-blue-600 rounded-full -z-10 shadow-xs"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Spotlight Search + Theme + CV + Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Spotlight Search / Command Menu Trigger */}
          <button
            type="button"
            onClick={onOpenCommandMenu}
            className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 text-xs rounded-xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer shadow-2xs"
            title="Open command menu (Ctrl+K or Cmd+K)"
            aria-label="Search and command palette"
          >
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden md:inline font-medium">Quick Search</span>
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-slate-500 dark:text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Language Toggle (ID / EN) */}
          <LanguageToggle />

          {/* Theme Toggle */}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* CV Download Button */}
          <Button
            as="a"
            href={personalInfo.cvDocumentPath}
            download="Muhammad-Irfan-Setiawan-CV.pdf"
            variant="outline"
            size="sm"
            icon={FileDown}
            className="hidden sm:inline-flex text-xs font-semibold"
          >
            CV
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="xl:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Modal/Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="xl:hidden overflow-hidden bg-white/95 dark:bg-[#080c14]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandMenu();
                }}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs font-medium text-slate-700 dark:text-slate-200 mb-2 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-blue-500" />
                  <span>Search commands & projects...</span>
                </div>
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-slate-400">
                  Ctrl+K
                </kbd>
              </button>

              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-medium">Language:</span>
                  <LanguageToggle />
                </div>
                <Button
                  as="a"
                  href={personalInfo.cvDocumentPath}
                  download="Muhammad-Irfan-Setiawan-CV.pdf"
                  variant="primary"
                  size="sm"
                  icon={FileDown}
                  className="text-xs font-semibold"
                >
                  {t('nav.downloadCv', 'Download CV (PDF)')}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
