import { TestBed } from '@angular/core/testing';

import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  let heroesService: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    heroesService = TestBed.inject(HeroesService);
  });

  it('should be created', () => {
    expect(heroesService).toBeTruthy();
  });
  it('parse should return heroes list from ul li html', () => {
    const str = `certains professeurs de <a href="/wiki/Poudlard" title="Poudlard">Poudlard</a>. Les plus mentionnés sont&#160;:
</p>
<ul><li><a href="/wiki/Albus_Dumbledore" title="Albus Dumbledore">Albus Dumbledore</a></li>
<li><a href="/wiki/Sirius_Black" title="Sirius Black">Sirius Black</a></li>`;
    const result = heroesService['parse'](str);
    expect(result).toHaveSize(2);
    expect(result).toContain('Albus Dumbledore');
    expect(result).toContain('Sirius Black');
  });
});
