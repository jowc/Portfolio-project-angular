import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';

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
    GallerySliderComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    SwiperModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProjectsCardComponent,
    ImageSiderComponent,
    GallerySliderComponent,
  ],
  providers: [],
})
export class SharedModule {}
