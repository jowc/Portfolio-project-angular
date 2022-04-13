import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { projects } from 'src/app/store/api';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getBlogs() {
    return of(projects)
  }
}
