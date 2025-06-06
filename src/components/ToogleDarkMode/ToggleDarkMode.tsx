import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../sotre/hooks";
import { toggleTheme } from "../../sotre/themeSlice";

function ToggleDarkMode() {
  const darkMode = useAppSelector(
    (state: { theme: { darkMode: boolean } }) => state.theme.darkMode
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        onClick={() => dispatch(toggleTheme())}
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={darkMode}
        readOnly
      />
      <img src="/sun.svg" alt="Light mode" />
      <div className="relative w-11 h-6 bg-accent-silver peer-focus:outline-none rounded-full peer dark:bg-accent-silver peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-accent-gold after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-accent-gold dark:after:bg-accent-silver after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-accent-silver dark:peer-checked:bg-accent-gold"></div>
      <span className="ms-0 text-sm font-medium text-gray-300">
        <img src="/moon.svg" alt="Dark mode" />
      </span>
    </label>
  );
}

export default ToggleDarkMode;
