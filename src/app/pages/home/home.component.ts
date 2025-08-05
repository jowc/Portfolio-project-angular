import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AnimationOptions } from 'ngx-lottie';
import { Observable, of } from 'rxjs';
import { projects } from 'src/app/store/api';
import { projectModel } from 'src/app/store/models';
import { particleOptionsJSON } from './particlesjs-config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  id = 'z';
  @ViewChild('heroContainer')
  div!: ElementRef<HTMLElement>;

  @ViewChild('heroContainer') heroEl!: ElementRef<HTMLDivElement>;
  @ViewChild('Project') projectEl!: ElementRef<HTMLDivElement>;

  projects$!: Observable<any>;
  projects!: projectModel[];
  projectData: projectModel[] = [];
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
    private title: Title // private projectAPI: ProjectsService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Joseph O. Chikeme');

    this.getProjects();
  }

  ngOnDestroy(): void {
    // this.projects.unsubscribe()
  }

  ngAfterViewInit(): void {
    // this.div.nativeElement.style.height = '400px'
    // console.log(this.div)
  }

  scroll(el: any) {
    el.scrollIntoView();
  }

  getProjects() {
    return of(projects)
      .subscribe((data) => {
        // console.log('projects local: ', data)
        this.projects = data;
        this.projectData = data.slice(0, 3);
      })
      .unsubscribe();
  }

  getProject() {
    this.projectData = this.projects.slice(0, this.projectData.length + 3);

    if (this.projects.length == this.projectData.length) {
      this.projectEnd = true;
    }
  }
}
