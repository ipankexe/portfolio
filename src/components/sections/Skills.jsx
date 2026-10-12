import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Layers,
  Server,
  Database,
  Wrench,
  Binary,
  ExternalLink,
  Info,
} from 'lucide-react';
import { skillsData } from '../../data/skills';
import { projects } from '../../data/projects';
import { useLanguage } from '../../hooks/useLanguage';
import { Button } from '../ui/Button';

export const Skills = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('technical');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'languages':
        return Code2;
      case 'frontend':
        return Layers;
      case 'backend':
        return Server;
      case 'database':
        return Database;
      case 'tools':
        return Wrench;
      case 'data-ai':
        return Binary;
      default:
        return Code2;
    }
  };

  // Find linked projects for the selected skill
  const relatedProjects = selectedSkill
    ? projects.filter((p) => selectedSkill.projects.includes(p.slug) || selectedSkill.projects.includes(p.id))
    : [];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60 mb-3">
            <span>{t('skills.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Master Tab: Technical vs Soft Skills */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => {
                setActiveTab('technical');
                setSelectedSkill(null);
              }}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'technical'
                  ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Technical Competencies
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('soft');
                setSelectedSkill(null);
              }}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'soft'
                  ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Soft & Transferable Skills
            </button>
          </div>
        </div>

        {/* Technical Skills Tab Content */}
        {activeTab === 'technical' && (
          <div className="space-y-8">
            <p className="text-xs sm:text-sm text-center text-slate-500 dark:text-slate-400 italic">
              {t('skills.clickPrompt')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.technicalCategories.map((category) => {
                const IconComponent = getCategoryIcon(category.id);
                return (
                  <div
                    key={category.id}
                    className="p-6 rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                          {category.title[language] || category.title.id}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {category.items.map((skill, idx) => {
                          const isSelected = selectedSkill?.name === skill.name;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setSelectedSkill(isSelected ? null : skill)}
                              className={`group text-left px-3 py-2 rounded-xl text-xs transition-all cursor-pointer select-none border ${
                                isSelected
                                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/30'
                                  : 'bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500'
                              }`}
                            >
                              <div className="font-semibold flex items-center gap-1.5">
                                <span>{skill.name}</span>
                                {skill.projects.length > 0 && (
                                  <span className={`text-[10px] px-1 py-0.2 rounded-full ${isSelected ? 'bg-blue-700 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
                                    {skill.projects.length}
                                  </span>
                                )}
                              </div>
                              <div className={`text-[10px] font-mono mt-0.5 ${isSelected ? 'text-blue-100' : 'text-slate-400 dark:text-slate-500'}`}>
                                {skill.level}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Selected Skill Inspector */}
            <AnimatePresence>
              {selectedSkill && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="p-6 rounded-2xl bg-blue-50/70 dark:bg-slate-900 border border-blue-200/80 dark:border-blue-900/50 shadow-md mt-6"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-blue-200/60 dark:border-slate-800">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
                        Skill In Action
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        {selectedSkill.name}
                      </h4>
                      <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        Proficiency Level: {selectedSkill.level}
                      </p>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedSkill(null)}
                    >
                      Tutup Inspector
                    </Button>
                  </div>

                  <div className="mt-4">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                      {t('skills.relatedProjects')}
                    </h5>

                    {relatedProjects.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {relatedProjects.map((p) => (
                          <div
                            key={p.id}
                            className="p-3.5 rounded-xl bg-white dark:bg-[#0c101d] border border-slate-200 dark:border-slate-800 text-xs flex flex-col justify-between"
                          >
                            <div>
                              <p className="font-bold text-slate-900 dark:text-white line-clamp-1">
                                {p.title}
                              </p>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                                {p.summary[language] || p.summary.id}
                              </p>
                            </div>
                            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                              <a
                                href={p.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-semibold text-[11px]"
                              >
                                View Repo <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                        {t('skills.noDirectProject')}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Soft Skills Tab Content */}
        {activeTab === 'soft' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-800 dark:text-amber-300 leading-relaxed flex items-start gap-2.5">
              <Info className="w-5 h-5 shrink-0 mt-0.5 text-amber-500" />
              <span>
                Keterampilan interpersonal dan soft skills di bawah ini dibentuk dan diuji secara langsung melalui pengalaman kerja nyata di industri Food & Beverage (Dikala Kopi Group) serta kolaborasi pengembangan proyek perangkat lunak di Diskominfo Kota Semarang.
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.softSkills.map((soft) => (
                <div
                  key={soft.id}
                  className="p-6 rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {soft.title[language] || soft.title.id}
                      </h3>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                        Verified
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {soft.desc[language] || soft.desc.id}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Sumber Pengalaman:</span>{' '}
                    {soft.source[language] || soft.source.id}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
