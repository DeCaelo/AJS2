import { Injectable, EventEmitter, Output } from '@angular/core';
import { Config } from '../config';
import { Item } from '../models/Item';
import { Http, Response } from '@angular/http';
import { Observable }  from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class CollectionService {
    public collection: Item[];
    private Http: Http;
    @Output() update: EventEmitter<Item[]> = new EventEmitter();

    constructor(Http: Http) {
        this.Http = Http;
    }

    /**
     *
     */
    getCollection(): any {
        this.Http.get('/collection').map(response => {
            this.collection = response.json();
            this.updateCollection();
        }).subscribe();
    }

    /**
     *
     */
    addItemToCollection(item: Item): any {
        this.Http.post('/collection', item).map(response => {
            this.collection = response.json();
            this.updateCollection();
        }).subscribe();
    }

    updateCollection() {
        this.update.emit(this.collection);
    }
}
