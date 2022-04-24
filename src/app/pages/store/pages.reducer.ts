import { createReducer, on } from '@ngrx/store';
import { projects } from 'src/app/store/api';
import { projectModel } from 'src/app/store/models';
import * as projectActions from './pages.action';

export const initialState: (number | null) = 0;

export const pagesReducer = createReducer(
    initialState,
    on(projectActions.add, (state) => state + 1),
    on(projectActions.edit, (state) => state - 1),
    on(projectActions.reset, (state) => 0)
);

const ProjectData: projectModel[] = [{
    link: 'https://joecdev.com',
    img: 'https://res.cloudinary.com/dt8umwrcb/image/upload/v1648926926/portfolio/joecdev_seegbk.jpg',
    stacks: ['Strapi', 'Angular', 'Tailwind CSS'],
    description: "My portfolio website. It's the site you're looking at currently. It's developed with Angular as the front-end and StrapiJs as the headless CMS backend."
}]

export const initialState2 = {
    projects: [] as projectModel[],
}

export const projectsReducer = createReducer(
    initialState2,
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