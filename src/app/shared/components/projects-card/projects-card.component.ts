import { Component, Input, OnInit } from '@angular/core';
import { projectModel } from 'src/app/store/models';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.scss']
})
export class ProjectsCardComponent implements OnInit {
  @Input() data: (projectModel | null) = null;

  constructor() { }

  ngOnInit(): void {
  }

}
