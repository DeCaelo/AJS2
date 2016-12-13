import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string;
  private version: string;
  private collection: [any];

  constructor() {
    this.title = 'Delivery App';
    this.version = '1.0';
    this.collection = [
      {reference: '1234', name: 'anton', state: 0},
      {reference: '5678', name: 'levon', state: 1},
      {reference: '9012', name: 'dor', state: 2}
    ]
  }
}
