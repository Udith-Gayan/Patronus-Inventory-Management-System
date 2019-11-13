import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginLogoutServService } from './login-logout-serv.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate, OnInit {

  constructor(private router: Router, private loginService: LoginLogoutServService) { }

  ngOnInit() {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

   //  return true;  // For now testing
    if (this.loginService.isUserLoggedIn()) {
      return true;
    }

 
    alert('Access denied !!');
  this.router.navigate(['home']);

    return false;
  }

  }


