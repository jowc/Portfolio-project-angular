import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { CloudinaryModule } from '@cloudinary/ng';


import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { BlogModule } from './blog/blog.module';
import { AdminModule } from './admin/admin.module';
import { PagesModule } from './pages/pages.module';




export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    CloudinaryModule,
    SharedModule,
    BlogModule,
    AdminModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
