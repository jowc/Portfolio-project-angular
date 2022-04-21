import { createAction, props } from '@ngrx/store';
import { projectModel } from 'src/app/store/models';

export const add = createAction('[pages Component] add');
export const edit = createAction('[pages Component] edit');
export const reset = createAction('[pages Component] Reset');



export const addProject = createAction('[Project Component] add Project', props<projectModel>())
export const editProject = createAction('[Project Component] edit Project', props<projectModel>())
export const deleteProject = createAction('[Project Component] delete Project')
export const retrieveProject = createAction('[Project component retrieve Projects]')
