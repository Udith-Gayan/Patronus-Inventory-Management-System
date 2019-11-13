import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';



import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent, NgbdModalContent, NgbdModalContentForresetPassword } from './login/login.component';
import { NoteComponent } from './note/note.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ProjecterComponent } from './AssetCatagary/projecter/projecter/projecter.component';
import { OtherComponent } from './AssetCatagary/other/other.component';
import { FurnitureComponent } from './AssetCatagary/furniture/furniture.component';
import { ViewEmpComponent } from './icons/view-emp/view-emp.component';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './icons/icons.component';
import { RegistorEmpComponent } from './icons/registor-emp/registor-emp.component';
import { ViewAssetComponent } from './user-profile/view-asset/view-asset.component';
import { RegistorAssetComponent } from './user-profile/registor-asset/registor-asset.component';
import { ComputerComponent } from './AssetCatagary/computer/computer.component';
import { EmpLayoutComponent } from './layouts/emp-layout/emp-layout.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';

import { NotifiService } from './firebase/notifi.service';
import { EmpCompenentModule } from './components/Emp-components/emp-components.module';
import { BookingAssetModalComponent } from './PopupModals/booking-asset-modal/booking-asset-modal.component';
import { ViewAllEmpDelailComponent } from './PopupModals/view-all-emp-delail/view-all-emp-delail.component';
import { ViewAllAssetDetailComponent } from './PopupModals/view-all-asset-detail/view-all-asset-detail.component';
import { VFurnitureComponent } from './viewAllAssetCatagary/vfurniture/vfurniture.component';
import { VProjecterComponent } from './viewAllAssetCatagary/vprojecter/vprojecter.component';
import { BasicAuthHttpInterceptorService } from './service/basic-auth-http-interceptor.service';


import { BookAssetComponent } from './EMPLOYEE_DASHBOARD/book-asset/book-asset.component';
import { ViewBrekDownComponent } from './firebase/view-brek-down/view-brek-down.component';
import { ViewRequestAssetComponent } from './firebase/view-request-asset/view-request-asset.component';
import { ViewSingleNotificationComponent } from './PopupModals/view-single-notification/view-single-notification.component';
import { ViewSingleAssetNotiComponent } from './PopupModals/view-single-asset-noti/view-single-asset-noti.component';
import { ViewSingleEmpNotiComponent } from './PopupModals/view-single-emp-noti/view-single-emp-noti.component';
import { RequestAssetModalComponent } from './PopupModals/request-asset-modal/request-asset-modal.component';
import { LogoutComponent } from './logout/logout.component';

import {NgxPrintModule} from 'ngx-print';
import { ViewBreakeDownAssetComponent } from './PopupModals/view-breake-down-asset/view-breake-down-asset.component';
import { ViewRequestAndBookingEmpDetailComponent } from './PopupModals/view-request-and-booking-emp-detail/view-request-and-booking-emp-detail.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UpdateEmployeeComponent } from './PopupModals/update-employee/update-employee.component';
import { ViewBookingNotificationComponent } from './PopupModals/view-booking-notification/view-booking-notification.component';
// import { BCrypt } from 'bcrypt';







@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    EmpCompenentModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()





  ],

  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    EmpLayoutComponent,
    HomeComponent,
    BookAssetComponent,
    ViewAllEmpDelailComponent,
    ViewAllAssetDetailComponent,
    BookingAssetModalComponent,
    ViewSingleNotificationComponent,

    NgbdModalContent,

    ViewSingleAssetNotiComponent,
    ViewSingleEmpNotiComponent,
    RequestAssetModalComponent,
    LogoutComponent,
    ViewBreakeDownAssetComponent,
    ViewRequestAndBookingEmpDetailComponent,
    UpdateEmployeeComponent,
    NgbdModalContentForresetPassword,
    ViewBookingNotificationComponent


   

   
    

   

    



  ],
  exports: [NgbdModalContent,

  ],


providers: [ { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHttpInterceptorService, multi: true }, NotifiService, AngularFirestore],  // udith-keep firestore here
  bootstrap: [AppComponent],
  entryComponents: [
    BookingAssetModalComponent,
      ViewAllEmpDelailComponent,
      ViewAllAssetDetailComponent,
      ViewSingleNotificationComponent,
      ViewSingleAssetNotiComponent,
      ViewSingleEmpNotiComponent,
      RequestAssetModalComponent,
      NgbdModalContent,
      ViewBreakeDownAssetComponent,
      ViewRequestAndBookingEmpDetailComponent,
      NgbdModalContentForresetPassword,
      UpdateEmployeeComponent,
      ViewBookingNotificationComponent

    ]

})

export class AppModule { }
