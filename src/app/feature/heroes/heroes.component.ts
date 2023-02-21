import { Component, OnInit } from '@angular/core';
import { filter, from, map, Observable, of } from 'rxjs';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  title$: Observable<string | undefined> = of('Personnages principaux de Harry Potter');
  constructor(private readonly storeService: StoreService) {}

  ngOnInit(): void {
    this.title$ = this.storeService.sections$.pipe(map(sections => sections.find(section => section.index === '1')?.line));
  }
}
