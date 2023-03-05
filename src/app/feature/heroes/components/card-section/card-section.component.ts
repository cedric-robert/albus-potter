import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent implements OnInit {
  @Input() sectionName = '';
  @Input() count = 0;
  countArray: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.countArray = new Array(this.count).fill((x: number, i: number) => i);
    console.log(this.countArray);
  }
}
