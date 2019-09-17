import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HttpModule } from '@angular/http';   // test


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
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
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { NotifiService } from './firebase/notifi.service';
import { EmpCompenentModule } from './components/Emp-components/emp-components.module';
import { BookingAssetModalComponent } from './PopupModals/booking-asset-modal/booking-asset-modal.component';
import { ViewAllEmpDelailComponent } from './PopupModals/view-all-emp-delail/view-all-emp-delail.component';
import { ViewAllAssetDetailComponent } from './PopupModals/view-all-asset-detail/view-all-asset-detail.component';
import { VFurnitureComponent } from './viewAllAssetCatagary/vfurniture/vfurniture.component';
import { VProjecterComponent } from './viewAllAssetCatagary/vprojecter/vprojecter.component';
import { BasicAuthHttpInterceptorService } from './service/basic-auth-http-interceptor.service';








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
    ReactiveFormsModule

  ],

  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    EmpLayoutComponent,
    HomeComponent,
    BookingAssetModalComponent,
    ViewAllEmpDelailComponent,
    ViewAllAssetDetailComponent

  ],

  providers: [ { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHttpInterceptorService, multi: true }, NotifiService],
  bootstrap: [AppComponent],
  entryComponents: [
    BookingAssetModalComponent,
    ViewAllEmpDelailComponent,
    ViewAllAssetDetailComponent
  ]
})

export class AppModule { }
