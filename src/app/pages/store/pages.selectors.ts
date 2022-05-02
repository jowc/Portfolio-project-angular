import { createSelector, createFeatureSelector } from '@ngrx/store';
import { projectModel } from 'src/app/store/models';

export const selectProjects = createFeatureSelector<ReadonlyArray<projectModel>>('projects');

// export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectProjectCollection = createSelector(
  selectProjects,
  (projects) => projects
);
