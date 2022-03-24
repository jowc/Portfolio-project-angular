import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsCardComponent } from './components/projects-card/projects-card.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProjectsCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProjectsCardComponent
  ]
})
export class SharedModule { }
