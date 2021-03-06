import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TitleModule } from './title/title.module';

import { AppComponent } from './app.component';
import { Item as ItemComponent } from './item'
import { ItemForm } from './item.form'
import { ItemPipe } from './pipes/item.filter'
import { HighlightDirective } from './directives/highlight.directive';
import { StateDirective } from './directives/state.directive';

import { ItemService } from './services/item.service';
import { CollectionService } from './services/collection.service';
import { SocketService } from './services/socket.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemForm,
    ItemPipe,
    HighlightDirective,
    StateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TitleModule
  ],
  providers: [ItemService, CollectionService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
