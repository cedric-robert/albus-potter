import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroesSectionComponent } from './components/heroes-section/heroes-section.component';
import { CardSectionComponent } from './components/card-section/card-section.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroesSectionComponent,
    CardSectionComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
