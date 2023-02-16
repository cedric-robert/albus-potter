import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Section } from '../../services/init.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnChanges {
  @Input() sections: Section[] | null = [];
  readonly MAX_ELEMENT = 5;
  readonly SECTION_INDEX_START = 1;
  sectionsFragment: Section[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.sectionsFragment = changes['sections'].currentValue.splice(this.SECTION_INDEX_START, this.MAX_ELEMENT - this.SECTION_INDEX_START);
  }
}
