import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

interface SectionResponse {
  parse: {
    title: string;
    pageid: number;
    text: any;
  };
}

const urlGetSections = 'https://fr.wikipedia.org/w/api.php?';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private readonly getHeroesFromSection = new URLSearchParams({
    origin: '*',
    action: 'parse',
    pageid: '4057986',
    format: 'json',
    prop: 'text',
    formatversion: '2'
  });
  constructor() {}

  getHeroes(sectionId: any): Promise<AxiosResponse<SectionResponse>> {
    this.getHeroesFromSection.append('section', '' + sectionId);
    return axios.get<SectionResponse>(urlGetSections + this.getHeroesFromSection);
  }
}
