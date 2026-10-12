import { describe, it, expect } from 'vitest';
import { experiences } from '../data/experience';

describe('Experience Data Validation', () => {
  it('contains Capstone Project, Diskominfo Semarang, and Dikala Kopi Group', () => {
    expect(experiences.length).toBe(3);
    const ids = experiences.map((e) => e.id);
    expect(ids).toContain('capstone-pos');
    expect(ids).toContain('diskominfo-semarang');
    expect(ids).toContain('dikala-kopi');
  });

  it('Diskominfo Semarang details match official documents', () => {
    const diskominfo = experiences.find((e) => e.id === 'diskominfo-semarang');
    expect(diskominfo.role.id).toContain('Fullstack Web Developer');
    expect(diskominfo.role.id).toContain('Internship');
    expect(diskominfo.period.id).toContain('Juni 2025');
    expect(diskominfo.period.id).toContain('September 2025');
    expect(diskominfo.summary.id).toContain('Dinas Pemadam Kebakaran');
    expect(diskominfo.techStack).toContain('React.js');
    expect(diskominfo.techStack).toContain('MongoDB');
    expect(diskominfo.techStack).toContain('Express.js');
  });

  it('Dikala Kopi Group represents F&B transferable soft skills', () => {
    const dikala = experiences.find((e) => e.id === 'dikala-kopi');
    expect(dikala.type).toBe('transferable');
    expect(dikala.role.id).toContain('Food & Beverage');
    expect(dikala.transferablePillars.length).toBe(4);
    
    const titles = dikala.transferablePillars.map((p) => p.title.en);
    expect(titles).toContain('Communication & Public Speaking');
    expect(titles).toContain('Teamwork & Collaboration');
    expect(titles).toContain('Working Under Pressure');
    expect(titles).toContain('Problem Solving & Adaptability');
  });

  it('strictly excludes SMKN 53 Jakarta as required by guidelines', () => {
    const stringified = JSON.stringify(experiences);
    expect(stringified).not.toContain('SMKN 53');
    expect(stringified).not.toContain('SMKN 53 Jakarta');
  });
});
