import React, { useState, useMemo } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillCard } from '../skills/SkillCard';
import { skillCategories } from '../../data/skills';
import { useLanguage } from '../../context/LanguageContext';
import {
  Code,
  Database,
  Cpu,
  Layout,
  BarChart3,
  Brain,
  Network,
  ShieldCheck,
  Search,
  X,
  Layers
} from 'lucide-react';

export function Skills() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming-web':
        return <Code className="w-4 h-4 text-blue-500" />;
      case 'backend':
        return <Cpu className="w-4 h-4 text-purple-500" />;
      case 'frontend':
        return <Layout className="w-4 h-4 text-cyan-500" />;
      case 'database':
        return <Database className="w-4 h-4 text-emerald-500" />;
      case 'data-analysis':
        return <BarChart3 className="w-4 h-4 text-amber-500" />;
      case 'machine-learning':
        return <Brain className="w-4 h-4 text-rose-500" />;
      case 'it-infrastructure':
        return <Network className="w-4 h-4 text-indigo-500" />;
      case 'cybersecurity':
        return <ShieldCheck className="w-4 h-4 text-green-500" />;
      default:
        return <Code className="w-4 h-4 text-blue-500" />;
    }
  };

  // Filter skills based on category and search query
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    
    return skillCategories
      .map((cat) => {
        if (activeCategory !== 'all' && cat.id !== activeCategory) {
          return null;
        }

        const filteredSkills = cat.skills.filter((skill) => {
          if (!query) return true;
          return (
            skill.name.toLowerCase().includes(query) ||
            skill.context.toLowerCase().includes(query) ||
            skill.level.toLowerCase().includes(query) ||
            (skill.projects && skill.projects.some((p) => p.toLowerCase().includes(query)))
          );
        });

        if (filteredSkills.length === 0) return null;

        return {
          ...cat,
          skills: filteredSkills
        };
      })
      .filter(Boolean);
  }, [activeCategory, searchQuery]);

  const totalSkillsCount = skillCategories.reduce((acc, c) => acc + c.skills.length, 0);

  const getCategoryName = (cat) => {
    if (language !== 'id') return cat.name;
    switch (cat.id) {
      case 'programming-web': return 'Web & Pemrograman';
      case 'backend': return 'Pengembangan Backend';
      case 'frontend': return 'Pengembangan Frontend';
      case 'database': return 'Sistem Basis Data';
      case 'data-analysis': return 'Analisis Data';
      case 'machine-learning': return 'Machine Learning';
      case 'it-infrastructure': return 'Infrastruktur IT';
      case 'cybersecurity': return 'Keamanan Siber';
      default: return cat.name;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 bg-slate-100/40 dark:bg-[#070a12]/60 relative transition-colors" aria-label="Skills and Technical Competencies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('skills.badge', 'Technical Competencies')}
          title={t('skills.title', 'Skills & Technologies Matrix')}
          subtitle={t('skills.subtitle', 'Real-world technical skills backed by practical project applications, architecture implementations, and academic foundations.')}
        />

        {/* Top Controls: Search + Categories */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer select-none ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-[#0c1220] text-slate-600 dark:text-slate-300 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              {language === 'id' ? 'Semua Kategori' : 'All Categories'} ({totalSkillsCount})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer select-none ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white dark:bg-[#0c1220] text-slate-600 dark:text-slate-300 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{getCategoryName(cat)}</span>
                <span className="text-[10px] opacity-75">({cat.skills.length})</span>
              </button>
            ))}
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'id' ? 'Cari keahlian (contoh: SQL, React)...' : 'Search skill (e.g. SQL, React)...'}
              className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-white dark:bg-[#0c1220] border border-slate-200/90 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-blue-500 shadow-2xs transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                aria-label="Clear skill search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2.5 border-b border-slate-200/80 dark:border-slate-800/80">
                <div className="p-1.5 rounded-lg bg-slate-200/60 dark:bg-slate-800/60 shrink-0">
                  {getCategoryIcon(category.id)}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {category.description}
                  </p>
                </div>
                <span className="ml-auto text-xs font-mono text-slate-400">
                  {category.skills.length} skills
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}

          {/* Empty search results fallback */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-16 px-4 bg-white dark:bg-[#0c1220] rounded-3xl border border-slate-200 dark:border-slate-800">
              <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3 opacity-60" />
              <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
                No matching skills found
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-4">
                No skills match "{searchQuery}". Try searching for terms like "Laravel", "Python", "Database", or "API".
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
