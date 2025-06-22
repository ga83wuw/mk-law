import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files directly from src/locales
import translationEN from "../public/locales/en/translation.json";
import translationGR from "../public/locales/gr/translation.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: translationEN },
      gr: { translation: translationGR },
    },
    lng: "gr", 
    fallbackLng: "gr",
    debug: true,
    detection: {
      order: ["cookie", "localStorage", "navigator", "path", "subdomain"],
      caches: ["cookie", "localStorage"],
    },
  });

export default i18n;
