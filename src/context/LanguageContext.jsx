/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext({
  language: 'English',
  translations: {},
  changeLanguage: () => {},
  isRtl: false,
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('selectedLanguage') || 'English';
    } catch {
      return 'English';
    }
  });
  const [translations] = useState({});
  const isRtl = language?.toLowerCase() === 'arabic' || language?.toLowerCase() === 'ar';

  const changeLanguage = (lang) => {
    if (!lang) return;
    setLanguage(lang);
    try {
      localStorage.setItem('selectedLanguage', lang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const dir = isRtl ? 'rtl' : 'ltr';
      document.documentElement.dir = dir;
      document.documentElement.setAttribute('dir', dir);
      document.body.dir = dir;
      document.body.setAttribute('dir', dir);
      document.documentElement.setAttribute(
        'lang',
        isRtl ? 'ar' : language === 'English' ? 'en' : language.toLowerCase().slice(0, 2)
      );
    }
  }, [isRtl, language]);

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
