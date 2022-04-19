import { createReducer, on } from '@ngrx/store';
import { projects } from 'src/app/store/api';
import { projectModel } from 'src/app/store/models';
import * as blogActions from './pages.action';

export const initialState: (number | null) = 0;

export let blogState: projectModel[] = []

export const pagesReducer = createReducer(
    initialState,
    on(blogActions.add, (state) => state + 1),
    on(blogActions.edit, (state) => state - 1),
    on(blogActions.reset, (state) => 0)
);

export const blogsReducer = createReducer(
    blogState,
    on(blogActions.retrieveBlog, (state, blogState) => (
        {
            ...state,
            ...blogState
        }
    )),
    on(blogActions.addBlog, (state, blogState) => (
        { ...state, blogState }
    )),
    on(blogActions.editBlog, (state, blogState) => (
        {
            ...state,
            blogState
        }
    )),
    on(blogActions.deleteBlog, (state, blogState) => (
        {
            ...state,
            blogState
        }
    )),
)