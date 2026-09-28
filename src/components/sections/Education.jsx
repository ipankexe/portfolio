import React from 'react';
import { GraduationCap, BookOpen, FileCode, CheckCircle2, MapPin } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { educationData } from '../../data/education';
import { useLanguage } from '../../context/LanguageContext';

export function Education() {
  const { language, t } = useLanguage();
  const edu = educationData[0];

  return (
    <section id="education" className="py-20 lg:py-28 relative" aria-label="Education and Academic Background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('education.badge', 'Academic Background')}
          title={t('education.title', 'Education & Bachelor Thesis')}
          subtitle={t('education.subtitle', 'Rigorous foundations in Computer Science and Software Engineering at Universitas Dian Nuswantoro.')}
        />

        <div className="bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl rounded-3xl border border-slate-200/90 dark:border-slate-800/90 p-6 sm:p-8 lg:p-10 shadow-sm hover:border-blue-400 dark:hover:border-blue-500/40 transition-all card-hover-fx">
          
          {/* Main Institution Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 flex items-center justify-center shrink-0 shadow-xs">
                <GraduationCap className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display">
                  {edu.institution}
                </h3>
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                  {edu.localDegree}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>{edu.degree} • {edu.location}</span>
                </div>
              </div>
            </div>

            <div className="sm:text-right">
              <Badge variant="success" size="md">
                {edu.status}
              </Badge>
            </div>
          </div>

          {/* Thesis / Skripsi Spotlight */}
          <div className="my-8 p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              <FileCode className="w-4 h-4" />
              <span>Final Undergraduate Thesis (Skripsi)</span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2 font-display">
              "{edu.thesis.title}"
            </h4>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic mb-4">
              {edu.thesis.translation}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">Methodology:</span>
                <span className="text-slate-600 dark:text-slate-400">{edu.thesis.methodology}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">Verification:</span>
                <span className="text-slate-600 dark:text-slate-400">{edu.thesis.testing}</span>
              </div>
            </div>
          </div>

          {/* Key Coursework and Knowledge Modules */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Core Academic Disciplines & Coursework</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {edu.keyCourses.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
