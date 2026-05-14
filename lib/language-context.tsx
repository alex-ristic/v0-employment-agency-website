"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Language } from "./translations"
import { getTranslation } from "./translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: ReturnType<typeof getTranslation>
}

const SUPPORTED_LANGUAGES: Language[] = ["en", "sr", "hr", "de"]

const browserLanguageMap: Record<string, Language> = {
  en: "en",
  sr: "sr",
  bs: "sr",
  hr: "hr",
  de: "de",
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function isLanguage(value: string | null): value is Language {
  return !!value && SUPPORTED_LANGUAGES.includes(value as Language)
}

function getCookie(name: string) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1]
}

function detectBrowserLanguage(): Language {
  for (const browserLanguage of navigator.languages ?? [navigator.language]) {
    const code = browserLanguage.toLowerCase().split("-")[0]
    const language = browserLanguageMap[code]
    if (language) return language
  }

  return "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [t, setT] = useState(() => getTranslation("en"))

  useEffect(() => {
    const savedLang = localStorage.getItem("language")
    const geoLang = getCookie("hpa-language")
    const detectedLang = isLanguage(savedLang)
      ? savedLang
      : isLanguage(geoLang)
        ? geoLang
        : detectBrowserLanguage()

    setLanguageState(detectedLang)
    setT(getTranslation(detectedLang))
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    setT(getTranslation(lang))
    localStorage.setItem("language", lang)
    document.cookie = `hpa-language=${lang}; Max-Age=31536000; Path=/; SameSite=Lax`
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
