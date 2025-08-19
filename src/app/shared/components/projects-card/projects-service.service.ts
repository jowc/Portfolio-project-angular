import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

interface meta {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}

interface projects {
  attributes: {
    Description: string;
    Featured: boolean;
    Portfolio_link: string;
    Title: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
  id: number;
}

export interface ProjectsModel {
  data: projects[];
  meta: meta;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getProjects() {
    const params = new HttpParams({
      fromObject: {
        user: 1,
      },
    });
    return this.http
      .get<ProjectsModel>(`${environment.baseUrl}jobs`, {
        params,
      })
      .pipe(
        switchMap(() => this.http.get(`${environment.baseUrl}job`, { params }))
      );
  }
}
