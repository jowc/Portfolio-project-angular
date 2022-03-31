import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { imageSlider } from 'src/app/store/api';
import { gsap } from 'gsap';
import { galleryModel } from 'src/app/store/models';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-sider.component.html',
  styleUrls: ['./image-sider.component.scss']
})
export class ImageSiderComponent implements OnInit, AfterViewInit {

  @ViewChild('carouselContainer', { static: true }) carouselContainer!: ElementRef<HTMLDivElement>
  @ViewChild('carousel', { static: true }) carousel!: ElementRef<HTMLDivElement>
  imgs: galleryModel[] = imageSlider

  baseZindex: number = 20
  scaleRatio: number = 10
  middleIndex!: number
  isAnimating: boolean = false
  prevSlideFinished: boolean = false

  constructor() { }

  ngOnInit(): void {
    // console.log(this.imgs)
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
      this.positionRightNodes(this.middleIndex)

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

  positionRightNodes(midIndex: number) {
    const carouselLength = this.carousel.nativeElement.children.length
    let countForward = 0
    let tempZIndex = this.baseZindex
    for (let i = midIndex; i < carouselLength; i++) {
      countForward++
      tempZIndex -= 1
      const rightNodes = this.carousel.nativeElement.children[i] as HTMLDivElement
      if (rightNodes) {
        gsap.to(rightNodes, {
          duration: 0,
          zIndex: tempZIndex,
          x: 80 * countForward,
          scale: `0.${this.scaleRatio - countForward}`
        })
      }
    }
  }

  moveLeftSideAnimation() {
    //found main element move this to the right side and decrease zIndex
    for (let i = 0; i <= this.middleIndex; i++) {
      const element = this.carousel.nativeElement.children[i] as HTMLDivElement
      const prevElement = this.carousel.nativeElement.children[i - 1] as HTMLDivElement
      //getting current style values
      const currentTranslateXValue = gsap.getProperty(element, 'translateX')
      const currentZIndex = gsap.getProperty(element, 'zIndex')
      const currentScale = gsap.getProperty(element, 'scale')

      if (currentZIndex === this.baseZindex) {
        // found main element, move this to the right side and decrease zIndex
        gsap.to(element, {
          duration: 0.3,
          // zIndex: typeof currentZIndex === 'number' && currentZIndex - 1,
          x: 80,
          scale: '0.9'
        })
        // update prvious element zIndex to main
        gsap.to(prevElement, {
          duration: 0.3,
          zIndex: this.baseZindex
        })
        // update middle index
        this.middleIndex = 1
      } else {
        // move all remaining elements to left
        gsap.to(element, {
          duration: 0.4,
          // zIndex: typeof currentZIndex === 'number' && currentZIndex + 1,
          // x: typeof currentTranslateXValue === "number" && currentTranslateXValue + 80,
          // scale: typeof currentScale === "number" && parseFloat((currentScale + 0.1).toFixed(1))

        })
      }

    }
  }

  prev() {
    return
  }

  next() {
    this.isAnimating = true
    this.prevSlideFinished = false

    //dynamically changing image position
  }

}
