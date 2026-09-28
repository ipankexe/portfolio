import React from 'react';
import { motion } from 'framer-motion';
import { Building, CheckCircle2, ShieldCheck, Coffee, MapPin } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { experienceData } from '../../data/experience';
import { useLanguage } from '../../context/LanguageContext';

export function Experience() {
  const { language, t } = useLanguage();

  const getExperienceIcon = (id) => {
    return id === 1 ? (
      <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    ) : (
      <Coffee className="w-5 h-5 text-amber-600 dark:text-amber-400" />
    );
  };

  return (
    <section id="experience" className="py-20 lg:py-28 bg-slate-100/40 dark:bg-[#070a12]/60 relative transition-colors" aria-label="Professional and Practical Experience">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('experience.badge', 'Career Journey')}
          title={t('experience.title', 'Practical Experience')}
          subtitle={t('experience.subtitle', 'Hands-on contributions in municipal government web development and fast-paced operational environments.')}
        />

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-12">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-10 h-10 rounded-2xl bg-white dark:bg-[#0c1220] border-2 border-blue-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                {getExperienceIcon(exp.id)}
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:border-blue-400 dark:hover:border-blue-500/40 transition-all card-hover-fx">
                
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant={exp.id === 1 ? 'primary' : 'amber'} size="sm">
                      {exp.type}
                    </Badge>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Highlight Banner */}
                {exp.highlight && (
                  <div className="mb-6 p-3.5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 text-xs font-medium text-blue-900 dark:text-blue-200 flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                    <span><strong>Impact:</strong> {exp.highlight}</span>
                  </div>
                )}

                {/* Responsibilities list */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Key Contributions & Responsibilities
                  </h4>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5 items-center">
                  <span className="text-xs font-mono text-slate-400 mr-1">Tools & Skills:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="code-tag px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
