import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SwiperModule } from 'swiper/angular';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsCardComponent } from './components/projects-card/projects-card.component';
import { ImageSiderComponent } from './components/image-sider/image-sider.component';
import { GallerySliderComponent } from './components/gallery-slider/gallery-slider.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProjectsCardComponent,
    ImageSiderComponent,
    GallerySliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProjectsCardComponent,
    ImageSiderComponent,
    GallerySliderComponent
  ],
  providers: []
})
export class SharedModule { }
