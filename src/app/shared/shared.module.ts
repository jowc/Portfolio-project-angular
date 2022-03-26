import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsCardComponent } from './components/projects-card/projects-card.component';
import { ImageSiderComponent } from './components/image-sider/image-sider.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProjectsCardComponent,
    ImageSiderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProjectsCardComponent,
    ImageSiderComponent
  ]
})
export class SharedModule { }
