import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GalleryModule } from 'ng-gallery';
import { GALLERY_CONFIG } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { LIGHTBOX_CONFIG } from 'ng-gallery/lightbox';

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
    GalleryModule,
    LightboxModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProjectsCardComponent,
    ImageSiderComponent,
    GallerySliderComponent
  ],
  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
        imageSize: 'cover'
      }
    },
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        keyboardShortcuts: false
      }
    }

  ]
})
export class SharedModule { }
