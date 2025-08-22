import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

import { share, take } from 'rxjs';
import { gsap } from 'gsap';

import { slide } from '../../animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [slide],
  standalone: false,
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isOpen: boolean = false;
  activeFragment = this.route.fragment.pipe(share());
  // isActive: (string | null) = null
  tl = gsap.timeline({ paused: true });

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private scroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    // this.route.fragment.subscribe(e => this.isActive = e)
    this.autoToggle();
  }

  ngAfterViewInit(): void {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.tl.to('nav', { x: 100, duration: 1 });
  }

  autoToggle() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        // let fragment = val.url.replace('/#', '')
        this.isOpen = false;
        // this.handleScroll()
      }
    });
  }
}
