import { Component, Output, EventEmitter } from '@angular/core';
import { Item } from './models/item'

@Component({
  selector: 'item-form',
  templateUrl: './item.form.html'
})
export class ItemForm {
  private item: Item;
  @Output() onCreateItem = new EventEmitter();

  constructor() {
    this.resetItem();
  }

  resetItem() {
    this.item = new Item({reference: '', name: '', state: 0});
  }

  createItem() {
    this.onCreateItem.emit(this.item);
    this.resetItem();
  }
}

