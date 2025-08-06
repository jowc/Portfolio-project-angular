import { ProjectsModel } from "../projects-service.service";


const MockProjects: ProjectsModel = {
  data: [
    {
      id: 1,
      attributes: {
        Title: 'Project 1',
        Description: 'Description for Project 1',
        Portfolio_link: 'https://example.com/project1',
        Featured: true,
        createdAt: '2023-01-01',
        publishedAt: '2023-01-01',
        updatedAt: '2023-01-01',
      },
    },
    {
      id: 2,
      attributes: {
        Title: 'Project 2',
        Description: 'Description for Project 2',
        Portfolio_link: 'https://example.com/project2',
        Featured: false,
        createdAt: '2023-01-01',
        publishedAt: '2023-01-01',
        updatedAt: '2023-01-01',
      },
    },
    {
      id: 3,
      attributes: {
        Title: 'Project 3',
        Description: 'Description for Project 3',
        Portfolio_link: 'https://example.com/project3',
        Featured: true,
        createdAt: '2023-01-01',
        publishedAt: '2023-01-01',
        updatedAt: '2023-01-01',
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageCount: 1,
      pageSize: 10,
      total: 3,
    },
  },
};

export default MockProjects;
