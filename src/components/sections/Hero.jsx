import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileDown, Terminal } from 'lucide-react';
import { Github, Linkedin, Instagram } from '../ui/BrandIcons';
import { useLanguage } from '../../hooks/useLanguage';
import { Button } from '../ui/Button';
import { scrollToSection } from '../../utils/helpers';

export const Hero = () => {
  const { t } = useLanguage();

  const floatingTags = [
    { name: 'Laravel 12', position: '-top-6 -left-6', color: 'border-rose-500/30 text-rose-500 bg-rose-500/10' },
    { name: 'React 19', position: '-top-6 -right-6', color: 'border-blue-500/30 text-blue-500 bg-blue-500/10' },
    { name: 'MySQL & ACID', position: '-bottom-6 -left-6', color: 'border-emerald-500/30 text-emerald-500 bg-emerald-500/10' },
    { name: 'Express & MongoDB', position: '-bottom-6 -right-6', color: 'border-violet-500/30 text-violet-500 bg-violet-500/10' },
  ];

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
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-blue-500/20 via-indigo-500/10 to-transparent border border-slate-200/80 dark:border-slate-800 shadow-2xl group"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src="/irfan-hero.jpg"
                  alt="Muhammad Irfan Setiawan"
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                
                {/* Subtle vignette and bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 text-white shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-blue-400 font-semibold">S.Kom Graduate</p>
                      <p className="text-sm font-bold text-white">Muhammad Irfan Setiawan</p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-400">
                      <Terminal className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges around the card */}
              <div className="hidden sm:block absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
                UDINUS '26 • GPA 3.22
              </div>

              <div className="hidden sm:block absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                Diskominfo & Capstone POS
              </div>
            </motion.div>

            {/* Floating Tech Chips around photo */}
            {floatingTags.map((tag, idx) => (
              <motion.div
                key={idx}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5 + idx, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.5 }}
                className={`hidden xl:block absolute ${tag.position} px-3 py-1.5 rounded-xl border backdrop-blur-md shadow-md text-xs font-mono font-semibold ${tag.color}`}
              >
                {tag.name}
              </motion.div>
            ))}
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
