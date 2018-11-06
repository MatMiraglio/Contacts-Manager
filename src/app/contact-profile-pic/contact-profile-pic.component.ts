import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-profile-pic',
  template: `
  <img class="product-image" *ngIf="pictureUrl" [src]="pictureUrl">
  `,
  styleUrls: ['./contact-profile-pic.component.scss']
})
export class ContactProfilePicComponent implements OnInit {

  @Input() pictureUrl: string;

  constructor() { }

  ngOnInit() {
    if (!this.pictureUrl) {
      this.pictureUrl = 'https://ursa.research.gsu.edu/files/2016/08/people-placeholder.jpg';
    }
  }
}
