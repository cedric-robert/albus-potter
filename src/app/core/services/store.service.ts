import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Section } from './init.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _sections: BehaviorSubject<Section[]> = new BehaviorSubject<Section[]>([]);
  sections$: Observable<Section[]> = this._sections.asObservable();

  set sections(sections: Section[]) {
    console.debug(`sections size: ${sections.length}`);
    this._sections.next(sections);
  }
}
