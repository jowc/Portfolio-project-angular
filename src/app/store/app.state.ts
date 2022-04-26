// import { ActionReducerMap } from "@ngrx/store";
import { projectsReducer } from "../pages/store/pages.reducer";
import { projectModel } from "./models";

export interface AppState {
  projects: ReadonlyArray<projectModel[]>
}

export const AppReducer = {
  "projects": projectsReducer
}
