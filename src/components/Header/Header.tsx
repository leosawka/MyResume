import ToggleDarkMode from "../ToogleDarkMode/ToggleDarkMode";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "../../hooks/useTranslation";

export default function Header() {

  const { t } = useTranslation();

  return (
    <header className="flex justify-between items-center p-4 bg-header-background">
      <nav className="bg-transparent flex items-center space-x-4">
        <img src="/LS.svg" alt="Logo" className="w-10 h-10"/>
        <h1 className="text-2xl font-bold text-accent-gold">{t("header.logo")}</h1>
      </nav>
      <nav className="bg-transparent">
        <ul className="flex items-center space-x-4">
          <li>
            <a href="#about" className="text-accent-silver hover:text-accent-gold" style={{fontFamily: "'Lobster', serif"}}>
              {String(t("header.about"))}
            </a>
          </li>
          <li>
            <a href="#projects" className="text-accent-silver hover:text-accent-gold" style={{fontFamily: "'Lobster', serif"}}>
              {String(t("header.projects"))}
            </a>
          </li>
          <li>
            <a href="#certifications" className="text-accent-silver hover:text-accent-gold" style={{fontFamily: "'Lobster', serif"}}>
              {String(t("header.certifications"))}
            </a>
          </li>
          <li>
            <a href="#contact" className="text-accent-silver hover:text-accent-gold" style={{fontFamily: "'Lobster', serif"}}>
              {String(t("header.contact"))}
            </a>
          </li>
          <li>
            <a href="#info" className="text-accent-silver hover:text-accent-gold" style={{fontFamily: "'Lobster', serif"}}>
              {String(t("aditionalInfo.title"))}
            </a>
          </li>
        </ul>
      </nav>
      <nav className="flex items-center space-x-4 bg-transparent">
        <ToggleDarkMode />
        <LanguageSelector />
      </nav>
    </header>
  );
}
