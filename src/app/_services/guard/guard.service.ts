import { Injectable } from '@angular/core';

import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    //return this.activationCheck(route);
    return true; // Hardcoded solution while we don't have functioning back-end
  }

  activationCheck(route: ActivatedRouteSnapshot): boolean {
    var url: String = route.url.toString();

    if (!this.authService.isLoggedIn() && url != "") {
      this.authService.logout(route.url.length > 0 ? { queryParams: { retUrl: route.url } } : {})
      return false;
    } else {
      if (this.authService.isLoggedIn() && url == "") {
        this.router.navigate(["/dash"]);
        return false;
      }
    }

    return true;
  }

}