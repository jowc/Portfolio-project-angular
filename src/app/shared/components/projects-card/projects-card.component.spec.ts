import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCardComponent } from './projects-card.component';

describe('ProjectsCardComponent', () => {
  let component: ProjectsCardComponent;
  let fixture: ComponentFixture<ProjectsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
