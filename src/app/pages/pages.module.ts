import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgParticlesModule } from "ng-particles";

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
    NgParticlesModule,
  ]
})
export class PagesModule { }
