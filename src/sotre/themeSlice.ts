import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = (): boolean => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") === "dark";
  }
  return false;
};

const initialState = {
  darkMode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;

      if (state.darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
