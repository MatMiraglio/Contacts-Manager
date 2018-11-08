import { Injectable } from '@angular/core';
import { Contact } from './Contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  allContacts: Contact[] = [
    {
      id: 1,
      name: 'John', company: 'Solstice',
      profilePicUrl: 'https://via.placeholder.com/150/b0f7cc',
      email: 'solstice@gmail.com',
      birthday: '20/12/1990',
      phoneNumberWork: '123123123',
      phoneNumberHome: '12315616514',
      address: 'Arenales 1890'},

    {
      id: 2,
      name: 'Bob',
      company: 'Microsoft',
      profilePicUrl: 'https://via.placeholder.com/150/b0f7cc',
      email: 'solstice@gmail.com',
      birthday: '20/12/1990',
      phoneNumberWork: '',
      phoneNumberHome: '',
      address: ''},
    {
      id: 3,
      name: 'Mark',
      company: 'Google',
      profilePicUrl: 'https://via.placeholder.com/150/b0f7cc',
      email: 'solstice@gmail.com',
      birthday: '20/12/1990',
      phoneNumberWork: '',
      phoneNumberHome: '',
      address: ''}
  ];

  getAllContacts(): Contact[] {
    return this.allContacts;
  }

  getContactById(id: number): Contact {
    // tslint:disable-next-line:triple-equals
    return this.allContacts.find(p => p.id == id);
  }

  addContact(contact: Contact) {

    const newId: number = this.allContacts.last().id + 1;
    contact.id = newId;
    const numberOfContacts: number = this.allContacts.push(contact);
    console.log( 'new contact created, there are ' + numberOfContacts );
  }

  deletContact(id: number) {
    const contactToRemove = this.allContacts.find(p => p.id == id);
    const contactIndex = this.allContacts.indexOf(contactToRemove);
    if (contactIndex !== -1) {
      this.allContacts.splice(contactIndex, 1);
    }
  }
}
