import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/feature/heroes/components/heroes-section/heroes-section.component';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  constructor() {}

  getHeroes(sectionId: any): Observable<Hero[]> {
    throw new Error('Method not implemented.');
  }
}
