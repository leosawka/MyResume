import DOMPurify from "dompurify";
import { useTranslation } from "../../hooks/useTranslation";

const projects = [
  { name: " Bristol-Myers Squibb", description: "Delivered high-quality enhancements for a React-TypeScript web application", link: "#" },
  { name: "NBCUniversal", description: "Maintained a robust Azure-based support platform, ensuring seamless operation and issue resolution.", link: "#" },
  { name: "Pricewaterhousecoopers", description: "Led the migration of a SharePoint database to a scalable platform, improving efficiency and usability.", link: "#" },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="p-8 rounded-xl dark:rounded-xl bg-white dark:bg-secondary">
      <h2 className="text-3xl font-bold mb-4 dark:text-white">{DOMPurify.sanitize(t("projects.title"))}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border border-accent-gold dark:border-accent-silver rounded shadow hover:shadow-lg dark:shadow-lg dark:hover:shadow-gray-700 dark:transition-shadow dark:duration-700">
            <h3 className="text-xl font-bold dark:text-gray-100">{project.name}</h3>
            <p className="dark:text-gray-500">{project.description}</p>
            <a href={project.link} className="text-accent-gold hover:underline">{DOMPurify.sanitize(t("projects.description"))}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
