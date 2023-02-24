import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { combineLatest, EMPTY, from, map, Observable, of, switchMap } from 'rxjs';
import { HeroesService } from 'src/app/core/services/heroes.service';
import { Section } from 'src/app/core/services/init.service';
import { StoreService } from 'src/app/core/services/store.service';

export interface Hero {
  name: string;
}

@UntilDestroy()
@Component({
  selector: 'app-heroes-section',
  templateUrl: './heroes-section.component.html',
  styleUrls: ['./heroes-section.component.scss']
})
export class HeroesSectionComponent implements OnInit {
  @ViewChild('heroesList') heroesList!: ElementRef;
  sections: Section[] = [];
  heroes$: Observable<string[]> = EMPTY;
  sectionId = -1;
  section$: Observable<Section | undefined> = EMPTY;
  constructor(private heroesService: HeroesService, private route: ActivatedRoute, private readonly storeService: StoreService) {}

  ngOnInit(): void {
    const linkAnchor$ = this.route.paramMap.pipe(switchMap(params => of(params.get('linkAnchor'))));
    this.section$ = combineLatest([linkAnchor$, this.storeService.sections$]).pipe(
      map(([linkAnchor, sections]) => {
        const currentSection: Section | undefined = sections.find(section => section.linkAnchor === linkAnchor);
        if (currentSection) {
          this.heroes$ = from(this.heroesService.getHeroes(currentSection.index));
        }
        return currentSection;
      })
    );
  }
}
