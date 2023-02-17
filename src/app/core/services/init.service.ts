import { Injectable } from '@angular/core';
import axios from 'axios';
import { StoreService } from './store.service';

export interface Section {
  index: string;
  line: string;
  level: string;
}

export interface Parse {
  title: string;
  sections: Section[];
}

const urlGetSections =
  'https://fr.wikipedia.org/w/api.php?' +
  new URLSearchParams({
    origin: '*',
    action: 'parse',
    pageid: '4057986',
    format: 'json',
    prop: 'sections'
  });

@Injectable({
  providedIn: 'root'
})
export class InitService {
  constructor(private readonly storeService: StoreService) {}

  init(): Promise<void> {
    console.log('initializing');

    return axios
      .get(urlGetSections)
      .then(response => {
        if (response.status === 200) {
          this.storeService.setSections(response.data.parse.sections);
        } else {
          console.error('il y a une erreur');
        }
      })
      .catch(error => console.log(error));

    /* return new Promise((resolve, reject) => {
      // Do some asynchronous stuff
      resolve();
    }); */
  }
}
