import { projectsReducer, pagesReducer } from "../pages/store/pages.reducer";
import { projectModel } from "./models";

export interface count {
    score: number
}

export interface AppState {
    count: count,
    projects: projectModel
}

export const AppReducer = {
    count: pagesReducer,
    projects: projectsReducer
}