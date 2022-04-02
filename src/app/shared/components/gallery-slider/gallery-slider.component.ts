import { Component, OnInit, ViewChild } from '@angular/core';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { imageSlider } from 'src/app/store/api';
import { galleryModel } from 'src/app/store/models';

import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
// import { PhotoSwipeLightbox } from 'photoswipe/lightbox';

import SwiperCore, { SwiperOptions, Swiper, Virtual, EffectFade, Zoom, Navigation } from 'swiper';
import { SwiperComponent } from 'swiper/angular';


// install Swiper modules
SwiperCore.use([Virtual, EffectFade, Zoom, Navigation]);

@Component({
  selector: 'app-gallery-slider',
  templateUrl: './gallery-slider.component.html',
  styleUrls: ['./gallery-slider.component.scss']
})
export class GallerySliderComponent implements OnInit {
  slides?: galleryModel[]
  @ViewChild('swiper', { static: false }) swiper!: SwiperComponent;

  config: SwiperOptions = {
    // navigation: true,
    effect: 'slide',
    grabCursor: true,
    roundLengths: true,
    watchOverflow: false,
    autoplay: true,
    zoom: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  }

  // config1: SwiperOptions = {
  //   slidesPerView: 2,
  //   spaceBetween: 5,
  //   effect: 'fade'
  // };

  constructor() { }

  ngOnInit(): any {
    this.fetchImages()
  }

  fetchImages() {
    of(imageSlider).pipe(
      tap(res => {
        this.slides = res
      })
    ).subscribe().unsubscribe()
  }

}
