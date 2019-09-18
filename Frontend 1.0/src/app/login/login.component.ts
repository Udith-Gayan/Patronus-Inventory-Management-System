import { WebtokenResponse } from './webtokenResponse';
import { LoginRequest } from './loginRequest';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BookingAssetModalComponent } from '../PopupModals/booking-asset-modal/booking-asset-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  employee: Employee;

  loginRequest: LoginRequest;
  modalService: any;

  constructor(private userService: HttpService, private router: Router) {
    this.employee = new Employee();
    this.loginRequest = new LoginRequest();

   }

  ngOnInit() {
   
  }


  // Submit function
  onSubmit() {

    console.log(this.loginRequest);



    this.userService.login(this.loginRequest).subscribe((response: WebtokenResponse) => {
      console.log(response);

      // Save to session storage
      sessionStorage.setItem('status', response.status);
      let authString = 'Bearer ' + response.token;     // modify the token by prepending the word "Bearer"
      sessionStorage.setItem('basicauth', authString);
      sessionStorage.setItem('firstname', response.firstname);
      sessionStorage.setItem('lastname', response.lastname);
      sessionStorage.setItem('img', response.img);
      sessionStorage.setItem('nic', response.nic);
      sessionStorage.setItem('email', response.email);
      sessionStorage.setItem('contactNo', response.contactNo.toString());


      this.router.navigate(['/welcome']);
     



    }, ( error: any) => {
       console.table('Error found while loggin: ' + error.type);
       window.alert('Please Check the Email and Password again');
       this.router.navigate(['/login']);

          } );

    // this.userService.login(this.loginRequest).pipe(
    //   map(
    //     response => {
    //       console.log(response);
    //       sessionStorage.setItem('status', status);
    //       let authString = 'Bearer ' + response.token;
    //       sessionStorage.setItem('basicauth', authString);

    //     }));

    
  }


  // check if user is logged in or not

  isUserLoggedIn() {
    let user = sessionStorage.getItem('basicauth');
    console.log(!(user === null));
    return !(user === null);
  }

  // Logout function
  logOut() {
    sessionStorage.removeItem('basicauth');
    sessionStorage.removeItem('status');
  }

 
  

}
