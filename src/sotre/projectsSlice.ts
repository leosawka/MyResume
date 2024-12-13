import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    { id: 1, name: "Project 1", description: "Descripción breve", link: "#" },
    { id: 2, name: "Project 2", description: "Descripción breve", link: "#" },
  ],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    removeProject: (state, action) => {
      state.projects = state.projects.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addProject, removeProject } = projectsSlice.actions;
export default projectsSlice.reducer;
