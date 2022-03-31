import { Component, OnInit } from '@angular/core';
import { ImageItem, GalleryItem } from 'ng-gallery';
import { map, Observable, of, switchMap } from 'rxjs';
import { imageSlider } from 'src/app/store/api';
import { galleryModel } from 'src/app/store/models';


@Component({
  selector: 'app-gallery-slider',
  templateUrl: './gallery-slider.component.html',
  styleUrls: ['./gallery-slider.component.scss']
})
export class GallerySliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): any { }

}
