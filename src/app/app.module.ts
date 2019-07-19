import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { StarWarsService } from 'src/app/star-wars.service';
import { LogService } from 'src/app/log.service';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CharacterComponent } from './character/character.component';
import { PlanetComponent } from './planet/planet.component';
import { LinkToItemComponent } from './link-to-item/link-to-item.component';
import { FilmComponent } from './film/film.component';
import { StarshipComponent } from './starship/starship.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterService } from 'src/app/pagingation-character.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    HeaderComponent,
    CharacterComponent,
    PlanetComponent,
    LinkToItemComponent,
    FilmComponent,
    StarshipComponent,
    VehicleComponent,
    PaginatorComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StarWarsService, LogService, CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
