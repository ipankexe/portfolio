import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { ScrollProgress } from '../components/layout/ScrollProgress';
import { CommandMenu } from '../components/ui/CommandMenu';
import { Hero } from '../components/sections/Hero';
import { QuickStats } from '../components/sections/QuickStats';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { DataMachineLearning } from '../components/sections/DataMachineLearning';
import { Projects } from '../components/sections/Projects';
import { Experience } from '../components/sections/Experience';
import { Education } from '../components/sections/Education';
import { Certifications } from '../components/sections/Certifications';
import { Resume } from '../components/sections/Resume';
import { CareerGoal } from '../components/sections/CareerGoal';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/layout/Footer';
import { ScrollToTop } from '../components/layout/ScrollToTop';
import { ProjectModal } from '../components/projects/ProjectModal';
import { useScrollSpy } from '../hooks/useScrollSpy';

export function Home({ theme, toggleTheme }) {
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  const [selectedModalProject, setSelectedModalProject] = useState(null);

  const sectionIds = [
    'home',
    'about',
    'skills',
    'data-ml',
    'projects',
    'experience',
    'education',
    'certifications',
    'cv',
    'contact'
  ];

  const activeSection = useScrollSpy(sectionIds, 100);

  // Global keyboard shortcut for Command Menu (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandMenuOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* 0. Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 1. Global Command Palette / Spotlight Search */}
      <CommandMenu
        isOpen={isCommandMenuOpen}
        onClose={() => setIsCommandMenuOpen(false)}
        theme={theme}
        toggleTheme={toggleTheme}
        onSelectProject={(project) => setSelectedModalProject(project)}
      />

      {/* 2. Top Sticky Navbar with Spotlight trigger */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenCommandMenu={() => setIsCommandMenuOpen(true)}
      />

      <main id="main-content">
        {/* 3. Hero with Interactive Multi-tab Terminal & CLI */}
        <Hero onOpenCommandMenu={() => setIsCommandMenuOpen(true)} />

        {/* 4. Quick Highlights & Metrics */}
        <QuickStats />

        {/* 5. About Bento Box */}
        <About />

        {/* 6. Skills & Competencies Matrix */}
        <Skills />

        {/* 7. Data & Machine Learning Studio */}
        <DataMachineLearning />

        {/* 8. Featured Engineering Projects */}
        <Projects />

        {/* 9. Experience Timeline */}
        <Experience />

        {/* 10. Education & Bachelor Thesis */}
        <Education />

        {/* 11. Cisco & Academic Certifications */}
        <Certifications />

        {/* 12. Interactive Digital Resume / CV */}
        <Resume />

        {/* 13. Career Objectives & Vision */}
        <CareerGoal />

        {/* 14. Contact Form & Collaboration */}
        <Contact />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* 16. Floating Scroll-To-Top Button */}
      <ScrollToTop />

      {/* 17. Global Project Modal (if opened from Command Menu) */}
      <ProjectModal
        project={selectedModalProject}
        isOpen={Boolean(selectedModalProject)}
        onClose={() => setSelectedModalProject(null)}
      />
    </div>
  );
}
