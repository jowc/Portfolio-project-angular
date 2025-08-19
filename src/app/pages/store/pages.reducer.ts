import { createReducer, on } from '@ngrx/store';
import { projectModel, StatusEnum } from 'src/app/store/models';
import * as projectActions from './pages.action';

export interface projectState {
  projects: projectModel[];
  status: StatusEnum;
  error: string | null;
}

export const initialState: projectState = {
  projects: [] as projectModel[],
  status: StatusEnum.PENDING,
  error: null,
};

export const projectsReducer = createReducer(
  initialState,
  on(projectActions.retrieveProject, (state) => ({
    ...state,
    status: StatusEnum.LOADING,
    error: null,
  })),

  on(projectActions.loadedProject, (state, { projects }) => ({
    ...state,
    projects: [...projects],
    status: StatusEnum.SUCCESS,
    error: null,
  })),
  on(projectActions.addProject, (state, { project }) => ({
    ...state,
    projects: [...state.projects, project],
  })),
  on(projectActions.editProject, (state, ProjectState) => ({
    ...state,
    ProjectState,
  })),
  on(projectActions.deleteProject, (state, ProjectState) => ({
    ...state,
    ProjectState,
  })),
  on(projectActions.loadProjectError, (state, { message }) => ({
    ...state,
    status: StatusEnum.ERROR,
    error: message,
  }))
);
