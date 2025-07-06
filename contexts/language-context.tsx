"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Language = "en" | "id"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

import enTranslations from '@/locales/en';
import idTranslations from '@/locales/id';

const translations = {
  en: enTranslations,
  id: idTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem("language")
    if (saved === "en" || saved === "id") {
      setLanguage(saved)
    } else if (navigator.language.startsWith("id")) {
      setLanguage("id")
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string): string => {
    try {
      const keys = key.split('.');
      let result: any = translations[language];

      // Try current language first
      for (const k of keys) {
        result = result?.[k];
        if (result === undefined) break;
      }

      // Fallback to English if not found
      if (result === undefined && language !== 'en') {
        result = translations.en;
        for (const k of keys) {
          result = result?.[k];
          if (result === undefined) break;
        }
      }

      return result ?? key; // Return key if translation not found
    } catch {
      return key;
    }
  };

  if (isLoading) return null;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export { translations } // Optional: supaya bisa diakses luar kalau mau generate sitemap dll
