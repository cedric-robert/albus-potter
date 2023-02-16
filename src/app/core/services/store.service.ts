import { Injectable } from '@angular/core';
import { Section } from './init.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _sections: Section[] = [];

  set sections(sections: Section[]) {
    this._sections = sections;
    console.debug(`sections size: ${this._sections.length}`);
  }

  get sections() {
    const a = 1;
    console.log('hello');
    return this._sections;
  }
}
