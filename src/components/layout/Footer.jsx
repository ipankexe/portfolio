import React from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { Github, Linkedin, Instagram } from '../ui/BrandIcons';
import { useLanguage } from '../../hooks/useLanguage';
import { scrollToSection } from '../../utils/helpers';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'about', label: t('nav.about') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'analytics', label: t('nav.analytics') },
    { id: 'education', label: t('nav.education') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-[#07090e]/80 backdrop-blur-md pt-14 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-200/60 dark:border-slate-800/60">
          {/* Left Brand & Identity */}
          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white font-extrabold text-sm tracking-tighter">
                IS
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Muhammad Irfan Setiawan, S.Kom.
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Software Engineer & Web Developer • Dian Nuswantoro University (UDINUS) Alumni.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ipankexe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/irfanswettiawan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://wa.me/6285799479834"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Contact"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <MessageCircle className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://instagram.com/irfaanstwn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Instagram className="w-4.5 h-4.5" />
            </a>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label={t('footer.backToTop')}
              title={t('footer.backToTop')}
              className="w-10 h-10 ml-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-md shadow-blue-600/20 transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <ArrowUp className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* Quick section links and copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <p className="text-center md:text-right">
            © {CURRENT_YEAR} Muhammad Irfan Setiawan. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};
