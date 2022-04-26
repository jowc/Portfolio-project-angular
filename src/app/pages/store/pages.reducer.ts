import { createReducer, on } from '@ngrx/store';
import { projectModel } from 'src/app/store/models';
import * as projectActions from './pages.action';

interface state {
  projects: projectModel[],
  loaded: boolean,
  loading: boolean
}

export const initialState: state = {
  projects: [] as projectModel[],
  loaded: false,
  loading: false
}

export const projectsReducer = createReducer(
  initialState,
  on(projectActions.retrieveProject, (state, ProjectState) => (
    {
      ...state,
      ...ProjectState
    }
  )),
  on(projectActions.addProject, (state, ProjectState) => (
    { ...state, ProjectState }
  )),
  on(projectActions.editProject, (state, ProjectState) => (
    {
      ...state,
      ProjectState
    }
  )),
  on(projectActions.deleteProject, (state, ProjectState) => (
    {
      ...state,
      ProjectState
    }
  )),
)
