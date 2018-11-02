import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  ContactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.ContactForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
      ]],
      phone: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      company: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      finished: [false, [
        Validators.requiredTrue
      ]],
    });
  }

}
