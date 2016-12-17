import { Injectable } from '@angular/core';
import { Config } from '../config';
import { Item } from '../models/Item';
import { CollectionService } from './collection.service';

@Injectable()
export class ItemService {
  public CollectionService: CollectionService;

  constructor(CollectionService: CollectionService) {
      this.CollectionService = CollectionService;
  }

  addItemToCollection(item: Item): void {
    this.CollectionService.addItemToCollection(item);
  }

  createNewItem(): Item {
    return new Item({reference: '', name: '', state: 0});
  }
}
