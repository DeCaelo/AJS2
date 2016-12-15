import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item as ItemModel } from './models/item'

@Component({
  selector: 'item',
  templateUrl: './item.html',
  styleUrls: [
        './app.component.css'
    ]
})
export class Item {
  @Input() item: ItemModel;

  changeState(event: Event, state: number) {
     event.preventDefault();
     this.item.state = state;
  }
}
