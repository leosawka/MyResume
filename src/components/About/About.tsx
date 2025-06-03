import { useTranslation } from "../../hooks/useTranslation";
import TiltEffect from "../TiltEffect/TiltEffect";
import imageProfile from "../../assets/image_profile.jpg";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="p-8 bg-background dark:bg-primary text-primary dark:text-gray-300">
      <h2 className="text-3xl font-bold mb-4 text-primary dark:text-white">{t("about.title")}</h2>
      <div className="flex items-center">
        <TiltEffect className="w-full h-120 rounded-full mt-10 ml-20 mb-4">
          <img
            src={imageProfile}
            alt="profile"
            className="w-full h-full object-cover transition-transform duration-200"
          />
        </TiltEffect>
        <p className="text-lg px-44">{t("about.description")}</p>
      </div>
    </section>
  );
}
