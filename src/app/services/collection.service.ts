import { Injectable } from '@angular/core';
import { Config } from '../config';
import { Item } from '../models/item';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CollectionService {
  public collection: Item[];
  private Http: Http;

  constructor(Http: Http) {
    this.Http = Http;

  }

  getCollection(): Observable<Item[]> {
    return this.Http.get('/collection').map(response => {
      this.collection = response.json();

     return this.collection;
    });
  }

  addItemToCollection(item: Item): CollectionService {
    this.collection.unshift(item);

    return this;
  }
}

