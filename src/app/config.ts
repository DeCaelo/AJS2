import {Item} from './models/item';

export class Config {
  public static get APP_TITLE(): string { return 'Delivery App'; }
  public static get API_ROUTES(): any { return {
    collection: '/collection'
  }; }
}
