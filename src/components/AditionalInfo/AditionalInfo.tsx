import { useTranslation } from "../../hooks/useTranslation";

export default function AditionalInfo() {
  const { t } = useTranslation();

  return (
    <section id="info" className="p-8 bg-background text-primary dark:bg-primary dark:text-white">
      <h3 className="text-l">
        {t("aditionalInfo.firstInfo")}
        <div>
          <span style={{fontFamily: "Roboto"}} className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">React</span>
          <span style={{fontFamily: "Roboto"}} className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Redux</span>
          <span style={{fontFamily: "Roboto"}} className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">TypeScript</span>
          <span style={{fontFamily: "Roboto"}} className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">JavaScript</span>
          <span style={{fontFamily: "Roboto"}} className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Tailwind</span>
          <span style={{fontFamily: "Roboto"}} className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 ring-gray-200 ring-1 dark:ring-0">GitHub</span>
          <span style={{fontFamily: "Roboto"}} className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300">HTML 5</span>
          <span style={{fontFamily: "Roboto"}} className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">CSS</span>
        </div>
      </h3>
      <p className="text-xs text-right">Copyright (c) 2025 Jairo Leonardo Olivera Sawka</p>
    </section>
  );
}
