import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileDown, Terminal } from 'lucide-react';
import { Github, Linkedin, Instagram } from '../ui/BrandIcons';
import { useLanguage } from '../../hooks/useLanguage';
import { Button } from '../ui/Button';
import { scrollToSection } from '../../utils/helpers';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-500/10 dark:bg-violet-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Action Buttons (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/60 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-6 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{t('hero.statusBadge')}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-sm sm:text-base font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold mb-2">
                {t('hero.name')}
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] mb-5">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">Digital Solutions</span> Through Code.
              </h1>
            </motion.div>

            {/* Subheadline & Personal Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3 mb-8 max-w-2xl"
            >
              <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-200 leading-snug">
                {t('hero.subheadline')}
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('hero.description')}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-8 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto"
              >
                {t('hero.viewProjects')}
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto"
              >
                {t('hero.contactMe')}
              </Button>

              <Button
                variant="glass"
                size="lg"
                href="/Muhammad-Irfan-Setiawan-CV.pdf"
                download="Muhammad-Irfan-Setiawan-CV.pdf"
                icon={FileDown}
                className="w-full sm:w-auto border-blue-500/30"
              >
                {t('hero.downloadCv')}
              </Button>
            </motion.div>

            {/* Social & Professional Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 text-slate-600 dark:text-slate-400"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Hubungkan:</span>
              <a
                href="https://github.com/ipankexe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/irfanswettiawan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6285799479834"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/irfaanstwn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Editorial Photo & Tech Badges (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient backlight glow */}
            <div className="absolute w-72 sm:w-80 md:w-96 aspect-[3/4] bg-gradient-to-tr from-blue-600/25 via-indigo-600/20 to-violet-600/25 rounded-3xl blur-2xl -z-10 opacity-70 pointer-events-none" />

            {/* Photo Card Container with relative positioning for floating badges */}
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4]">
              {/* Main Photo Card Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full h-full rounded-3xl p-2.5 bg-gradient-to-b from-blue-500/20 via-slate-200/50 dark:via-slate-800/50 to-slate-200/20 dark:to-slate-900/20 border border-slate-200/90 dark:border-slate-800 shadow-2xl group"
              >
                {/* Inner Photo Container - with overflow-hidden to cleanly clip the image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src="/irfan-hero.jpg"
                    alt="Muhammad Irfan Setiawan"
                    className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  
                  {/* Subtle vignette and bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-85" />

                  {/* Bottom Overlay Card */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white shadow-xl">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                          <p className="text-[11px] font-mono text-blue-400 font-semibold truncate">
                            S.Kom Graduate • Informatics
                          </p>
                        </div>
                        <p className="text-sm font-bold text-white tracking-tight truncate">
                          Muhammad Irfan Setiawan
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-blue-600/25 border border-blue-400/40 flex items-center justify-center text-blue-400 shrink-0">
                        <Terminal className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 1: Top-Right (Academic Degree & GPA) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 z-20 flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-xl text-[11px] sm:text-xs font-mono font-bold text-blue-600 dark:text-blue-400"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <span>UDINUS '26 • GPA 3.22</span>
              </motion.div>

              {/* Floating Badge 2: Bottom-Left (Internship Experience & Capstone) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 z-20 flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-xl text-[11px] sm:text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>Diskominfo & Capstone POS</span>
              </motion.div>

              {/* Floating Badge 3: Top-Left (Backend Tech Focus) */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                className="hidden sm:flex absolute top-10 -left-6 z-20 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-rose-500/30 text-rose-600 dark:text-rose-400 shadow-lg text-xs font-mono font-semibold"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                <span>Laravel 12</span>
              </motion.div>

              {/* Floating Badge 4: Bottom-Right (Frontend Tech Focus) */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="hidden sm:flex absolute bottom-12 -right-6 z-20 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-blue-500/30 text-blue-600 dark:text-blue-400 shadow-lg text-xs font-mono font-semibold"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                <span>React 19</span>
              </motion.div>
            </div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer group select-none"
            aria-label={t('hero.scrollDown')}
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">{t('hero.scrollDown')}</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-start justify-center p-1 group-hover:border-blue-500 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-blue-500"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
