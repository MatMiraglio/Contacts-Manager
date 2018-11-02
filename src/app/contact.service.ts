import { Injectable } from '@angular/core';
import { Contact } from './Contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {
    this.allContacts = [
      new Contact('1', 'john', '123456', '', 'Solstice', 'solstice@gmail.com'),
    ];
   }

  allContacts: Contact[];

  getAllContacts(): Contact[] {
    return this.allContacts;
  }
}
