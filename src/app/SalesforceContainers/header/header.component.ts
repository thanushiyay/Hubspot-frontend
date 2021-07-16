import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-salesforce-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigationUrl: string;
  navigationName: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((e) => {
      if(e instanceof NavigationEnd){
        if(e.url.includes('salesforce/login')){
          this.navigationUrl = '/salesforce/home';
          this.navigationName = 'Create Contact'
        }
        else if(e.url.includes('salesforce/deck')){
          this.navigationUrl = '/salesforce/login';
          this.navigationName = 'Logout'
        }
         else {
          this.navigationUrl = '/salesforce/login';
          this.navigationName = 'Login'
        }
      }
    })
  }
}
