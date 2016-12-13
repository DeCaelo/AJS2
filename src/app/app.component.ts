import { Component } from '@angular/core';
import { Item } from './models/item';
import { Config } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string;
  private version: string;
  private collection: [Item];
  private newItem: Item;

  constructor() {
    this.title = Config.APP_TITLE;
    this.version = Config.APP_VERSION;
    this.collection = [
      new Item({reference: '1234', name: 'anton', state: 0}),
      new Item({reference: '5678', name: 'levon', state: 1}),
      new Item({reference: '9012', name: 'dor', state: 2})
    ]

    this.resetNewItem();
  }
//reset input
  resetNewItem(){
    this.newItem = new Item({reference: '', name: '', state: 0});
  }

  getDetails(event: Event) {
     event.preventDefault();
     let element = event.target || event.srcElement || event.currentTarget;
  }

  createObject() {
    this.collection.push(this.newItem);
    this.resetNewItem();
  }
}
