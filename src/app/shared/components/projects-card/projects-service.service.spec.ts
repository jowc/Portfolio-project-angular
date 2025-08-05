import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
