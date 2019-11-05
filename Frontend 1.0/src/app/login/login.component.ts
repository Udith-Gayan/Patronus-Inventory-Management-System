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
import { ResetModel } from './resetPassword.model';
import { MailResponse } from './mailResponse';
//import * as crypto from 'crypto-js';
//import { CryptoJS } from 'crypto-js';


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
    console.log( 'line1');
    /************AES part */

    // let encryptedpsd = crypto.AES.encrypt(this.loginRequest.password, '1234567890123456').toString();
  //    console.log(crypto.AES.encrypt(this.loginRequest.password, '1234567890123456').toString());
  //   // this.loginRequest.password = crypto.AES.encrypt(this.loginRequest, 'udith');
  //   console.log( 'line2');
  //  // console.log('Encrypted key is: ' + crypto.AES.decrypt(encryptedpsd, '1234567890123456'));
  //   console.log('line3' + typeof encryptedpsd);

  //    this.loginRequest.password = encryptedpsd;

     /********** AES end */

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

  // Open reset box
  public openPasswordReset() {
    const modalRef = this.modalService.open(NgbdModalContentForresetPassword);
    modalRef.componentInstance.name = 'Please fill the form correctly and check your Email Inbox ';
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////// Another class for popup modal
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Another Class for popup for Password reset form
@Component({
  selector: 'ngbd-modal-contentt',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" style="color:green; font-size: 38px;font-weight: 600;">Reset Password</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
     <p style="font-weight: 600;"> {{name}}!</p>

<!--   Reset form -->
     <form (onSubmit)="sendMail()" #thisForm="ngForm" name = "thisForm" >
     <div class="form-group">
       <label for="exampleInputEmail1">Email address</label>
       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" #email="ngModel" name="email"   [(ngModel)]="resetForm.resetEmail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />


       <div *ngIf=" email.errors?.required && email.touched"
       class="alert alert-danger udith-danger">
        Required
      </div>

<div *ngIf="email.errors?.pattern && email.touched"
   class="alert alert-danger udith-danger">
    Not Valid
</div>
       </div>


     <div class="form-group">
       <label for="exampleInputPassword1">New Password</label>
       <input type="password" class="form-control" name="newPassword"  placeholder="Password" [(ngModel)]="resetForm.newPassword" #newPassword="ngModel" required>
     </div>

     <div class="form-group">
     <label for="exampleInputPasswor2">Confirm New Password</label>
     <input type="password" class="form-control" name="rePassword"  placeholder="Password Again" [(ngModel)]="resetForm.confirmNewPassword" #rePassword="ngModel" required>
     </div>



     <div class="form-check">

       <button type="submit" class="btn btn-primary" (click)="sendMail()" [disabled]= "thisForm.invalid">Submit</button>
     </div>
   </form>

   <!-- End of form -->


    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `,
  styleUrls: ['./login.component.scss']
})

export class NgbdModalContentForresetPassword {
  @Input() name;

  resetForm: ResetModel;

  constructor(public activeModal: NgbActiveModal, private userService: HttpService) {
    this.resetForm = new ResetModel();
  }


  passwordMatched: boolean = true;

////////////////////////////////////////////////////////////////////////////////////
  public sendMail() {
    console.log('thisending method begins');
console.log(this.resetForm);

console.log( 'line1');
/*****************************AES begins */
  //   const encryptedpsd = crypto.AES.encrypt(this.resetForm.newPassword , '1234567890123456').toString();
  //    console.log(crypto.AES.encrypt(this.resetForm.newPassword , '1234567890123456').toString());
  //   // this.loginRequest.password = crypto.AES.encrypt(this.loginRequest, 'udith');
  //   console.log( 'line2');
  //  // console.log('Encrypted key is: ' + crypto.AES.decrypt(encryptedpsd, '1234567890123456'));
  //   console.log('line3' + typeof encryptedpsd);

  //   this.resetForm.newPassword = encryptedpsd;

    /********************AES end */


     this.userService.sendMail(this.resetForm).subscribe( (mailResponse: MailResponse) => {

      if (mailResponse.code === -1) {
            window.alert(mailResponse.message);
            this.activeModal.close();
          //  window.close;
      }
      else if(mailResponse.code === 100) {
        window.alert(mailResponse.message);
        window.alert('Please check your emails to confirm');
        this.activeModal.close();
      }

     } );


  }
///////////////////////////////////////////////////////////////////////////////////////////
// on change of retyped password
public matchPassword() {

  console.log('change');
  if (this.resetForm.newPassword !== this.resetForm.confirmNewPassword) {
         this.passwordMatched = false;
  } else {
    this.passwordMatched = true;
  }



}

///////////////////////////////////////////////////////////////////////////////////////////


}

