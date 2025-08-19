import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { SharedModule } from '../../shared.module';
import { provideRouter } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [
        // add test router module
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  it('show header menu when clicked', () => {
    const toggleBtn = el.query(By.css('[data-test-id="menu-toggle"]'));
    let dropMenu = el.query(By.css('[data-test-id="header-drop-menu"]'));
    expect(component.isOpen).toBe(false);
    expect(dropMenu?.nativeElement).toBeFalsy();

    (toggleBtn.nativeElement as HTMLDivElement)?.click();
    fixture.detectChanges();
    dropMenu = el.query(By.css('[data-test-id="header-drop-menu"]'));
    expect(component.isOpen).toBe(true);
    expect(dropMenu?.nativeElement).toBeTruthy();
  });
});
