import { Config } from '../config';
import { Item } from '../models/Item';

export class CollectionService {
  public collection: Item[];

  constructor() {
    this.collection = [];
  }

  getCollection(): Item[] {
    return this.collection;
  }

  addItemToCollection(item: Item): CollectionService {
    this.collection.unshift(item);

    return this;
  }
}

