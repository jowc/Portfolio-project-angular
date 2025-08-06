import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Github, linkedIn, and Twitter links', () => {
    const socialLinks = el.queryAll(By.css('.sMedia a'));

    const links = socialLinks.map((item) => item.nativeElement?.href).join(',');

    expect(links).toBe(
      'https://github.com/jowc,https://www.linkedin.com/in/ojiofor-chikeme/,https://twitter.com/ojiofor_j'
    );
  });
});
