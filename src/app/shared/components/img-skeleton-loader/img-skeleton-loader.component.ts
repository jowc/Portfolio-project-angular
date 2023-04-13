import { Component } from '@angular/core';

@Component({
  selector: '[img-skeleton]',
  template: `
    <div
      class="absolute inset-0 h-full w-full bg-gray-200 -z-10 animate-pulse"
    ></div>
  `,
})
export class ImageSkeltonLoaderComponent {}
