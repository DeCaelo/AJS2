import { Component, Input } from '@angular/core';
import { Item as ItemModel } from './models/item'

@Component({
  selector: 'item',
  templateUrl: './item.html'
})
export class Item {
  @Input() item: ItemModel;
}
