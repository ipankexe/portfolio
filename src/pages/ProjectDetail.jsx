import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle2, ShieldAlert, Cpu, Sparkles, Layers, Terminal } from 'lucide-react';
import { Github } from '../components/ui/BrandIcons';
import { projects } from '../data/projects';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from '../components/ui/Button';

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const project = projects.find((p) => p.slug === slug || p.id === slug);

  if (!project) {
    return (
      <div className="pt-36 pb-24 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Proyek Tidak Ditemukan</h2>
        <p className="text-slate-500 mb-6">Proyek yang Anda cari tidak tersedia dalam repositori.</p>
        <Button variant="primary" onClick={() => navigate('/projects')}>
          Kembali ke Daftar Proyek
        </Button>
      </div>
    );
  }

  const caseStudy = project.caseStudy;
  const overview = caseStudy.overview[language] || caseStudy.overview.id;
  const background = caseStudy.background[language] || caseStudy.background.id;
  const problem = caseStudy.problemStatement[language] || caseStudy.problemStatement.id;
  const goals = caseStudy.goals[language] || caseStudy.goals.id;
  const role = caseStudy.myRole[language] || caseStudy.myRole.id;
  const architecture = caseStudy.architecture[language] || caseStudy.architecture.id;
  const features = caseStudy.keyFeatures[language] || caseStudy.keyFeatures.id;
  const challenges = caseStudy.challengesAndSolutions[language] || caseStudy.challengesAndSolutions.id;

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Back Breadcrumb */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Semua Proyek</span>
        </Link>

        <span className="text-xs font-mono text-slate-400">
          {project.repoStatus}
        </span>
      </div>

      {/* Main Case Study Container */}
      <div className="space-y-8">
        
        {/* Hero Header */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent border border-blue-500/20 shadow-xs">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
              {project.tag}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
            {overview}
          </p>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
            {project.githubUrl && (
              <Button
                variant="primary"
                size="md"
                href={project.githubUrl}
                target="_blank"
                icon={Github}
              >
                {t('projects.githubRepo')}
              </Button>
            )}
            {project.liveDemoUrl && (
              <Button
                variant="outline"
                size="md"
                href={project.liveDemoUrl}
                target="_blank"
                icon={ExternalLink}
              >
                {t('projects.liveDemo')}
              </Button>
            )}
          </div>
        </div>

        {/* 1. Background & Problem Statement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2.5 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              {t('projects.modal.background')}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {background}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2.5 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" />
              {t('projects.modal.problem')}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {problem}
            </p>
          </div>
        </div>

        {/* 2. Role & Tech Stack */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-blue-500" />
            {t('projects.modal.role')}
          </h3>
          <p className="text-sm leading-relaxed mb-6 text-slate-600 dark:text-slate-300">
            {role}
          </p>

          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            {t('projects.modal.techStack')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Goals & Objectives */}
        {goals && goals.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-500" />
              {t('projects.modal.goals')}
            </h3>
            <ul className="space-y-3">
              {goals.map((goal, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 4. Architecture & Data Integrity */}
        {architecture && (
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-indigo-500" />
              {t('projects.modal.architecture')}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {architecture}
            </p>
          </div>
        )}

        {/* 5. Key Features */}
        {features && features.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              {t('projects.modal.features')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 text-xs sm:text-sm flex items-start gap-2.5 text-slate-700 dark:text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. Challenges and Solutions */}
        {challenges && challenges.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              {t('projects.modal.challenges')}
            </h3>
            <div className="space-y-4">
              {challenges.map((c, i) => (
                <div
                  key={i}
                  className="p-4.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 space-y-2"
                >
                  <div className="text-xs sm:text-sm font-semibold text-rose-600 dark:text-rose-400">
                    <span className="font-bold uppercase tracking-wider text-[11px] mr-1">Tantangan:</span> {c.challenge}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-3 border-l-2 border-emerald-500">
                    <span className="font-bold uppercase tracking-wider text-[11px] text-emerald-600 dark:text-emerald-400 mr-1">Solusi Rekayasa:</span> {c.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
