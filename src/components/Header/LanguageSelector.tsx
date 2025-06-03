import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../sotre/hooks";
import { setLanguage } from "../../sotre/languageSlice";

const languages = [
  { code: "en", label: "English", flag: "/English_language.svg" },
  { code: "es", label: "Español", flag: "/Spanish_language.svg" },
];

function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const language = useAppSelector((state) => state.language.language);
  const dispatch = useAppDispatch();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (langCode: string) => {
    dispatch(setLanguage(langCode));
    setIsOpen(false)
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center p-2 border rounded bg-gray-200 dark:text-accent-silver dark:bg-gray-700">
        <img
          src={languages.find((lang) => lang.code === language)?.flag}
          alt={language}
          className="w-6 h-4 mr-2"
        />
        {languages.find((lang) => lang.code === language)?.label}
      </button>
      {isOpen && (
        <ul className="absolute mt-2 w-full bg-white dark:bg-gray-800 shadow-lg border rounded">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center p-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 ${
                lang.code === language ? "bg-gray-300 dark:bg-gray-700 dark:text-accent-silver" : ""}`}>
              <img src={lang.flag} alt={lang.label} className="w-6 h-4 mr-2" />
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;
