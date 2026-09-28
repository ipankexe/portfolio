import React from 'react';
import { Target, CheckCircle2, Rocket, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

export function CareerGoal() {
  const { language, t } = useLanguage();

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-100/40 dark:bg-[#070a12]/60 relative transition-colors" aria-label="Career Objectives and Vision">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('careerGoal.badge', 'Vision & Future')}
          title={t('careerGoal.title', 'Career Objectives & Trajectory')}
          subtitle={t('careerGoal.subtitle', 'A clear roadmap for professional growth, software craftsmanship, and delivering continuous value.')}
        />

        <div className="p-6 sm:p-10 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm relative overflow-hidden card-hover-fx">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/60 text-xs font-semibold shadow-2xs">
                <Target className="w-3.5 h-3.5" />
                <span>Immediate Objective</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug font-display">
                Starting my professional journey in an Entry-Level Software Engineering, Web Development, or Data-Driven Role
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                As an Informatics Engineering graduate from Universitas Dian Nuswantoro, my primary focus is to join an engineering team where I can apply my foundational experience in full-stack web development (Laravel, React, Node.js, databases) while learning from experienced mentors and solving real-world challenges.
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong>Write Maintainable Code:</strong> Adhering to clean architecture, modular design, and robust automated validation.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong>Deepen Data & ML Capabilities:</strong> Expanding from data cleaning & EDA to deploying scalable machine learning models into real-world software.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong>Embrace Team Collaboration:</strong> Thriving in agile sprints, participating actively in code reviews, and adapting quickly.
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center mb-4 shadow-md">
                <Rocket className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 font-display">
                Ready to Contribute
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                Available for full-time opportunities, internship extensions, and software engineering positions.
              </p>
              <Button
                onClick={handleScrollToContact}
                variant="primary"
                size="sm"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full justify-center shadow-xs cursor-pointer"
              >
                Discuss Opportunities
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
