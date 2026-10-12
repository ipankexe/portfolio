import React from 'react';
import { Home } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from '../components/ui/Button';

export const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-extrabold text-3xl font-mono">
          404
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          {t('notFound.title')}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {t('notFound.desc')}
        </p>
        <div className="pt-2">
          <Button variant="primary" size="md" href="/" icon={Home}>
            {t('notFound.backHome')}
          </Button>
        </div>
      </div>
    </div>
  );
};
