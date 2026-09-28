import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Layers } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectFilter } from '../projects/ProjectFilter';
import { ProjectModal } from '../projects/ProjectModal';
import { projectsData, projectCategories } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';

export function Projects() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  // Compute project counts per category
  const categoryCounts = useMemo(() => {
    const counts = { All: projectsData.length };
    projectCategories.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = projectsData.filter((p) => p.categories.includes(cat)).length;
      }
    });
    return counts;
  }, []);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.categories.includes(selectedCategory);

      const matchesSearch =
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (project.highlight && project.highlight.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 lg:py-28 relative" aria-label="Featured Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('projects.badge', 'Portfolio Case Studies')}
          title={t('projects.title', 'Featured Engineering Projects')}
          subtitle={t('projects.subtitle', 'Real-world information systems, municipal web platforms, and database architectures built with practical engineering discipline.')}
        />

        {/* Filter Navigation & Search Bar Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <ProjectFilter
            categories={projectCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            counts={categoryCounts}
          />

          {/* Search Input Filter */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('projects.searchPlaceholder', 'Search by tech or keyword...')}
              className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-blue-500 shadow-2xs transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                aria-label="Clear project search query"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Projects Counter status */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-6 px-1">
          <span>
            Showing <strong className="text-slate-800 dark:text-slate-200">{filteredProjects.length}</strong> of {projectsData.length} projects
          </span>
          {searchQuery && (
            <span className="text-blue-600 dark:text-blue-400">
              Matching: "{searchQuery}"
            </span>
          )}
        </div>

        {/* Projects Grid with layout animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  onOpenModal={(proj) => setActiveProjectModal(proj)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 px-4 bg-white dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-slate-800">
            <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3 opacity-60" />
            <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
              No matching projects found
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-4">
              We couldn't find any projects matching "{searchQuery}" in the "{selectedCategory}" category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Case Study Modal */}
        <ProjectModal
          project={activeProjectModal}
          isOpen={Boolean(activeProjectModal)}
          onClose={() => setActiveProjectModal(null)}
        />
      </div>
    </section>
  );
}
