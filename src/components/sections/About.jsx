import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Users, Rocket, BrainCircuit, Compass } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const About = () => {
  const { t } = useLanguage();

  const bentoCards = [
    {
      icon: Code2,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      title: t('about.highlights.engineering.title'),
      desc: t('about.highlights.engineering.desc'),
    },
    {
      icon: BrainCircuit,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20',
      title: t('about.highlights.problemSolving.title'),
      desc: t('about.highlights.problemSolving.desc'),
    },
    {
      icon: Users,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      title: t('about.highlights.interpersonal.title'),
      desc: t('about.highlights.interpersonal.desc'),
    },
    {
      icon: Rocket,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      title: t('about.highlights.learning.title'),
      desc: t('about.highlights.learning.desc'),
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60 mb-3">
            <span>{t('about.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t('about.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Narrative & Profile Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Story Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80 shadow-xs"
          >
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>{t('about.storyP1')}</p>
              <p>{t('about.storyP2')}</p>
              <p>{t('about.storyP3')}</p>
            </div>

            {/* Long-term vision banner */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-start gap-3.5 bg-slate-50/70 dark:bg-slate-900/40 p-4.5 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {t('about.longTermGoalTitle')}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t('about.longTermGoalDesc')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Pillars & Credentials Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-gradient-to-br from-blue-900/10 via-slate-900/5 to-transparent dark:from-blue-950/40 dark:via-[#0c101d] dark:to-[#0c101d] border border-blue-500/20 dark:border-slate-800 shadow-xs"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                    Universitas Dian Nuswantoro
                  </h3>
                  <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
                    S1 Teknik Informatika • Graduated 2026
                  </p>
                </div>
              </div>

              {/* Fast Fact Pill List */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-xs sm:text-sm">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Gelar Akademik:</span>
                  <span className="font-bold text-slate-900 dark:text-white font-mono">S.Kom (Sarjana Komputer)</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-xs sm:text-sm">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Indeks Prestasi Kumulatif:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">3,22 / 4,00</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-xs sm:text-sm">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Status Profesional:</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">Fresh Graduate</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-xs sm:text-sm">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Domisili:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Semarang, Indonesia</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/50 text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
              <span className="font-bold mr-1">Fokus Karir:</span> Siap berkontribusi secara penuh sebagai Software Engineer, Fullstack Web Developer, atau Backend Developer.
            </div>
          </motion.div>
        </div>

        {/* 4 Bento Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bentoCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`p-6 rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 shadow-xs transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl ${card.bgColor} ${card.borderColor} border flex items-center justify-center ${card.color} mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
