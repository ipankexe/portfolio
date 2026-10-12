import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { projects } from '../data/projects';
import { useLanguage } from '../hooks/useLanguage';
import { ProjectFilter } from '../components/ui/ProjectFilter';
import { ProjectCard } from '../components/ui/ProjectCard';
import { ProjectCaseStudyModal } from '../components/ui/ProjectCaseStudyModal';

export const Projects = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

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

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCat = activeCategory === 'all' || p.categories.includes(activeCategory);
      const matchesSearch =
        searchQuery === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Breadcrumb */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('notFound.backHome')}</span>
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60 mb-3">
          <span>{t('projects.badge')}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          {t('projects.title')}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {t('projects.subtitle')}
        </p>
      </div>

      {/* Search Input & Category Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari teknologi / nama..."
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <ProjectFilter
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        counts={counts}
      />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenCaseStudy={setSelectedProject}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-slate-500 dark:text-slate-400">
          Tidak ada proyek yang sesuai dengan kriteria pencarian Anda.
        </div>
      )}

      {/* Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
