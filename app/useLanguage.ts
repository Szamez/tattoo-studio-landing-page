"use client";

import { useEffect, useSyncExternalStore } from "react";
import type { Language } from "./content";

const languageKey = "noir-ink-language";
const languageEvent = "noir-ink-language-change";

function readStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "pl";
  }

  return window.localStorage.getItem(languageKey) === "en" ? "en" : "pl";
}

export function useLanguage() {
  const lang = useSyncExternalStore<Language>(
    (callback) => {
      window.addEventListener("storage", callback);
      window.addEventListener(languageEvent, callback);

      return () => {
        window.removeEventListener("storage", callback);
        window.removeEventListener(languageEvent, callback);
      };
    },
    readStoredLanguage,
    () => "pl" as Language,
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(nextLanguage: Language) {
    window.localStorage.setItem(languageKey, nextLanguage);
    window.dispatchEvent(new Event(languageEvent));
  }

  return { lang, setLang };
}
