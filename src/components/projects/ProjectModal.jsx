import React from 'react';
import { CheckCircle2, AlertTriangle, Workflow, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

export function ProjectModal({ project, isOpen, onClose }) {
  const { t } = useLanguage();
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.shortTitle || project.title}
      subtitle={`${project.type} • ${project.period}`}
      maxWidth="max-w-4xl"
    >
      <div className="space-y-8 text-slate-800 dark:text-slate-200">
        {/* Header Summary */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="primary" size="sm">
              {project.type}
            </Badge>
            {project.categories.map((cat) => (
              <Badge key={cat} variant="default" size="sm">
                {cat}
              </Badge>
            ))}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {project.highlight && (
            <div className="mt-3 text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-100/50 dark:bg-blue-950/40 p-2.5 rounded-lg border border-blue-200/50 dark:border-blue-900/50">
              💡 {project.highlight}
            </div>
          )}
        </div>

        {/* Key Metrics / Specs */}
        {project.stats && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.stats.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 text-center sm:text-left"
              >
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {s.label}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Case Study Sections */}
        {project.caseStudy && (
          <div className="space-y-6">
            {/* The Problem */}
            <div className="border-l-2 border-rose-500 pl-4 py-0.5">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm uppercase tracking-wide">
                <AlertTriangle className="w-4 h-4" />
                {t('projects.modalProblem', 'Problem Statement')}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            {/* Existing Workflow */}
            {project.caseStudy.existingWorkflow && (
              <div className="border-l-2 border-amber-500 pl-4 py-0.5">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm uppercase tracking-wide">
                  <Workflow className="w-4 h-4" />
                  {t('projects.modalWorkflow', 'Prior / Existing Workflow')}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                  {project.caseStudy.existingWorkflow}
                </p>
              </div>
            )}

            {/* Proposed Solution */}
            <div className="border-l-2 border-blue-500 pl-4 py-0.5">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wide">
                <Cpu className="w-4 h-4" />
                {t('projects.modalSolution', 'Engineered Solution')}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                {project.caseStudy.proposedSolution}
              </p>
            </div>

            {/* Methodology & Testing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                  {t('projects.modalMethodology', 'Methodology')}
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  {project.caseStudy.methodology}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {t('projects.modalTesting', 'Testing & Verification')}
                </div>
                <div className="text-sm text-slate-700 dark:text-slate-300 leading-snug">
                  {project.caseStudy.testing}
                </div>
              </div>
            </div>

            {/* Architecture Details */}
            {project.caseStudy.architecture && (
              <div className="p-4 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs border border-slate-800">
                <div className="text-slate-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                  {t('projects.modalArchitecture', 'System Architecture & Data Flow:')}
                </div>
                <pre className="whitespace-pre-wrap leading-relaxed text-slate-300 font-mono">
                  {project.caseStudy.architecture}
                </pre>
              </div>
            )}
          </div>
        )}

        {/* Key Features List */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
            {t('projects.modalFeatures', 'Core Features & Implementation')}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5">
            {t('projects.modalTech', 'Technologies & Libraries')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="code-tag px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.github && (
              <Button
                as="a"
                href={project.github}
                target="_blank"
                variant="outline"
                size="sm"
                icon={GithubIcon}
              >
                {t('projects.btnGithub', 'View Repository')}
              </Button>
            )}

            <Button
              to={`/project/${project.slug}`}
              variant="secondary"
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
              onClick={onClose}
            >
              {t('projects.btnStudyPage', 'Full Study Page')}
            </Button>
          </div>

          <Button onClick={onClose} variant="ghost" size="sm">
            {t('projects.closeModal', 'Close')}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
