import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../../data/experience';
import { useLanguage } from '../../hooks/useLanguage';

export const Experience = () => {
  const { language, t } = useLanguage();
  const [filterType, setFilterType] = useState('all');

  const filteredExperiences = experiences.filter((exp) => {
    if (filterType === 'all') return true;
    return exp.type === filterType;
  });

  return (
    <section id="experience" className="py-24 relative bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60 mb-3">
            <span>{t('experience.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <button
              type="button"
              onClick={() => setFilterType('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filterType === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('experience.tabAll')}
            </button>
            <button
              type="button"
              onClick={() => setFilterType('tech')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filterType === 'tech'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('experience.tabTech')}
            </button>
            <button
              type="button"
              onClick={() => setFilterType('transferable')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filterType === 'transferable'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('experience.tabTransferable')}
            </button>
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {filteredExperiences.map((exp, index) => {
            const role = exp.role[language] || exp.role.id;
            const org = exp.organization[language] || exp.organization.id;
            const period = exp.period[language] || exp.period.id;
            const summary = exp.summary[language] || exp.summary.id;
            const badge = exp.badge[language] || exp.badge.id;
            const isTech = exp.type === 'tech';

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full border-4 border-white dark:border-[#07090e] flex items-center justify-center ${
                    isTech ? 'bg-blue-600' : 'bg-amber-500'
                  }`}
                />

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c101d] border border-slate-200/90 dark:border-slate-800/90 hover:border-blue-500/40 shadow-xs transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                          isTech
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60'
                            : 'bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/60'
                        }`}
                      >
                        {badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {role}
                      </h3>
                      <h4 className="text-base font-semibold text-slate-700 dark:text-slate-300">
                        {org}
                      </h4>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500 dark:text-slate-400 gap-1">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary paragraph */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {summary}
                  </p>

                  {/* Tech Points (for Diskominfo & Capstone POS) */}
                  {exp.points && (
                    <div className="space-y-3 mb-6">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Kontribusi & Implementasi Kunci:
                      </h5>
                      <ul className="space-y-2.5">
                        {(exp.points[language] || exp.points.id).map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Transferable Skills Pillars (for Dikala Kopi Group) */}
                  {exp.transferablePillars && (
                    <div className="space-y-4 mb-6">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                        Transferable Soft Skills Pillars:
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {exp.transferablePillars.map((pillar, pilIdx) => (
                          <div
                            key={pilIdx}
                            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800"
                          >
                            <h6 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-amber-500" />
                              {pillar.title[language] || pillar.title.id}
                            </h6>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                              {pillar.desc[language] || pillar.desc.id}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
