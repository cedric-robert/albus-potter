import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  constructor() {}

  static initializeApp(): Promise<void> {
    console.log('initializing');

    const urlGetSections =
      'https://fr.wikipedia.org/w/api.php?' +
      new URLSearchParams({
        origin: '*',
        action: 'parse',
        pageid: '4057986',
        format: 'json',
        prop: 'sections',
      });

    axios
      .get(urlGetSections)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
        } else {
          console.error('il y a une erreur');
        }
      })
      .catch((error) => console.log(error));

    return new Promise((resolve, reject) => {
      // Do some asynchronous stuff
      resolve();
    });
  }
}
