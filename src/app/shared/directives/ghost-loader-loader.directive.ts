import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ghost-loader]',
})
export class GhostLoaderDirective {
  constructor(private elRef: ElementRef<HTMLElement>) {
    this.elRef.nativeElement.classList.add('ghost-loader');
  }
}
