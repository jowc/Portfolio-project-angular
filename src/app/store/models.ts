export interface projectModel {
  link: string,
  img: string,
  stacks: string[],
  description: string,
}

export interface galleryModel {
  url: string
}

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

export class cForm {
  constructor(
    private fullName: string,
    private email: string,
    private message: string
  ) { }
}
