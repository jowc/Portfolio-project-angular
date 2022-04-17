import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { CloudinaryModule } from '@cloudinary/ng';
import { AppState } from './store/app.state';


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
    StoreModule.forRoot(AppState),
    BrowserAnimationsModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    CloudinaryModule,
    SharedModule,
    BlogModule,
    AdminModule,
    PagesModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
