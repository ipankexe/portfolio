import React, { useState, useEffect } from 'react';
import { LanguageContext } from './languageContextInstance';
import { id } from '../data/translations/id';
import { en } from '../data/translations/en';

const translations = { id, en };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-lang');
      if (saved === 'id' || saved === 'en') {
        return saved;
      }
      return 'id'; // Default Indonesian as requested
    } catch {
      return 'id';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('portfolio-lang', language);
      document.documentElement.lang = language;
    } catch (e) {
      console.warn('LocalStorage not available for language persistence', e);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const setLanguage = (lang) => {
    if (lang === 'id' || lang === 'en') {
      setLanguageState(lang);
    }
  };

  const currentTranslations = translations[language] || id;

  const t = (path) => {
    if (!path) return '';
    const keys = path.split('.');
    let current = currentTranslations;
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        let fallback = id;
        for (const fbKey of keys) {
          if (fallback && typeof fallback === 'object' && fbKey in fallback) {
            fallback = fallback[fbKey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        currentTranslations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
