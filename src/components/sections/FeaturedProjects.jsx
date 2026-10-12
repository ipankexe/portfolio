import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import { useLanguage } from '../../hooks/useLanguage';
import { ProjectFilter } from '../ui/ProjectFilter';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectCaseStudyModal } from '../ui/ProjectCaseStudyModal';

export const FeaturedProjects = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Compute category counts
  const counts = useMemo(() => {
    const res = { all: projects.length, web: 0, backend: 0, data: 0, ml: 0 };
    projects.forEach((p) => {
      p.categories.forEach((cat) => {
        if (res[cat] !== undefined) {
          res[cat] += 1;
        }
      });
    });
    return res;
  }, []);

  // Filter projects by active tab
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 relative bg-slate-50/60 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60 mb-3">
            <span>{t('projects.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Filter Pills */}
        <ProjectFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          counts={counts}
        />

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Case Study Details */}
        <ProjectCaseStudyModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
