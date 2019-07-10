import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { CharacterComponent } from './character/character.component';
import { PlanetComponent } from './planet/planet.component';

const routes = [
  {
    path: 'characters',
    component: TabsComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: ':side', component: ListComponent }
    ]
  },
  {
    path: 'new-character',
    loadChildren:
      'src/app/create-character/create-character.module#CreateCharacterModule'
  },
  { path: 'character', component: CharacterComponent },
  { path: 'character/:url', component: CharacterComponent },
  { path: 'planet/:url', component: PlanetComponent },
  { path: '**', redirectTo: '/characters' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
