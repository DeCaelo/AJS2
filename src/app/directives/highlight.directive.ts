import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {
  constructor(element: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(element.nativeElement, 'backgroundColor', 'gold')
  }
}
