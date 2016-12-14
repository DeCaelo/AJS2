import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Item as ItemComponent } from './item'
import { ItemForm } from './item.form'
import { ItemPipe } from './pipes/item.filter'

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemForm,
    ItemPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
