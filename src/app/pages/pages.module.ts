import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgParticlesModule } from "ng-particles";
import { LottieModule } from 'ngx-lottie';
import { SharedModule } from '../shared/shared.module';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgParticlesModule,
    LottieModule,
    SharedModule
  ]
})
export class PagesModule { }
