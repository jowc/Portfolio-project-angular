import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { share } from 'rxjs';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false
  activeFragment = this.route.fragment.pipe(share())
  // isActive: (string | null) = null
  tl = gsap.timeline({ paused: true })

  constructor(public route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.route.fragment.subscribe(e => this.isActive = e)
    this.autoToggle()
  }

  toggleMenu() {
    this.isOpen = !this.isOpen
    this.tl.to("nav", { x: 100, duration: 1 });
  }

  autoToggle() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.isOpen = false
      }
    });
  }

}
