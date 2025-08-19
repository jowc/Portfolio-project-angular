// import { ActionReducerMap } from "@ngrx/store";
import { ActionReducerMap } from "@ngrx/store";
import { projectsReducer, projectState } from '../pages/store/pages.reducer';

export interface AppState {
  projects: projectState
}

export const AppReducer: ActionReducerMap<AppState> = {
  projects: projectsReducer
}
