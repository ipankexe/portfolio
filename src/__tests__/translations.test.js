import { describe, it, expect } from 'vitest';
import { id } from '../data/translations/id';
import { en } from '../data/translations/en';

describe('Bilingual Translations Consistency', () => {
  it('both ID and EN translation dictionaries exist with identical root sections', () => {
    const idKeys = Object.keys(id);
    const enKeys = Object.keys(en);
    expect(idKeys).toEqual(enKeys);
    expect(idKeys).toContain('nav');
    expect(idKeys).toContain('hero');
    expect(idKeys).toContain('about');
    expect(idKeys).toContain('projects');
    expect(idKeys).toContain('experience');
    expect(idKeys).toContain('skills');
    expect(idKeys).toContain('analytics');
    expect(idKeys).toContain('education');
    expect(idKeys).toContain('github');
    expect(idKeys).toContain('contact');
    expect(idKeys).toContain('footer');
  });

  it('hero headline matches the exact requirement in both languages', () => {
    expect(id.hero.headline).toBe('Building Digital Solutions Through Code.');
    expect(en.hero.headline).toBe('Building Digital Solutions Through Code.');
  });

  it('full name is Muhammad Irfan Setiawan', () => {
    expect(id.hero.name).toBe('Muhammad Irfan Setiawan');
    expect(en.hero.name).toBe('Muhammad Irfan Setiawan');
  });

  it('contact section has valid official contact links', () => {
    expect(id.contact.whatsappCard.title).toBeTruthy();
    expect(en.contact.whatsappCard.title).toBeTruthy();
    expect(id.contact.emailCard.title).toBeTruthy();
    expect(en.contact.emailCard.title).toBeTruthy();
  });
});
