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
    console.log("getcontact1");
    this.http.get(api.viewContact).subscribe(data => {
      console.log("getcontact",data);
    }, error => {
      alert('unable to connect');
    })

    this.createNewForm();
   
  }


  createNewForm()
  {
    this.contactForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phone: new FormControl('')
    })
  }




  submitForm() {
    let contactJson = [];
    // Object.keys(this.contactForm.value).forEach((key) => {
    //   if (this.contactForm.value[key] != '') {
    //     contactJson.push({
    //       property: key,
    //       value: this.contactForm.value[key]
    //     })
    //   }
    // })
    const userContact = {
      userContact: this.contactForm.value
    }
    console.log(this.contactForm.value);
    this.http.post(api.addSalesforceContact, { userContact: this.contactForm.value }).subscribe(data => {
      console.log(data);
      alert("Successfully Saved")
      this.createNewForm();
    }, error => {
      alert('unable to connect');
    })
  }
}
