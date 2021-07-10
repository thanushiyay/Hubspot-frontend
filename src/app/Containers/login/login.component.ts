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
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  submitForm(){
    console.log(this.loginForm.value.email);
    this.http.get(api.checkContact+'/'+this.loginForm.value.email)
    .subscribe(data => {
      if(data['message'] != 'failure'){
        this.router.navigateByUrl('/deck' + '?email=' +this.loginForm.value.email);
      } else{
        alert('No Contacts created');
      }
    })
  }

}
