import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  FileDown,
  Moon,
  Sun,
  Mail,
  Copy,
  FolderGit2,
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  Brain,
  Compass,
  ArrowRight,
  X,
  Layers,
  Languages
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from './Icons';
import { personalInfo } from '../../data/personalInfo';
import { projectsData } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';

export function CommandMenu({ isOpen, onClose, theme, toggleTheme, onSelectProject }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const { language, toggleLanguage, t } = useLanguage();

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setQuery('');
        setSelectedIndex(0);
        inputRef.current?.focus();
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle global escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const scrollToSection = (id) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const topOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  // Command items
  const navigationItems = [
    { id: 'nav-home', label: language === 'id' ? 'Menuju Beranda' : 'Go to Home', category: t('command.sectionNav', 'Navigation'), icon: Compass, action: () => scrollToSection('home') },
    { id: 'nav-about', label: language === 'id' ? 'Tentang Saya & Latar Belakang' : 'Go to About Me & Background', category: t('command.sectionNav', 'Navigation'), icon: Compass, action: () => scrollToSection('about') },
    { id: 'nav-skills', label: language === 'id' ? 'Keahlian & Tech Stack' : 'Go to Skills & Tech Stack', category: t('command.sectionNav', 'Navigation'), icon: Code2, action: () => scrollToSection('skills') },
    { id: 'nav-data-ml', label: language === 'id' ? 'Studio Data & Machine Learning' : 'Go to Data & Machine Learning Studio', category: t('command.sectionNav', 'Navigation'), icon: Brain, action: () => scrollToSection('data-ml') },
    { id: 'nav-projects', label: language === 'id' ? 'Proyek Rekayasa Unggulan' : 'Go to Featured Projects', category: t('command.sectionNav', 'Navigation'), icon: FolderGit2, action: () => scrollToSection('projects') },
    { id: 'nav-exp', label: language === 'id' ? 'Pengalaman Kerja (Diskominfo)' : 'Go to Experience (Diskominfo)', category: t('command.sectionNav', 'Navigation'), icon: Briefcase, action: () => scrollToSection('experience') },
    { id: 'nav-edu', label: language === 'id' ? 'Pendidikan (UDINUS S.Kom)' : 'Go to Education (UDINUS S.Kom)', category: t('command.sectionNav', 'Navigation'), icon: GraduationCap, action: () => scrollToSection('education') },
    { id: 'nav-cert', label: language === 'id' ? 'Sertifikasi (Cisco Cybersecurity)' : 'Go to Certifications (Cisco)', category: t('command.sectionNav', 'Navigation'), icon: Award, action: () => scrollToSection('certifications') },
    { id: 'nav-cv', label: language === 'id' ? 'Resume Digital Interaktif (CV)' : 'Go to Interactive Digital CV', category: t('command.sectionNav', 'Navigation'), icon: FileDown, action: () => scrollToSection('cv') },
    { id: 'nav-contact', label: language === 'id' ? 'Kontak & Kolaborasi' : 'Go to Contact & Collaboration', category: t('command.sectionNav', 'Navigation'), icon: Mail, action: () => scrollToSection('contact') },
  ];

  const projectItems = projectsData.map((p) => ({
    id: `project-${p.slug}`,
    label: `Project: ${p.shortTitle || p.title}`,
    subLabel: `${p.technologies.slice(0, 3).join(', ')} • ${p.type}`,
    category: 'Projects',
    icon: Layers,
    action: () => {
      onClose();
      if (onSelectProject) {
        onSelectProject(p);
      } else {
        scrollToSection('projects');
      }
    }
  }));

  const actionItems = [
    {
      id: 'action-download-cv',
      label: 'Download Curriculum Vitae (PDF)',
      category: 'Actions',
      icon: FileDown,
      action: () => {
        onClose();
        const link = document.createElement('a');
        link.href = personalInfo.cvDocumentPath;
        link.download = 'Muhammad-Irfan-Setiawan-CV.pdf';
        link.click();
      }
    },
    {
      id: 'action-copy-email',
      label: `Copy Email (${personalInfo.email})`,
      category: 'Actions',
      icon: Copy,
      action: () => {
        onClose();
        navigator.clipboard?.writeText(personalInfo.email);
      }
    },
    {
      id: 'action-copy-phone',
      label: `Copy WhatsApp Number (${personalInfo.phone})`,
      category: 'Actions',
      icon: Copy,
      action: () => {
        onClose();
        navigator.clipboard?.writeText(personalInfo.phone);
      }
    },
    {
      id: 'action-toggle-theme',
      label: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      category: t('command.sectionActions', 'Actions'),
      icon: theme === 'dark' ? Sun : Moon,
      action: () => {
        toggleTheme();
        onClose();
      }
    },
    {
      id: 'action-toggle-language',
      label: language === 'id' ? 'Switch Language to English (EN)' : 'Ganti ke Bahasa Indonesia (ID)',
      category: t('command.sectionActions', 'Actions'),
      icon: Languages,
      action: () => {
        toggleLanguage();
        onClose();
      }
    },
    {
      id: 'action-whatsapp',
      label: `Chat on WhatsApp (${personalInfo.phone})`,
      category: 'External Links',
      icon: WhatsAppIcon,
      action: () => {
        onClose();
        window.open(personalInfo.whatsapp, '_blank', 'noopener,noreferrer');
      }
    },
    {
      id: 'action-github',
      label: 'Open GitHub Profile (ipankexe)',
      category: 'External Links',
      icon: GithubIcon,
      action: () => {
        onClose();
        window.open(personalInfo.socialLinks.github, '_blank', 'noopener,noreferrer');
      }
    },
    {
      id: 'action-instagram',
      label: 'Open Instagram Profile (@irfaanstwn)',
      category: 'External Links',
      icon: InstagramIcon,
      action: () => {
        onClose();
        window.open(personalInfo.socialLinks.instagram, '_blank', 'noopener,noreferrer');
      }
    },
    {
      id: 'action-linkedin',
      label: 'Open LinkedIn Profile',
      category: 'External Links',
      icon: LinkedinIcon,
      action: () => {
        onClose();
        window.open(personalInfo.socialLinks.linkedin, '_blank', 'noopener,noreferrer');
      }
    }
  ];

  const allItems = [...navigationItems, ...projectItems, ...actionItems];

  const filteredItems = query.trim() === ''
    ? allItems
    : allItems.filter(item => 
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        (item.subLabel && item.subLabel.toLowerCase().includes(query.toLowerCase())) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="relative w-full max-w-xl bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[75vh] z-10"
            role="dialog"
            aria-modal="true"
            aria-label="Command search menu"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 gap-3">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder={t('command.searchPlaceholder', 'Type a command, project, or section name...')}
                className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                  aria-label="Clear search input"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/50">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-sm text-slate-500 dark:text-slate-400">
                  <p>{language === 'id' ? 'Tidak ada hasil untuk' : 'No results found for'} "<span className="font-semibold text-slate-700 dark:text-slate-300">{query}</span>"</p>
                  <p className="text-xs text-slate-400 mt-1">{language === 'id' ? 'Coba cari "proyek", "CV", "skills", atau "whatsapp"' : 'Try searching for "projects", "CV", "skills", or "contact"'}</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {filteredItems.map((item, index) => {
                    const isSelected = index === selectedIndex;
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 text-white font-medium shadow-xs'
                            : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`p-1.5 rounded-lg shrink-0 ${
                              isSelected
                                ? 'bg-white/20 text-white'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                            }`}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="truncate">
                            <div className="truncate font-semibold">{item.label}</div>
                            {item.subLabel && (
                              <div
                                className={`text-[11px] truncate ${
                                  isSelected ? 'text-blue-100' : 'text-slate-400'
                                }`}
                              >
                                {item.subLabel}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                              isSelected
                                ? 'bg-white/20 text-blue-100'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                            }`}
                          >
                            {item.category}
                          </span>
                          <ArrowRight
                            className={`w-3.5 h-3.5 ${
                              isSelected ? 'text-white' : 'text-slate-400'
                            }`}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Bottom Keyboard Hint Bar */}
            <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[10px]">↑</kbd>
                  <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[10px]">↓</kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[10px]">↵</kbd>
                  <span>Select</span>
                </span>
              </div>
              <div>Quick Spotlight Nav</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
