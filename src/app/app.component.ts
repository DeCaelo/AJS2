import { Component } from '@angular/core';
import { Item } from './models/item';
import { Config } from './config';
import { ItemService } from './services/item.service';
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
  private ItemService: ItemService;

  constructor(ItemService: ItemService, CollectionService: CollectionService) {
    this.title = Config.APP_TITLE;
    this.version = Config.APP_VERSION;
    this.ItemService = ItemService;
    this.collection = CollectionService.getCollection();
  }

  onCreateItem(item: Item) {
    this.ItemService.addItemToCollection(item);
  }
}
