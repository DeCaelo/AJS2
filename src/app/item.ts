import { Component, Input, Output, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';
import { Item as ItemModel } from './models/item'

@Component({
  selector: 'item',
  templateUrl: './item.html',
  styleUrls: [
        './app.component.css'
   ],
   animations: [
        trigger('itemAnimationState', [
            state('inactive', style({ color: 'red' })),
            state('active', style({ color: 'blue' })),
            transition('void => *', [
                  style({transform: 'translateX(-100%)'}),
                  animate(1000)
              ]),
            transition('* => void', [
                  animate(1000, style({transform: 'translateX(100%)'}))
              ])
        ])
    ]
})
export class Item {
  @Input() item: ItemModel;

  changeState(event: Event, state: number) {
     event.preventDefault();
     this.item.state = state;
  }
}
