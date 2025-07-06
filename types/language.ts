export type Language = 'en' | 'id';

export const Language = {
  en: 'en' as Language,
  id: 'id' as Language
} as const;

export interface LanguageContext {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const defaultLanguage = Language.en as Language;

export const isLanguage = (value: string): value is Language => {
  return value === Language.en || value === Language.id;
};