'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Lang = 'uk' | 'en';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'uk',
  setLang: () => {},
});

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Lang>('uk');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang;
    if (saved === 'uk' || saved === 'en') setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('lang', l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);