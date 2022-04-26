import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { addProject, retrieveProject } from './pages.action';

import { projects } from '../../store/api'

@Injectable()
export class MovieEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(retrieveProject),
    // switchMap(of(projects).pipe(
    //   map(projects => addProject(projects)),
    //   catchError(() => EMPTY)
    // ))
  )
  );

  constructor(
    private actions$: Actions,
  ) { }
}
