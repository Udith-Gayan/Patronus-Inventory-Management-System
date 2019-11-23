import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginLogoutServService {

  constructor() { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('basicauth');
    console.log('Session unblocked: ' +  + (sessionStorage.getItem('unblocked') === 'true') );
    console.log('User is logged in ' + !(user === null));
  if(sessionStorage.getItem('unblocked') === 'false'){
  alert('Access Blocked!');
}

    return (!(user === null) && (sessionStorage.getItem('unblocked') === 'true'));
  }

  // Logout function
  logOut() {
    console.warn('User is logging out...');
    sessionStorage.removeItem('basicauth');
    sessionStorage.removeItem('status');
    sessionStorage.clear();
  }


}
