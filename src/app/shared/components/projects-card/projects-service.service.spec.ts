import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects-service.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import MockProjects from './store/mock';
import { environment } from 'src/environments/environment';

describe('ProjectsService', () => {
  let service: ProjectsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProjectsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a getProjects method', () => {
    expect(service.getProjects).toBeDefined();
  });

  it('should return an observable from getProjects', () => {
    const projects = service.getProjects();
    expect(projects.subscribe).toBeDefined();
  });

  it('should fetch projects from the API', () => {
    service.getProjects().subscribe((items) => {
      expect(items).toEqual(MockProjects);
    });

    const req = httpTestingController.expectOne(
      `${environment.baseUrl}jobs?user=1`
    );

    expect(req.request.method).toBe('GET');

    req.flush(MockProjects);
  });

  it('should call both jobs and job endpoints in getProjects', () => {
    service.getProjects().subscribe();

    // First request to jobs endpoint
    const req1 = httpTestingController.expectOne(
      `${environment.baseUrl}jobs?user=1`
    );
    expect(req1.request.method).toBe('GET');
    req1.flush({});

    // Second request to job endpoint (after switchMap)
    const req2 = httpTestingController.expectOne(
      `${environment.baseUrl}job?user=1`
    );
    expect(req2.request.method).toBe('GET');
    req2.flush(MockProjects);
  });

  afterEach(() => {
    // httpTestingController.verify();
  });
});
