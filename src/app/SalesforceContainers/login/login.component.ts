import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    console.log("login");
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  submitForm(){
    console.log(this.loginForm.value.email);
    this.http.get(api.checkSalesforceContact)
    .subscribe(data => {
      console.log(data);
      let check = false;
      [...data['Contacts'].records].forEach(data => {
        console.log(data);
        if(data.Email == this.loginForm.value.email){
          check = true;
          return false;
        }
      })
      if(check){
        this.router.navigateByUrl('/salesforce/deck' + '?email=' +this.loginForm.value.email);
      } else
      alert('No Contacts created');
      // if(data['message'] != 'failure'){
      //   this.router.navigateByUrl('/deck' + '?email=' +this.loginForm.value.email);
      // } else{
      //   alert('No Contacts created');
      // }
    })
  }

}
