import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, AlertTriangle, Workflow, ShieldCheck, Cpu, Sparkles } from 'lucide-react';
import { GithubIcon } from '../components/ui/Icons';
import { projectsData } from '../data/projects';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { LanguageToggle } from '../components/ui/LanguageToggle';
import { ScrollProgress } from '../components/layout/ScrollProgress';
import { useLanguage } from '../context/LanguageContext';

export function ProjectDetails({ theme, toggleTheme }) {
  const { t } = useLanguage();
  const { slug } = useParams();

  const project = projectsData.find((p) => p.slug === slug);

  // Scroll to top upon navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-[#080c14] text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-display">
          Project Not Found
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          The project case study you requested does not exist or has been moved.
        </p>
        <Button to="/" variant="primary" icon={ArrowLeft} className="cursor-pointer">
          Back to Homepage
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100 transition-colors">
      <ScrollProgress />

      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-30 bg-white/85 dark:bg-[#080c14]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-3.5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('projects.backToAll', 'Back to All Projects')}</span>
          </Link>

          <div className="flex items-center gap-2.5">
            <LanguageToggle />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            {project.github && (
              <Button
                as="a"
                href={project.github}
                target="_blank"
                variant="outline"
                size="sm"
                icon={GithubIcon}
                className="cursor-pointer"
              >
                GitHub Repo
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Article */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Header Block */}
        <div className="space-y-4 mb-10 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="primary" size="md">
              {project.type}
            </Badge>
            {project.categories.map((c) => (
              <Badge key={c} variant="default" size="md">
                {c}
              </Badge>
            ))}
            <span className="text-xs font-mono text-slate-400 ml-auto">
              {project.period}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight font-display">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {project.highlight && (
            <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60 text-sm font-medium text-blue-900 dark:text-blue-200 flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-blue-500 shrink-0" />
              <span><strong>Key Highlight:</strong> {project.highlight}</span>
            </div>
          )}
        </div>

        {/* Stats Row */}
        {project.stats && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {project.stats.map((s, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xs card-hover-fx"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {s.label}
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white mt-1 font-display">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technical Case Study Breakdown */}
        {project.caseStudy && (
          <div className="space-y-8 mb-12">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display">
              System Design & Engineering Analysis
            </h2>

            {/* Problem Statement */}
            <div className="p-6 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 space-y-2 card-hover-fx">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>Problem Statement & Operational Bottlenecks</span>
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            {/* Existing Workflow */}
            {project.caseStudy.existingWorkflow && (
              <div className="p-6 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 space-y-2 card-hover-fx">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm uppercase tracking-wider">
                  <Workflow className="w-4 h-4" />
                  <span>Prior / Manual Workflow</span>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.caseStudy.existingWorkflow}
                </p>
              </div>
            )}

            {/* Engineered Solution */}
            <div className="p-6 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 space-y-2 card-hover-fx">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>Proposed & Engineered Solution</span>
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.caseStudy.proposedSolution}
              </p>
            </div>

            {/* Methodology & Testing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 card-hover-fx">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Methodology & Lifecycle
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white mb-2 font-display">
                  {project.caseStudy.methodology}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Structured systematic phases from requirements gathering, UML diagrams, implementation, to validation.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 card-hover-fx">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Quality Assurance & Testing</span>
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white mb-2 font-display">
                  {project.caseStudy.testing}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Verification covering order entry, transaction cancellations, user privilege levels, and database state integrity.
                </p>
              </div>
            </div>

            {/* Key Features List */}
            {project.caseStudy.features && (
              <div className="p-6 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Implemented System Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.caseStudy.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Technologies Grid */}
        <div className="mb-12">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 font-display">
            Technologies & Tools Applied
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 shadow-2xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-bold font-display">
              {t('projects.ctaTitle', "Interested in this project's architecture?")}
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              {t('projects.ctaSubtitle', "Let's discuss how these technical principles can contribute to your engineering goals.")}
            </p>
          </div>
          <Button
            to="/#contact"
            variant="default"
            size="md"
            className="bg-white text-blue-900 hover:bg-blue-50 font-bold shrink-0 cursor-pointer shadow-md"
          >
            {t('hero.ctaContact', 'Get in Touch')}
          </Button>
        </div>

      </main>
    </div>
  );
}
