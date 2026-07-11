import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxParticlesModule } from '@tsparticles/angular';
import { LottieComponent } from 'ngx-lottie';
import { SharedModule } from '../shared/shared.module';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [NotFoundComponent, HomeComponent, ContactComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    LottieComponent,
    SharedModule,
    NgxParticlesModule,
  ],
})
export class PagesModule {}
