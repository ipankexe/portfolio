import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personalInfo';
import { Layers, GraduationCap, Code2, Building2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function QuickStats() {
  const { language } = useLanguage();
  const renderStatIcon = (index) => {
    switch (index) {
      case 0:
        return <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 1:
        return <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 2:
        return <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <Building2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 mb-16" aria-label="Key Statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-5 rounded-2xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-xl dark:shadow-2xl"
        >
          {personalInfo.quickStats.map((stat, idx) => {
            let label = stat.label;
            let description = stat.description;
            if (language === 'id') {
              if (idx === 0) { label = 'Proyek Unggulan'; description = 'Sistem Web & Riset Akademik'; }
              else if (idx === 1) { label = 'Pendidikan S1'; description = 'Teknik Informatika UDINUS (S.Kom)'; }
              else if (idx === 2) { label = 'Tech Stack'; description = 'Full-Stack, DB & Cloud Tools'; }
              else if (idx === 3) { label = 'Proyek Instansi'; description = 'Portal Damkar & Geoportal GIS'; }
            }
            return (
              <div
                key={stat.label}
                className="flex items-center gap-3.5 p-3 sm:p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all card-hover-fx border border-transparent hover:border-slate-200 dark:hover:border-slate-800"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-center shrink-0 shadow-2xs">
                  {renderStatIcon(idx)}
                </div>
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                    {label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate hidden sm:block">
                    {description}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
