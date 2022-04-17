import { createAction, props } from '@ngrx/store';
import { projectModel } from 'src/app/store/models';

export const add = createAction('[pages Component] add');
export const edit = createAction('[pages Component] edit');
export const reset = createAction('[pages Component] Reset');



export const addBlog = createAction('[blog Component] add blog', props<projectModel>())
export const editBlog = createAction('[blog Component] edit blog', props<projectModel>())
export const deleteBlog = createAction('[blog Component] delete blog')
export const retrieveBlog = createAction('[blog component retrieve blogs]')
