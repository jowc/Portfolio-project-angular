import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Container, Main } from 'tsparticles';
import { particleOptionsJSON } from './particlesjs-config'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  id = "z";
  @ViewChild('heroContainer')
  div!: ElementRef<HTMLElement>;

  /* or the classic JavaScript object */
  particlesOptions: any = particleOptionsJSON


  constructor() { }

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

}
