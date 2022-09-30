// import { ActionReducerMap } from "@ngrx/store";
import { projectsReducer, projectState } from "../pages/store/pages.reducer";
import { projectModel } from "./models";

export interface AppState {
  projects: projectState
}

export const AppReducer = {
  "projects": projectsReducer
}
