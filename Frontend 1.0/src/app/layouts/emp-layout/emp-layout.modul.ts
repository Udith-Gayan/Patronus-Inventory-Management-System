import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { EmpLayoutRoutes } from './emp-layout.routing';

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(EmpLayoutRoutes),
      FormsModule,
     
      NgbModule,
      ToastrModule.forRoot()
    ],
    declarations: [
      
      
    
    ]
  })

  export class empLayout{
      
  }
  
  