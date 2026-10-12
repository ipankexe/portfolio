import { describe, it, expect } from 'vitest';
import { projects } from '../data/projects';

describe('Projects Data Validation', () => {
  it('contains verified projects from ipankexe GitHub account', () => {
    expect(projects.length).toBeGreaterThanOrEqual(4);
    
    // Slugs must be unique
    const slugs = projects.map((p) => p.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('includes POS Kulu Asri with dual-channel order architecture', () => {
    const kulu = projects.find((p) => p.id === 'pos-kulu-asri');
    expect(kulu).toBeDefined();
    expect(kulu.githubUrl).toBe('https://github.com/ipankexe/pos-kulu-asri');
    expect(kulu.techStack).toContain('Laravel 12');
    expect(kulu.techStack).toContain('MySQL');
    expect(kulu.caseStudy.architecture.id).toContain('Laravel 12');
  });

  it('includes Bergegas POS with 21 automated tests verification', () => {
    const bergegas = projects.find((p) => p.id === 'pos-bergegaz');
    expect(bergegas).toBeDefined();
    expect(bergegas.githubUrl).toBe('https://github.com/ipankexe/pos-bergegaz');
    expect(bergegas.techStack).toContain('Laravel 12');
    expect(bergegas.techStack).toContain('PHPUnit');
    expect(bergegas.stats.some((s) => s.value.includes('21 Tests'))).toBe(true);
  });

  it('includes Web Damkar Diskominfo Semarang with React and Express', () => {
    const damkar = projects.find((p) => p.id === 'webdamkar');
    expect(damkar).toBeDefined();
    expect(damkar.githubUrl).toBe('https://github.com/ipankexe/webdamkar');
    expect(damkar.techStack).toContain('React 19');
    expect(damkar.techStack).toContain('Express.js 5');
    expect(damkar.techStack).toContain('MongoDB');
  });

  it('every project has bilingual summaries and complete case study fields', () => {
    projects.forEach((p) => {
      expect(p.summary.id).toBeTruthy();
      expect(p.summary.en).toBeTruthy();
      expect(p.caseStudy.overview.id).toBeTruthy();
      expect(p.caseStudy.overview.en).toBeTruthy();
      expect(p.caseStudy.problemStatement.id).toBeTruthy();
      expect(p.caseStudy.problemStatement.en).toBeTruthy();
      expect(p.caseStudy.goals.id.length).toBeGreaterThan(0);
      expect(p.caseStudy.goals.en.length).toBeGreaterThan(0);
      expect(p.caseStudy.keyFeatures.id.length).toBeGreaterThan(0);
    });
  });
});
