import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginLogoutServService {

  constructor() { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('basicauth');
    console.log('User is logged in ' + !(user === null));
    return !(user === null);
  }

  // Logout function
  logOut() {
    console.warn('User is logging out...');
    sessionStorage.removeItem('basicauth');
    sessionStorage.removeItem('status');
  }


}
