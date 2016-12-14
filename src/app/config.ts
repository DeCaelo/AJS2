import {Item} from './models/item';

export class Config {
  public static get APP_TITLE(): string { return 'Delivery App'; }
  public static get APP_VERSION(): string { return '1.0'; }
  public static get FAKE_COLLECTION(): [Item] { return [
            new Item({reference: '1234', name: 'anton', state: 0}),
            new Item({reference: '5678', name: 'levon', state: 1}),
            new Item({reference: '9012', name: 'dor', state: 2})
        ]
     }
}
