import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../Contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  ContactList: Contact[];

  @Output() ContactSelected: EventEmitter<Contact>;

  private currentContact: Contact;

  constructor(private contactService: ContactService) {
    this.ContactList = contactService.getAllContacts();
    this.ContactSelected = new EventEmitter();
   }

  ngOnInit() {
  }

  clicked(contact: Contact): void {
    this.currentContact = contact;
    this.ContactSelected.emit(contact);
  }

  isSelected(contact: Contact): boolean {
    if (!contact || !this.currentContact) {
      return false;
    }
    return contact.id === this.currentContact.id;
  }

}
