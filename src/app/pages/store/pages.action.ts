import { createAction, props } from '@ngrx/store';
import { projectModel } from 'src/app/store/models';

export const addProject = createAction(
  '[Project Component] add Project',
  (project: projectModel) => ({ project })
)
export const editProject = createAction(
  '[Project Component] edit Project',
  (project: projectModel) => ({ project })
)

export const deleteProject = createAction('[Project Component] delete Project')

export const retrieveProject = createAction(
  '[Project component] retrieve Projects')

export const loadedProject = createAction(
  '[Project component] Loaded Projects',
  (projects: ReadonlyArray<projectModel>) => ({ projects })
)
export const loadProjectError = createAction(
  '[Project component] load Projects error',
  (message: string) => ({ message })
)

