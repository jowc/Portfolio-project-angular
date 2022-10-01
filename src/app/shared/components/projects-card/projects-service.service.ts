import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface meta {
  pagination: {
    page: number,
    pageCount: number,
    pageSize: number,
    total: number
  }
}

interface projects {
  attributes: {
    Description: string,
    Featured: boolean,
    Portfolio_link: string,
    Title: string,
    createdAt: string,
    publishedAt: string,
    updatedAt: string
  },
  id: number
}

export interface projectsModel {
  data: projects[],
  meta: meta
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseUrl: string = 'http://localhost:1337/api/'

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get<projectsModel>(`${this.baseUrl}jobs`)
  }
}
