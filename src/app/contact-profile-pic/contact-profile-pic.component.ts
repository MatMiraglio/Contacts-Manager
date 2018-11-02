import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../Contact.model';

@Component({
  selector: 'app-contact-profile-pic',
  template: `
  <img class="product-image" [src]="contact.profilePicUrl">
  `,
  styleUrls: ['./contact-profile-pic.component.scss']
})
export class ContactProfilePicComponent implements OnInit {

  @Input() pictureUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
