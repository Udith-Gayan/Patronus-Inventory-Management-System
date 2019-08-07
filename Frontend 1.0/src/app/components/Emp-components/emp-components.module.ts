import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EmpSidebarComponent } from './emp-sidebar/emp-sidebar.component';
import { EmpNavbarComponent } from './emp-navbar/emp-navbar.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
   EmpSidebarComponent,
   EmpNavbarComponent
  
    
  ],
  exports: [
  EmpSidebarComponent,
  EmpNavbarComponent
  ]
})
export class EmpCompenentModule { }
