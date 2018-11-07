import { Injectable } from '@angular/core';
import { Contact } from './Contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {
    this.allContacts = [
      new Contact(1, 'John', 'Solstice', 'https://via.placeholder.com/150/b0f7cc', 'solstice@gmail.com', '', '123123123', '', ''),
      new Contact(2, 'Bob', 'Microsoft', 'https://via.placeholder.com/150/b0f7cc', 'solstice@gmail.com', '', '', '', ''),
      new Contact(3, 'Mark', 'Google', 'https://via.placeholder.com/150/b0f7cc', 'solstice@gmail.com', '', '', '', '')
    ];
   }

  allContacts: Contact[];

  getAllContacts(): Contact[] {
    return this.allContacts;
  }

  getContactById(id: number): Contact {
    return this.allContacts.find(p => p.id === id);
  }
}
