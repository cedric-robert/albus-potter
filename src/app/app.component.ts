import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Section } from './core/services/init.service';
import { StoreService } from './core/services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'harry-potter-characters';
  sections: Section[] = [];

  constructor(private readonly storeService: StoreService) {}

  ngOnInit(): void {
    this.sections = this.storeService.sections;
  }
}
