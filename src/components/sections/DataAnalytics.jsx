import React from 'react';
import { motion } from 'framer-motion';
import { Binary, ScanFace, ExternalLink, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { Button } from '../ui/Button';

export const DataAnalytics = () => {
  const { t } = useLanguage();

  return (
    <section id="analytics" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('analytics.badgeExploring')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t('analytics.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {t('analytics.subtitle')}
          </p>
        </div>

        {/* Transparent Honesty Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-4.5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-200/70 dark:border-indigo-900/40 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 leading-relaxed">
            {t('analytics.disclaimer')}
          </p>
        </div>

        {/* Showcase Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* 1. Computer Vision Face Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-xs">
                  <ScanFace className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold">
                  Jupyter Notebook + Django
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {t('analytics.faceTrackerTitle')}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {t('analytics.faceTrackerDesc')}
              </p>

              {/* Verified Technical Steps */}
              <div className="space-y-2.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Normalisasi data citra float32 (X / 255.0) dan one-hot encoding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Pipeline ImageDataGenerator (rotasi 20°, zoom, horizontal flip)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Integrasi dashboard status Django web controller</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'OpenCV', 'ImageDataGenerator', 'Django', 'Jupyter'].map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              href="https://github.com/ipankexe/ML-A11202214681-UAS"
              target="_blank"
              icon={ExternalLink}
              iconPosition="right"
              className="w-full justify-between"
            >
              <span>{t('analytics.viewNotebookRepo')}</span>
            </Button>
          </motion.div>

          {/* 2. Data Mining & Preprocessing EDA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-8 rounded-3xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-xs">
                  <Binary className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold">
                  Pandas & EDA
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {t('analytics.dataMiningTitle')}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {t('analytics.dataMiningDesc')}
              </p>

              {/* Verified Technical Steps */}
              <div className="space-y-2.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Audit missing values dan deduplikasi baris tabular</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Pemeriksaan statistik deskriptif dan visualisasi sebaran data</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Implementasi alur preparasi data terstandar di Jupyter Notebook</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'Pandas', 'NumPy', 'Matplotlib', 'EDA', 'Data Mining'].map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              href="https://github.com/ipankexe/DataMining24"
              target="_blank"
              icon={ExternalLink}
              iconPosition="right"
              className="w-full justify-between"
            >
              <span>{t('analytics.viewNotebookRepo')}</span>
            </Button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
