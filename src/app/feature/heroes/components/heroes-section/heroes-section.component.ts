import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { combineLatest, EMPTY, map, Observable, of, switchMap } from 'rxjs';
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
  sections: Section[] = [];
  heroes$: Observable<Hero[]> = EMPTY;
  sectionId = -1;
  section$: Observable<Section | undefined> = EMPTY;
  constructor(private heroesService: HeroesService, private route: ActivatedRoute, private readonly storeService: StoreService) {}

  ngOnInit(): void {
    const sectionId$ = this.route.paramMap.pipe(switchMap(params => of(params.get('sectionId'))));
    this.section$ = combineLatest([sectionId$, this.storeService.sections$]).pipe(
      map(([sectionId, sections]) => {
        const currentSection = sections.find(section => section.index === sectionId);
        return currentSection;
      })
    );
  }
}
