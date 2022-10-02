import { Component, Input, OnInit } from '@angular/core';
import { projectModel } from 'src/app/store/models';
import { slide, fade, slide2 } from '../../animation';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.scss'],
  animations: [slide, fade, slide2]
})
export class ProjectsCardComponent implements OnInit {
  @Input() cdata: (any) = null;
  loadDescription: boolean = false


  constructor() { }

  ngOnInit(): void {
    // console.log(this.cdata)
  }

  checkDes(): void {
    if (this.cdata!.description.length > 50) {
      this.loadDescription = true
    }
  }

}
