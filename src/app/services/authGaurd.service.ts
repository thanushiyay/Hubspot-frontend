import { Injectable } from '@angular/core';
import { CanActivate,CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
   

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(localStorage.getItem("AuthEmail") != undefined){
        this.router.navigateByUrl('/deck' + '?email=' +localStorage.getItem("AuthEmail"));
        return true;
    }
      this.router.navigate["login"];
  }

   
}