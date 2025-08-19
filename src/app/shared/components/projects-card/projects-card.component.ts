import { Component, Input, OnInit } from '@angular/core';
import { slide, fade, slide2 } from '../../animation';
import { projectModel } from 'src/app/store/models';

@Component({
    selector: 'app-projects-card',
    templateUrl: './projects-card.component.html',
    styleUrls: ['./projects-card.component.scss'],
    animations: [slide, fade, slide2],
    standalone: false
})
export class ProjectsCardComponent implements OnInit {
  @Input({ required: true }) cdata!: projectModel;
  loadDescription: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.cdata)
  }

  checkDes(): void {
    if (this.cdata!.description.length > 50) {
      this.loadDescription = true;
    }
  }
}
