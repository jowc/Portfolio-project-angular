import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { share } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false
  activeFragment = this.route.fragment.pipe(share())

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    return this.isOpen = !this.isOpen
  }


}
