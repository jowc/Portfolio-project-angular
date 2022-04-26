import { createAction, props } from '@ngrx/store';
import { projectModel } from 'src/app/store/models';



export const addProject = createAction('[Project Component] add Project', props<{ project: projectModel }>())
export const editProject = createAction('[Project Component] edit Project', props<{ project: projectModel }>())
export const deleteProject = createAction('[Project Component] delete Project')
export const retrieveProject = createAction('[Project component] retrieve Projects')
export const loadedProject = createAction('[Project component] Loaded Projects')
export const errorProject = createAction('[Project component] error Projects')

