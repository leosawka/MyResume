import { useAppSelector } from "../sotre/hooks";
import translations from "../locales/translations";

type Translations = typeof translations;
type LanguageKeys = keyof Translations;

export const useTranslation = () => {
  const language = useAppSelector((state) => state.language.language) as LanguageKeys;
  const t = (key: string) => {
    const keys = key.split(".");
    let translation: any = translations[language as keyof typeof translations];
    for (const k of keys) {
      translation = translation[k as keyof typeof translation];
      if (!translation) return key;
    }
    return translation as string;
  };

  return { t };
};
