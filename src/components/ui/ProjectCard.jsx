import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Github } from './BrandIcons';
import { useLanguage } from '../../hooks/useLanguage';
import { Button } from './Button';

export const ProjectCard = ({ project, onOpenCaseStudy }) => {
  const { language, t } = useLanguage();
  const summary = project.summary[language] || project.summary.id;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200/90 dark:border-slate-800/90 hover:border-blue-500/50 dark:hover:border-blue-500/40 shadow-xs hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden"
    >
      <div className="p-6">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {project.tag}
          </span>
          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
            {project.repoStatus}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2.5">
          {project.title}
        </h3>

        {/* Short Summary */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 line-clamp-3">
          {summary}
        </p>

        {/* Verified Stats / Pill highlights */}
        {project.stats && project.stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-3 px-3.5 mb-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/60">
            {project.stats.map((st, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">
                  {st.label}
                </span>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate font-mono">
                  {st.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 flex items-center justify-between gap-3">
        <Button
          variant="primary"
          size="sm"
          onClick={() => onOpenCaseStudy(project)}
          icon={ArrowRight}
          iconPosition="right"
          className="flex-1 sm:flex-initial"
        >
          {t('projects.viewCaseStudy')}
        </Button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub Repository`}
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
              title="GitHub Repository"
            >
              <Github className="w-4.5 h-4.5" aria-hidden="true" />
            </a>
          )}

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} Live Demo`}
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/60 transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-4.5 h-4.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
