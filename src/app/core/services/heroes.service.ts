import { Injectable } from '@angular/core';
import axios from 'axios';

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

  getHeroes(sectionId: any): Promise<string[]> {
    this.getHeroesFromSection.append('section', '' + sectionId);
    return axios.get<SectionResponse>(urlGetSections + this.getHeroesFromSection).then(data => {
      return this.parse(data.data.parse.text);
    });
  }

  private parse(html: string): string[] {
    const capturedListValue: string[] = [];
    const regex = /<li><a[^>]*>([^<]*)<\/a><\/li>/gm;
    let m;
    while ((m = regex.exec(html)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      capturedListValue.push(...m.filter((match, groupIndex) => groupIndex === 1));
    }
    return capturedListValue;
  }
}
