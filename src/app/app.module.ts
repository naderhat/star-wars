import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { StarWarsService } from 'src/app/star-wars.service';
import { LogService } from 'src/app/log.service';

@NgModule({
  declarations: [AppComponent, TabsComponent, ListComponent, ItemComponent],
  imports: [BrowserModule],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
