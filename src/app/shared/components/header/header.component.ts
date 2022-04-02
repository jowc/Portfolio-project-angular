import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { share } from 'rxjs';
import { gsap } from 'gsap';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isOpen: boolean = false
  activeFragment = this.route.fragment.pipe(share())
  // isActive: (string | null) = null
  tl = gsap.timeline({ paused: true })
  @ViewChild('heroContainer') hero!: ElementRef<HTMLDivElement>
  @ViewChild('Project') project!: ElementRef<HTMLDivElement>
  @ViewChild(HomeComponent) homeComponent!: HomeComponent


  constructor(public route: ActivatedRoute, private router: Router, private scroller: ViewportScroller) { }

  ngOnInit(): void {
    // this.route.fragment.subscribe(e => this.isActive = e)
    this.autoToggle()
  }

  ngAfterViewInit(): void {
    this.handleScroll()
  }

  toggleMenu() {
    this.isOpen = !this.isOpen
    this.tl.to("nav", { x: 100, duration: 1 });
  }

  autoToggle() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let fragment = val.url.replace('/#', '')
        this.isOpen = false
      }
    });
  }

  scroll(el: any) {
    el.scrollIntoView();
  }

  handleScroll() {
    this.route.fragment.subscribe((e: any) => {
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
