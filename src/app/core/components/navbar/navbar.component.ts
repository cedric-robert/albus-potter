import { Component, Input } from '@angular/core';
import { Section } from '../../services/init.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() sections: Section[] = [];
}
