import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  ContactForm: FormGroup;

  loading = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { }

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
      phoneWork: [''],
      phoneHome: [''],
      birthday: [''],
      address: [''],

      finished: [false, [
        Validators.requiredTrue
      ]],
    });

    this.ContactForm.valueChanges.subscribe(console.log);
  }

}
