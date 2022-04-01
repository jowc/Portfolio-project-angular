import { Component, Input, OnInit } from '@angular/core';
import { projectModel } from 'src/app/store/models';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.scss']
})
export class ProjectsCardComponent implements OnInit {
  @Input() cdata: (projectModel | null) = null;
  loadDescription: boolean = false

  constructor() { }

  ngOnInit(): void {

  }

  checkDes(): void {
    if (this.cdata!.description.length > 50) {
      this.loadDescription = true
    }
  }

}
