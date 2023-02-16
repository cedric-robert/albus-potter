import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from './core/services/init.service';
import { StoreService } from './core/services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'harry-potter-characters';
  sections$: Observable<Section[]> = this.storeService.sections$;

  constructor(private readonly storeService: StoreService) {}
}
