import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroesSectionComponent } from './components/heroes-section/heroes-section.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroesSectionComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
