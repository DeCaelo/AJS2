import { Injectable } from '@angular/core';
import { Config } from '../config';
import { Item } from '../models/Item';
import { Http } from '@angular/http';

@Injectable()
export class CollectionService {
  private Http: Http;

  constructor(Http: Http) {
    this.collection = [];
    this.Http = Http;
  }

  getCollection(): Item[] {
    return this.collection;
  }

  addItemToCollection(item: Item): CollectionService {
    this.collection.unshift(item);

    return this;
  }
}

