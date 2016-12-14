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
  @Output() onGetDetails = new EventEmitter();

  getDetails(event: Event) {
     event.preventDefault();

     this.onGetDetails.emit(this.item);
  }
}
