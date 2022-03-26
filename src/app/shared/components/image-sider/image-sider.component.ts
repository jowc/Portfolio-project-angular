import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { imageSlider } from 'src/app/store/api';
import { gsap } from 'gsap';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-sider.component.html',
  styleUrls: ['./image-sider.component.scss']
})
export class ImageSiderComponent implements OnInit, AfterViewInit {

  @ViewChild('carouselContainer', { static: true }) carouselContainer!: ElementRef<HTMLDivElement>
  @ViewChild('carousel', { static: true }) carousel!: ElementRef<HTMLDivElement>
  imgs: string[] = imageSlider

  baseZindex: number = 0
  scaleRatio: number = 10
  middleIndex?: number

  constructor() { }

  ngOnInit(): void {
    console.log(this.imgs)
  }

  ngAfterViewInit(): void {
    this.initCarousel()
  }

  initCarousel(): void {
    if (this.carousel && this.carousel.nativeElement) {
      gsap.to(this.carousel.nativeElement.children, {
        duration: 0,
        top: '40%',
        left: ' 50%',
        transform: 'translate(-50%, -50%)'
      })

      this.middleIndex = Math.ceil(this.carousel.nativeElement.childNodes.length / 2)
      const midElement = this.carousel.nativeElement.children[this.middleIndex - 1]
      gsap.to(midElement, {
        duration: 0,
        zIndex: this.baseZindex,
        width: '650px'
      })
      this.positionLeftNodes(this.middleIndex)

    }
  }

  positionLeftNodes(midIndex: number) {
    let tempZIndex = 0
    let countForward = 0
    for (let i = midIndex - 1; i >= 0; i--) {
      tempZIndex -= 1
      countForward++
      const leftNodes = this.carousel.nativeElement.children[i - 1]
      if (leftNodes) {
        gsap.to(leftNodes, {
          duration: 0,
          zIndex: tempZIndex,
          x: -(80 * countForward),
          scale: `0.${this.scaleRatio - countForward}`
        })
      }
    }
  }

  prev() {
    return
  }

  next() {
    return
  }

}
