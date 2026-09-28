import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Layers, Database, ShieldAlert, BookOpen, Server, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

export function ProjectCard({ project, onOpenModal }) {
  const { t } = useLanguage();
  // Category-specific blueprint icons
  const getProjectIcon = () => {
    switch (project.slug) {
      case 'kulu-asri-pos':
        return <Layers className="w-8 h-8 text-emerald-400" />;
      case 'damkar-information-system':
        return <ShieldAlert className="w-8 h-8 text-rose-400" />;
      case 'stuntingcarenet':
        return <CheckCircle2 className="w-8 h-8 text-teal-400" />;
      case 'belajar-pintar':
        return <BookOpen className="w-8 h-8 text-indigo-400" />;
      case 'mysql-cluster':
        return <Server className="w-8 h-8 text-cyan-400" />;
      default:
        return <Database className="w-8 h-8 text-blue-400" />;
    }
  };

  return (
    <div className="group flex flex-col h-full bg-white dark:bg-[#0c1220] rounded-3xl border border-slate-200/90 dark:border-slate-800/90 hover:border-blue-400/80 dark:hover:border-blue-500/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden card-hover-fx">
      {/* Top Banner / Visual Representation */}
      <div className="relative h-48 bg-[#090d16] border-b border-slate-200 dark:border-slate-800/80 p-5 flex flex-col justify-between overflow-hidden">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 opacity-20 tech-grid-pattern pointer-events-none" />
        
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-lg bg-slate-900/90 text-blue-300 border border-slate-700/60 shadow-2xs">
            {project.type}
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            {project.period}
          </span>
        </div>

        {/* Center Tech Icon & Title Blueprint */}
        <div className="relative z-10 flex items-center gap-3.5 my-auto">
          <div className="w-13 h-13 rounded-2xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
            {getProjectIcon()}
          </div>
          <div className="min-w-0">
            <h4 className="text-white font-bold text-base leading-snug line-clamp-1 group-hover:text-blue-300 transition-colors font-display">
              {project.shortTitle || project.title}
            </h4>
            <p className="text-xs font-mono text-slate-400 mt-0.5 line-clamp-1">
              {project.technologies.slice(0, 3).join(' • ')}
            </p>
          </div>
        </div>

        {/* Bottom Key Metric / Stat Pill */}
        <div className="relative z-10 flex items-center gap-2 pt-2 border-t border-slate-800/80 text-[11px] text-slate-300 font-mono">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
          <span className="truncate">{project.stats?.[0]?.label}: {project.stats?.[0]?.value}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-6 justify-between">
        <div>
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.categories.slice(0, 3).map((cat) => (
              <span
                key={cat}
                className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Full Title */}
          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-display">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Highlight Badge */}
          {project.highlight && (
            <div className="p-3 mb-5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 text-xs text-blue-800 dark:text-blue-300 leading-snug">
              <span className="font-semibold">Highlight: </span>
              {project.highlight}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="code-tag px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2.5">
          <Button
            onClick={() => onOpenModal(project)}
            variant="primary"
            size="sm"
            icon={ArrowRight}
            iconPosition="right"
            className="flex-1 text-xs cursor-pointer shadow-xs"
          >
            {t('projects.btnCaseStudyCard', 'Case Study')}
          </Button>

          <Link
            to={`/project/${project.slug}`}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition-colors cursor-pointer"
            title="Open Dedicated Project Page"
            aria-label={`Open dedicated page for ${project.title}`}
          >
            <ExternalLink className="w-4 h-4" />
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition-colors cursor-pointer"
              title="View GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
