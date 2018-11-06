import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../Contact.model';
import { ContactService } from '../contact.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  ContactList: Contact[];

  @Output() ContactSelected: EventEmitter<Contact>;

  private _currentContact: Contact;

  constructor(private _contactService: ContactService) {
    this.ContactSelected = new EventEmitter();
   }

  ngOnInit() {
    this.ContactList = this._contactService.getAllContacts();
  }

  clicked(contact: Contact): void {
    this._currentContact = contact;
    this.ContactSelected.emit(contact);
  }

  isSelected(contact: Contact): boolean {
    if (!contact || !this._currentContact) {
      return false;
    }
    return contact.id === this._currentContact.id;
  }

}
