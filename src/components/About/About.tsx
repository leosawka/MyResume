import { useTranslation } from "../../hooks/useTranslation";
import TiltEffect from "../TiltEffect/TiltEffect";
import imageProfile from "../../assets/image_profile.jpg";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="p-8 bg-background dark:bg-primary text-primary dark:text-gray-300"
    >
      <h2 className="text-3xl font-bold mb-4 text-primary dark:text-white">
        {t("about.title")}
      </h2>
      <div className="flex items-center gap-10">
        <TiltEffect className="w-96 h-96 rounded-full overflow-hidden shadow-lg mx-64 my-48">
            <img
              src={imageProfile}
              alt="profile"
              className="w-full h-full object-cover"
            />
        </TiltEffect>
        <p className="text-lg max-w-xl">{t("about.description")}</p>
      </div>
    </section>
  );
}
