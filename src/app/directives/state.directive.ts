import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[state]'
})
export class StateDirective {
  @Input('state') itemState: any;
  private element: any;
  private renderer: any;

  constructor(element: ElementRef, renderer: Renderer) {
    this.element = element;
    this.renderer = renderer;
  }

  ngOnChanges() {
    let cssClass = `state-${this.itemState}`;
    let text = 'A livrer';
    let elementNode = this.element.nativeElement;

    switch (this.itemState) {
      case 1:
        text = 'En cours de livraison';
        break;
      case 2:
        text = 'Commande livrée';
        break;
    }

    this.renderer.setElementClass(elementNode, cssClass, true);
    this.renderer.setText(elementNode, text);
  }
 }

