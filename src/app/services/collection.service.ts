import { Injectable } from '@angular/core';
import { Config } from '../config';
import { Item } from '../models/Item';
import { Http } from '@angular/http';

@Injectable()
export class CollectionService {
  public collection: Item[];
  private Http: Http;

  constructor(Http: Http) {
    this.Http = Http;
    this.Http.get('/collection').subscribe(response => {
        this.collection = response.json();
    });
  }

  getCollection(): Item[] {
    return this.collection;
  }

  addItemToCollection(item: Item): CollectionService {
    this.collection.unshift(item);

    return this;
  }
}

