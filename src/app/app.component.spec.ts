import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have header component', () => {
    const headerComponent = el.query(By.css('app-header'));
    expect(headerComponent).toBeTruthy();
  });

  it('should have footer component', () => {
    const headerComponent = el.query(By.css('app-footer'));
    expect(headerComponent).toBeTruthy();
  });

  it('should have router outlet', () => {
    const headerComponent = el.query(By.css('router-outlet'));
    expect(headerComponent).toBeTruthy();
  });
});
