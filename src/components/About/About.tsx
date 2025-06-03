import { useTranslation } from "../../hooks/useTranslation";
import TiltEffect from "../TiltEffect/TiltEffect";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="p-8 bg-background dark:bg-primary dark:text-gray-300">
      <h2 className="text-3xl font-bold mb-4 dark:text-white">{t("about.title")}</h2>
      <div className="flex items-center">
        <TiltEffect className="w-full h-120 rounded-full mt-10 ml-20 mb-4">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHZT1Nq5ncR5Q/profile-displayphoto-shrink_800_800/B4DZOceIYUHgAc-/0/1733496965288?e=1754524800&v=beta&t=z47uoJgFePB3iqxejdndoEnvSzsq130x8PRoajgYxZM"
            alt="profile"
            className="w-full h-full object-cover transition-transform duration-200"
          />
        </TiltEffect>
        <p className="text-lg px-44">{t("about.description")}</p>
      </div>
    </section>
  );
}
