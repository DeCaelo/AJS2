import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item as ItemModel } from './models/item'

@Component({
  selector: 'item',
  templateUrl: './item.html'
})
export class Item {
  @Input() item: ItemModel;
  @Output() onGetDetails = new EventEmitter();

  getDetails(event: Event) {
     event.preventDefault();

     this.onGetDetails.emit(this.item);
  }
}
