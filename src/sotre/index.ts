import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import languageReducer from "./languageSlice";
import projectsReducer from "./projectsSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
