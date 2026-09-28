import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from '../ui/Icons';
import { personalInfo } from '../../data/personalInfo';
import { useLanguage } from '../../context/LanguageContext';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const { language, t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#070b12] border-t border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Profile & Degree */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-base shadow-sm">
                IS
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Muhammad Irfan Setiawan
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Sarjana Komputer (S.Kom) • Universitas Dian Nuswantoro
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              {t('footer.tagline', 'Informatics Engineering graduate focused on software engineering, full-stack web development, and emerging data analysis & machine learning applications.')}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition-colors"
              >
                <GithubIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition-colors"
              >
                <LinkedinIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href={personalInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-400 transition-colors"
              >
                <InstagramIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp chat"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400 transition-colors"
              >
                <WhatsAppIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Direct Email"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition-colors"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-4">
              {t('footer.navHeading', 'Navigation')}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.about', 'About Me')}</a></li>
              <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.skills', 'Technical Skills')}</a></li>
              <li><a href="#data-ml" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.dataMl', 'Data & Machine Learning')}</a></li>
              <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.projects', 'Featured Projects')}</a></li>
              <li><a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.experience', 'Experience')}</a></li>
              <li><a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.education', 'Education & Skripsi')}</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Action & Back to Top */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-4">
                {t('footer.docsHeading', 'Documentation')}
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#cv" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.cv', 'Digital CV')}</a></li>
                <li><a href={personalInfo.cvDocumentPath} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{language === 'id' ? 'Lihat Resume PDF' : 'View PDF Resume'}</a></li>
                <li><a href="#certifications" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{language === 'id' ? 'Sertifikasi Cisco' : 'Cisco Certification'}</a></li>
                <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('nav.contact', 'Contact Form')}</a></li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                type="button"
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                <span>{t('footer.backToTop', 'Back to top')}</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-500 gap-4">
          <p>
            © {CURRENT_YEAR} Muhammad Irfan Setiawan. {t('footer.allRightsReserved', 'All rights reserved.')}
          </p>
          <p className="flex items-center gap-1.5">
            {t('footer.builtWith', 'Designed & Built with React, Tailwind CSS & Framer Motion')}
          </p>
        </div>
      </div>
    </footer>
  );
}
