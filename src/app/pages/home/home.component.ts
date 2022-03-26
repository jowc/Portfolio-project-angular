import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { BehaviorSubject, map, Observable, of, Subscription, tap } from 'rxjs';
import { projects } from 'src/app/store/api';
import { projectModel } from 'src/app/store/models';
import { Container, Main } from 'tsparticles';
import { particleOptionsJSON } from './particlesjs-config'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  id = "z";
  @ViewChild('heroContainer')
  div!: ElementRef<HTMLElement>;
  projects!: projectModel[];
  projectData!: projectModel[];
  projectEnd: boolean = false


  /* or the classic JavaScript object */
  particlesOptions: any = particleOptionsJSON

  catLottie: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_m3lpL4.json',
  };

  catMaskLottie: AnimationOptions = {
    path: 'https://assets3.lottiefiles.com/packages/lf20_sDO0PX.json',
  };

  dogLottie: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_5JFpAw.json',
  };


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe((e: any) => {
      if (e) {
        this.scroll(e)
      }
    })

    this.getProjects()
  }

  ngOnDestroy(): void {
    // this.projects.unsubscribe()
  }

  ngAfterViewInit(): void {
    // this.div.nativeElement.style.height = '400px'
    console.log(this.div)

  }


  particlesLoaded(container: Container): void {
    // console.log(container.canvas.size);
  }

  particlesInit(main: Main): any {
    // main.set('z', this.div)
    // console.log(main);
    return
  }

  scroll(el: any) {
    el.scrollIntoView();
  }

  getProjects() {
    return of(projects).subscribe(data => {
      this.projects = data.slice(0, 3)
      this.projectData = data
    }).unsubscribe()
  }

  getProject() {
    let projectCount = +this.projects.length
    this.projects = this.projectData.slice(0, projectCount + 3)
    console.log("worked")

    if (this.projects.length == this.projectData.length) {
      this.projectEnd = true
    }
  }

}
