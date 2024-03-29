import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { ActivatedRoute } from '@angular/router';
// import { select, Store } from '@ngrx/store';

import { AnimationOptions } from 'ngx-lottie';
import { map, Observable, of, take, tap } from 'rxjs';
// import { ProjectsService } from 'src/app/shared/components/projects-card/projects-service.service';
import { projects } from 'src/app/store/api';
// import * as fromRoot from 'src/app/store/app.state';
import { projectModel } from 'src/app/store/models';
import { Container, Main } from 'tsparticles';
// import { retrieveProject } from '../store/pages.action';
// import { selectProjectCollection } from '../store/pages.selectors';
import { particleOptionsJSON } from './particlesjs-config';
// import { fade } from 'src/app/shared/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations: [fade]
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  id = 'z';
  @ViewChild('heroContainer')
  div!: ElementRef<HTMLElement>;

  @ViewChild('heroContainer') heroEl!: ElementRef<HTMLDivElement>;
  @ViewChild('Project') projectEl!: ElementRef<HTMLDivElement>;

  projects$!: Observable<any>;
  projects!: projectModel[];
  projectData$: projectModel[] = [];
  projectEnd: boolean = false;

  /* or the classic JavaScript object */
  particlesOptions: any = particleOptionsJSON;

  catLottie: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_m3lpL4.json',
  };

  catMaskLottie: AnimationOptions = {
    path: 'https://assets3.lottiefiles.com/packages/lf20_sDO0PX.json',
  };

  dogLottie: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_5JFpAw.json',
  };

  constructor(
    // private route: ActivatedRoute,
    // private store: Store<fromRoot.AppState>,
    private title: Title
  ) // private projectAPI: ProjectsService
  {}

  ngOnInit(): void {
    this.title.setTitle('Joseph O. Chikeme');
    // this.projects$ = this.store.select("projects").pipe(map((data: any) => data.projects))
    // this.route.fragment.subscribe((e: any) => {
    //   if (e) {
    //     this.scroll(e)
    //   }
    // })

    this.getProjects();
    // this.store.select("projects").subscribe(data => console.log(data))
    // this.store.dispatch(retrieveProject())
  }

  ngOnDestroy(): void {
    // this.projects.unsubscribe()
  }

  ngAfterViewInit(): void {
    // this.div.nativeElement.style.height = '400px'
    // console.log(this.div)
  }

  particlesLoaded(container: Container): void {
    // console.log(container.canvas.size);
  }

  particlesInit(main: Main): any {
    // main.set('z', this.div)
    // console.log(main);
    return;
  }

  scroll(el: any) {
    el.scrollIntoView();
  }

  getProjects() {
    // this.projects = this.store.select("projects")
    // this.projectAPI.getProjects().subscribe(data => console.log(data.data))
    // return this.store.pipe(select(selectProjectCollection)).subscribe((data: any) => {
    //   this.projects = data.projects.slice(0, 3)
    //   this.projectData$ = data.projects
    // })

    return of(projects)
      .subscribe((data) => {
        // console.log('projects local: ', data)
        this.projects = data;
        this.projectData$ = data.slice(0, 3);
      })
      .unsubscribe();
  }

  getProject() {
    let projectCount = +this.projects.length;
    this.projectData$ = this.projects.slice(0, this.projectData$.length + 3);
    // console.log("worked")

    if (this.projects.length == this.projectData$.length) {
      this.projectEnd = true;
    }
  }
}
