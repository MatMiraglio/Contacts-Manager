import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../Contact.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  id: number;
  contact: Contact;

  constructor(private route: ActivatedRoute, private _contactService: ContactService) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit() {
    this.contact = this._contactService.getContactById(this.id);
  }

}
