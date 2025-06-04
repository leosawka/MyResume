import DOMPurify from "dompurify";
import { useTranslation } from "../../hooks/useTranslation";

const certifications = [
  { id: "course1", entity: "UTN (frba)", link: "#" },
  { id: "course2", entity: "Platzi", link: "#" },
  { id: "course3", entity: "Platzi", link: "#" },
  { id: "course4", entity: "Platzi", link: "#" },
  { id: "course5", entity: "Platzi", link: "#" },
  { id: "course6", entity: "Platzi", link: "#" },
  { id: "course7", entity: "Platzi", link: "#" },
  { id: "course8", entity: "Platzi", link: "#" },
  { id: "course9", entity: "Platzi", link: "#" },
  { id: "course10", entity: "Platzi", link: "#" },
  { id: "course11", entity: "Platzi", link: "#" },
  { id: "course12", entity: "Platzi", link: "#" },
  { id: "course13", entity: "Platzi", link: "#" },
];

export default function Certifications() {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-primary dark:text-white">{DOMPurify.sanitize(t("certifications.title"))}</h2>
      <h2 className="text-2xl mb-4 text-accent-gold dark:text-white">{DOMPurify.sanitize(t("certifications.firstSubtitle"))}</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {certifications.map((certification, index) => (
          <div
            key={index}
            className="p-4 border bg-white dark:bg-secondary border-accent-gold dark:border-accent-silver rounded shadow hover:shadow-lg dark:shadow-lg dark:hover:shadow-gray-700 dark:transition-shadow dark:duration-700"
          >
            <h3 className="text-xl font-bold text-primary dark:text-gray-100">
              {DOMPurify.sanitize(t(`certifications.courses.${certification.id}`))}
            </h3>
            <p className=" text-secondary dark:text-gray-500">
              {DOMPurify.sanitize(t("certifications.issuingEntity"))}: {certification.entity}
            </p>
            <a href={DOMPurify.sanitize(certification.link)} className="text-accent-gold hover:underline">
              {DOMPurify.sanitize(t("certifications.description"))}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
