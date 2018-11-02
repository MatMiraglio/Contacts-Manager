import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-profile-pic',
  templateUrl: `
  <img class="product-image" [src]="product.imageUrl">
  `,
  styleUrls: ['./contact-profile-pic.component.scss']
})
export class ContactProfilePicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
