import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { Container, Main } from 'tsparticles';
import { particleOptionsJSON } from './particlesjs-config'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {
  id = "z";
  @ViewChild('heroContainer')
  div!: ElementRef<HTMLElement>;

  /* or the classic JavaScript object */
  particlesOptions: any = particleOptionsJSON

  catLottie: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_m3lpL4.json',
  };

  dogLottie: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_5JFpAw.json',
  };


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe((e: any) => {
      if (e) {
        console.log(e)
        this.scroll(e)
      }
    })

  }

  ngAfterViewInit(): void {
    // this.div.nativeElement.style.height = '400px'
    console.log(this.div)

  }


  particlesLoaded(container: Container): void {
    console.log(container.canvas.size);
  }

  particlesInit(main: Main): any {
    // main.set('z', this.div)
    console.log(main);
    return
  }

  scroll(el: any) {
    el.scrollIntoView();
  }

}
