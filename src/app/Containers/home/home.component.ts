import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { api, environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contactForm: FormGroup;
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  webSite: string = '';
  company: string = '';
  phone: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  zip: string = '';

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      email: new FormControl('', [Validators.email]),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      website: new FormControl(''),
      company: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  }

  submitForm() {
    let contactJson = [];
    Object.keys(this.contactForm.value).forEach((key) => {
      if (this.contactForm.value[key] != '') {
        contactJson.push({
          property: key,
          value: this.contactForm.value[key]
        })
      }
    })
    const userContact = {
      properties: contactJson
    }
    this.http.post(api.addContact, { userContact: userContact }).subscribe(data => {
      console.log(data);
    }, error => {
      alert('unable to connect');
    })
  }

}
