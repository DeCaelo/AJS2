import { Config } from '../config';
import { Item } from '../models/Item';

export class ItemService {
  public collection: Item[];

  constructor() {
      this.setFakeCollection();
  }

  setFakeCollection(): void {
    this.collection = [
        new Item({reference: '1234', name: 'anton', state: 0}),
        new Item({reference: '5678', name: 'levon', state: 1}),
        new Item({reference: '9012', name: 'dor', state: 2})
    ];
  }

  getCollection(): Item[] {
    return this.collection;
  }

  addItemToCollection(item: Item): ItemService {
    this.collection.unshift(item);

    return this;
  }
}
