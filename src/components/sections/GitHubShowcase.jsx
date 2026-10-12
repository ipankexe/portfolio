import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, AlertCircle } from 'lucide-react';
import { Github } from '../ui/BrandIcons';
import { useGitHubRepos } from '../../hooks/useGitHubRepos';
import { useLanguage } from '../../hooks/useLanguage';
import { formatISODate } from '../../utils/helpers';
import { Button } from '../ui/Button';

export const GitHubShowcase = () => {
  const { language, t } = useLanguage();
  const { repos, loading, isFallback } = useGitHubRepos();

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/40 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 mb-3">
            <Github className="w-3.5 h-3.5" />
            <span>{t('github.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t('github.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {t('github.subtitle')}
          </p>
        </div>

        {/* Fallback Notice if active */}
        {isFallback && (
          <div className="max-w-2xl mx-auto mb-8 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-400 flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{t('github.errorFallback')}</span>
          </div>
        )}

        {/* Loading State Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800 animate-pulse space-y-4"
              >
                <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded-md w-2/3" />
                <div className="h-4 bg-slate-100 dark:bg-slate-850 rounded-md w-full" />
                <div className="h-4 bg-slate-100 dark:bg-slate-850 rounded-md w-4/5" />
                <div className="flex gap-2 pt-2">
                  <div className="h-6 w-16 bg-slate-200 dark:bg-slate-800 rounded-lg" />
                  <div className="h-6 w-16 bg-slate-200 dark:bg-slate-800 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.slice(0, 6).map((repo) => (
              <motion.a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate font-mono">
                      {repo.name}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors shrink-0" />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {repo.description || 'Public repository by ipankexe'}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    {repo.language || 'Code'}
                  </span>

                  <span className="font-mono text-[11px]">
                    {formatISODate(repo.updated_at, language)}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* View all on GitHub profile button */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="md"
            href="https://github.com/ipankexe"
            target="_blank"
            icon={Github}
            iconPosition="left"
          >
            {t('github.viewAllOnGithub')}
          </Button>
        </div>

      </div>
    </section>
  );
};
