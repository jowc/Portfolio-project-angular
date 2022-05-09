import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, switchMap, exhaustMap, catchError } from 'rxjs/operators';
import { loadedProject, loadProjectError, retrieveProject } from './pages.action';

import { projects } from '../../store/api'

@Injectable()
export class projectEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(retrieveProject),
    exhaustMap(() => {
      return of(projects).pipe(
        map((projects) => loadedProject(projects)),
        catchError((message) => of(loadProjectError(message)))
      );
    })
  ))

  constructor(
    private actions$: Actions
  ) { }
}
