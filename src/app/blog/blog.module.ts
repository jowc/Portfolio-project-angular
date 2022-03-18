import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';

import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
