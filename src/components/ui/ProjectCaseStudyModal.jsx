import React from 'react';
import { ExternalLink, CheckCircle2, ShieldAlert, Cpu, Sparkles, Layers, Terminal } from 'lucide-react';
import { Github } from './BrandIcons';
import { Modal } from './Modal';
import { Button } from './Button';
import { useLanguage } from '../../hooks/useLanguage';

export const ProjectCaseStudyModal = ({ project, isOpen, onClose }) => {
  const { language, t } = useLanguage();

  if (!project) return null;

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
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} maxWidth="max-w-4xl">
      <div className="space-y-8 text-slate-700 dark:text-slate-300">
        {/* Header Hero in Modal */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent border border-blue-500/20">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
              {project.tag}
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {project.repoStatus}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {overview}
          </p>

          <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
            {project.githubUrl && (
              <Button
                variant="primary"
                size="sm"
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
                size="sm"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              {t('projects.modal.background')}
            </h4>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {background}
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" />
              {t('projects.modal.problem')}
            </h4>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {problem}
            </p>
          </div>
        </div>

        {/* 2. My Role & Tech Stack */}
        <div className="p-4.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
            <Terminal className="w-4 h-4 text-blue-500" />
            {t('projects.modal.role')}
          </h4>
          <p className="text-sm leading-relaxed mb-4 text-slate-600 dark:text-slate-300">
            {role}
          </p>

          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            {t('projects.modal.techStack')}
          </h5>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Goals & Objectives */}
        {goals && goals.length > 0 && (
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-500" />
              {t('projects.modal.goals')}
            </h4>
            <ul className="space-y-2">
              {goals.map((goal, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 4. Architecture & Data Integrity */}
        {architecture && (
          <div className="p-4.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-500" />
              {t('projects.modal.architecture')}
            </h4>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {architecture}
            </p>
          </div>
        )}

        {/* 5. Key Features */}
        {features && features.length > 0 && (
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">
              {t('projects.modal.features')}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 text-xs sm:text-sm flex items-start gap-2"
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
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">
              {t('projects.modal.challenges')}
            </h4>
            <div className="space-y-3">
              {challenges.map((c, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 space-y-2"
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

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <Button variant="secondary" size="md" onClick={onClose}>
            {t('projects.modal.close')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
