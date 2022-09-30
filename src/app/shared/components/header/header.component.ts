import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';


import { share, take } from 'rxjs';
import { gsap } from 'gsap';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { fade } from '../../animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fade]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isOpen: boolean = false
  activeFragment = this.route.fragment.pipe(share())
  // isActive: (string | null) = null
  tl = gsap.timeline({ paused: true })
  @ViewChild('heroContainer') hero!: ElementRef<HTMLDivElement>
  @ViewChild('Project') project!: ElementRef<HTMLDivElement>
  @ViewChild(HomeComponent) homeComponent!: HomeComponent


  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private scroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    // this.route.fragment.subscribe(e => this.isActive = e)
    this.autoToggle()
  }

  ngAfterViewInit(): void {
  }

  toggleMenu() {
    this.isOpen = !this.isOpen
    this.tl.to("nav", { x: 100, duration: 1 });
  }

  autoToggle() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        // let fragment = val.url.replace('/#', '')
        this.isOpen = false
        // this.handleScroll()
      }
    });
  }

  onClick(elementId: string): void {
    this.scroller.scrollToAnchor(elementId);
  }


  handleScroll() {
    this.route.fragment.pipe(take(1)).subscribe((e: any) => {
      console.log(e)
      if (e) {
        this.scroller.scrollToAnchor(e);

        // switch (e) {
        //   case 'heroContainer':
        //     this.hero.nativeElement.scrollIntoView()
        //     this.scroller.scrollToAnchor(e);

        //     // this.homeComponent.heroEl.nativeElement.scrollIntoView()
        //     break;

        //   case 'Project':
        //     this.project.nativeElement.scrollIntoView()
        //     // this.homeComponent.projectEl.nativeElement.scrollIntoView()
        //     break;

        //   default:
        //     this.homeComponent.heroEl.nativeElement.scrollIntoView()
        //     break;
        // }

      }
    })
  }

}
