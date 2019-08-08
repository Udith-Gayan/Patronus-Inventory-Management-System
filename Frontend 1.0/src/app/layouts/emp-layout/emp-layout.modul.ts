import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { EmpLayoutRoutes } from './emp-layout.routing';

import { AComponent } from '../../a/a.component';
import { AssetComponent } from '../../EMPLOYEE_DASHBOARD/asset/asset.component';

import { BookAssetComponent } from '../../EMPLOYEE_DASHBOARD/book-asset/book-asset.component';




@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(EmpLayoutRoutes),
      FormsModule,

      NgbModule,
      ToastrModule.forRoot()
    ],
    declarations: [

      AComponent,
      AssetComponent,

      BookAssetComponent





    ]
  })

  export  class EmpLayoutModule{

  }


