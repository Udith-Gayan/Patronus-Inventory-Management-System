import { WebtokenResponse } from './webtokenResponse';
import { LoginRequest } from './loginRequest';
import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BookingAssetModalComponent } from '../PopupModals/booking-asset-modal/booking-asset-modal.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  employee: Employee;

  loginRequest: LoginRequest;



  constructor(private userService: HttpService, private router: Router, private modalService: NgbModal) {
    this.employee = new Employee();
    this.loginRequest = new LoginRequest();

   }

  ngOnInit() {}

 // Submit function
  onSubmit() {

    console.log(this.loginRequest);

    // if (this.loginRequest.username || this.loginRequest.password) {
    //   console.log('Empty fields received');
    //   if (this.loginRequest.username === '' && this.loginRequest.password === '') {
    //     this.loginRequest.username = '';
    //     this.loginRequest.password = '';
    //     return;
       
 
    //   } else if (this.loginRequest.password === '') {
        
    //    this.loginRequest.password = '';
    //    return;

    //   } else {
    //     this.loginRequest.username = '';
    //     return;

    //   }
    // }



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



    },
    ( error: any) => {
       console.table('Error found while loggin: ' + error.type);

        this.openErrorBox();
       this.router.navigate(['/login']);

       this.loginRequest.username = '';
       this.loginRequest.password = '';

          } );




  }

  // Open error dialog box
  public openErrorBox() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'Login credentials are wrong !!! Please check again and continue.. ';
  }


/*
// Moved to loginLogout Service file


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
*/

}


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" style="color:red; font-size: 38px;font-weight: 600;">Wrong Credentials !!!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p style="font-weight: 600;"> {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})

export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}


