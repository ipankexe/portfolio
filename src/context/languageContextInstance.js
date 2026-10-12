import { createContext } from 'react';
import { id } from '../data/translations/id';

export const LanguageContext = createContext({
  language: 'id',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: () => '',
  currentTranslations: id,
});
