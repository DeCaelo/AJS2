import { Component } from '@angular/core';
import { Item } from './models/item';
import { Config } from './config';
import { CollectionService } from './services/collection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string;
  private version: string;
  private collection: Item[];

  constructor(CollectionService: CollectionService) {
    CollectionService.getCollection().subscribe(collection => {
      this.collection = collection;
    });
  }
}
