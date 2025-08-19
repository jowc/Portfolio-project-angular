import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
} from '@angular/core/testing';

import { ProjectsCardComponent } from './projects-card.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../shared.module';
import { projects } from 'src/app/store/api';

describe('ProjectsCardComponent', () => {
  let component: ProjectsCardComponent;
  let fixture: ComponentFixture<ProjectsCardComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsCardComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    // instantiate data
    component.cdata = projects[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('input must not be empty', () => {
    expect(component.cdata).not.toBeNull();
  });

  it('show less than 54 characters on load', fakeAsync(() => {
    let readMoreContent = el.query(
      By.css('[data-test-id="read-more-content"] span')
    );

    expect(
      readMoreContent?.nativeElement?.textContent?.length
    ).toBeLessThanOrEqual(53);
  }));

  it('show more content on read more click', fakeAsync(() => {
    const readMoreBtn = el.query(By.css('[data-test-id="read-more"] button'));
    let readMoreContent = el.query(
      By.css('[data-test-id="read-more-content"] span')
    );

    (readMoreBtn?.nativeElement as HTMLDivElement)?.click();
    flush();
    fixture.detectChanges();

    readMoreContent = el.query(
      By.css('[data-test-id="read-more-content"] span')
    );

    expect(
      readMoreContent?.nativeElement?.textContent?.length
    ).toBeGreaterThanOrEqual(54);
  }));
});
