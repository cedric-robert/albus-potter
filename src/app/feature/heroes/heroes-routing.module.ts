import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesSectionComponent } from './components/heroes-section/heroes-section.component';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  { path: ':linkAnchor', component: HeroesSectionComponent },
  { path: '', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
