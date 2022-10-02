import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, switchMap, exhaustMap, catchError, tap } from 'rxjs/operators';
import * as pjActions from './pages.action';

import { projects } from '../../store/api'
import { HttpClient, HttpParams } from '@angular/common/http';
import { projectsModel } from '../../store/models'


let baseUrl: string = 'http://localhost:1337/api/'

@Injectable()
export class projectEffects {

  constructor(
    private http: HttpClient,
    private actions$: Actions
  ) { }

  loadProjects$ = createEffect(() => this.actions$.pipe(
    ofType(pjActions.retrieveProject),
    exhaustMap(() => {
      return this.http.get<any>(`${baseUrl}jobs`).pipe(
        map((projects) => pjActions.loadedProject(projects.data)),
        catchError((message) => of(pjActions.loadProjectError(message)))
      );
    })
  ))


}
