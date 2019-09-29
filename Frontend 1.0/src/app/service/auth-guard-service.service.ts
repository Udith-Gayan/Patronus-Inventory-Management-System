import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginLogoutServService } from './login-logout-serv.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate {

  constructor(private router: Router, private loginService: LoginLogoutServService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return true;  // For now testing
    if (this.loginService.isUserLoggedIn()) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }

  }


