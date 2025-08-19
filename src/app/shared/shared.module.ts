import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SwiperModule } from 'swiper/angular';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsCardComponent } from './components/projects-card/projects-card.component';
import { ImageSkeletonModule } from './components/img-skeleton-loader/img-skeleton-loader.module';
import { GhostLoaderDirective } from './directives/ghost-loader-loader.directive';

@NgModule({ declarations: [
        HeaderComponent,
        FooterComponent,
        ProjectsCardComponent,
        GhostLoaderDirective,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ProjectsCardComponent,
        GhostLoaderDirective,
    ], imports: [CommonModule,
        BrowserAnimationsModule,
        RouterModule,
        SwiperModule,
        ImageSkeletonModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SharedModule {}
