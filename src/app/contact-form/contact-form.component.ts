import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../Contact.model';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  ContactForm: FormGroup;

  loading = false;
  success = false;
  newContact: Contact;

  constructor(private formBuilder: FormBuilder, private _contactService: ContactService, private _router: Router) { }

  ngOnInit() {
    this.ContactForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
      ]],
      company: ['', [
        Validators.required,
      ]],
      email: ['', [
        Validators.required,
      ]],
      phoneNumberWork: [''],
      phoneNumberHome: [''],
      birthday: [''],
      address: [''],
      finished: [false, [
        Validators.requiredTrue
      ]],
    });

    this.ContactForm.valueChanges.subscribe(console.log);
  }

  addContact() {
    console.log('submit');
    this.newContact = new Contact(this.ContactForm.value);
    this._contactService.addContact(this.newContact);
    this._router.navigate(['']);
  }

}
