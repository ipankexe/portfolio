import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { Skills } from '../components/sections/Skills';
import { Experience } from '../components/sections/Experience';
import { DataAnalytics } from '../components/sections/DataAnalytics';
import { Education } from '../components/sections/Education';
import { GitHubShowcase } from '../components/sections/GitHubShowcase';
import { Contact } from '../components/sections/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <DataAnalytics />
      <Education />
      <GitHubShowcase />
      <Contact />
    </>
  );
};
