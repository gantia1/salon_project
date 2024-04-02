import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationKA from "./public/locales/ka.json";
import translationEN from "./public/locales/en.json";

const storedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : null;

i18n.use(initReactI18next).init({
    lng: storedLanguage || 'ka',
    fallbackLng: 'ka',
    resources: {
        ka: { translation: translationKA },
        en: { translation: translationEN }
    },
    interpolation: { escapeValue: false },
    detection: { caches: ['localStorage'] }
});

i18n.on('languageChanged', lng => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('language', lng);
    }
});

export default i18n;
