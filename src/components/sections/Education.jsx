import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const Education = () => {
  const { t } = useLanguage();

  const courseworkList = [
    'Algorithms & Data Structures',
    'Database Systems & Management',
    'Clean Code & Design Patterns',
    'Object-Oriented Programming (OOP)',
    'Network Fundamentals',
    'Security Essentials (Cisco Cybersecurity)',
    'Web Application Engineering',
    'IT Fundamentals',
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60 mb-3">
            <span>{t('education.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t('education.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {t('education.subtitle')}
          </p>
        </div>

        {/* Education & Certification Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Main University Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    {t('education.institution')}
                  </h3>
                  <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
                    {t('education.location')} • {t('education.period')}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-slate-900/60 border border-blue-200/60 dark:border-slate-800 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Program Studi:
                  </span>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {t('education.degree')}
                  </p>
                </div>
                <div className="sm:text-right">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {t('education.gpaLabel')}:
                  </span>
                  <p className="text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                    {t('education.gpaValue')}
                  </p>
                </div>
              </div>

              {/* Coursework */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-500" />
                {t('education.courseworkTitle')}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {courseworkList.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certification Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-indigo-950/20 via-white dark:via-[#0c101d] to-transparent border border-indigo-500/20 dark:border-slate-800 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {t('education.certTitle')}
                  </h3>
                  <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400">
                    Cisco Networking Academy
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 space-y-3 mb-6">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {t('education.ciscoTitle')}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t('education.ciscoDesc')}
                </p>
                <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Academic Curriculum Credential</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400 italic">
              Didukung fondasi clean code, algoritma pemecahan masalah, dan keamanan siber terstruktur.
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
