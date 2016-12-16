import { Injectable } from '@angular/core';
import { Config } from '../config';
import { Item } from '../models/Item';
import { CollectionService } from './collection.service';

@Injectable()
export class ItemService {
  public collection: Item[];

  constructor(CollectionService: CollectionService) {
      this.collection = CollectionService.getCollection();
  }

  addItemToCollection(item: Item): ItemService {
    this.collection.unshift(item);

    return this;
  }
}
