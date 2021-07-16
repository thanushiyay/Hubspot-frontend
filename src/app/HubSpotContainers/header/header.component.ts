import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
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
        if(e.url.includes('hubspot/login')){
          this.navigationUrl = '/hubspot/home';
          this.navigationName = 'Create Contact'
        }
        else if(e.url.includes('hubspot/deck')){
          this.navigationUrl = '/hubspot/login';
          this.navigationName = 'Logout'
        }
         else {
          this.navigationUrl = '/hubspot/login';
          this.navigationName = 'Login'
        }
      }
    })
  }
}
