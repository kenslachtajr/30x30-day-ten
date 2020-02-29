import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhonesComponent } from './phones/phones/phones.component';
import { PhonesDetailsComponent } from './phones/phones-details/phones-details.component';
import { PhonesItemComponent } from './phones/phones-item/phones-item.component';
import { PhonesListComponent } from './phones/phones-list/phones-list.component';
import { ItemsComponent } from './items/items.component';
import { ItemsDetailComponent } from './items/items-detail/items-detail.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemsItemComponent } from './items/items-item/items-item.component';

@NgModule({
  declarations: [AppComponent, PhonesComponent, PhonesDetailsComponent, PhonesItemComponent, PhonesListComponent, ItemsComponent, ItemsDetailComponent, ItemsListComponent, ItemsItemComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
