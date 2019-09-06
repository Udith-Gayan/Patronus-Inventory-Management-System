import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { OtherComponent } from '../../AssetCatagary/other/other.component';
import { RegistorEmpComponent } from '../../icons/registor-emp/registor-emp.component';
import { ViewEmpComponent } from '../../icons/view-emp/view-emp.component';
import { FurnitureComponent } from '../../AssetCatagary/furniture/furniture.component';
import { ViewAssetComponent } from '../../user-profile/view-asset/view-asset.component';
import { RegistorAssetComponent } from '../../user-profile/registor-asset/registor-asset.component';
import { ProjecterComponent } from '../../AssetCatagary/projecter/projecter.component';
import { ComputerComponent } from '../../AssetCatagary/computer/computer.component';
import { TestveiwComponent } from '../../firebase/testveiw/testveiw.component';
import { TestshowComponent } from '../../firebase/testshow/testshow.component';
import { EmployeeFilterPipe } from '../../icons/employee-filter-pipe';
import { AssetFilterPipe } from '../../user-profile/asset-filter.pipe';
import { View2EmpComponent } from '../../icons/view2-emp/view2-emp.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ConfirmPassword } from '../../models/ConfirmePassword';
import { ViewComputerComponent } from '../../AssetCatagary/ViewAsset/view-computer/view-computer.component';
import { ViewFurnitureComponent } from '../../AssetCatagary/ViewAsset/view-furniture/view-furniture.component';
import { ViewProjectreComponent } from '../../AssetCatagary/ViewAsset/view-projectre/view-projectre.component';
import { VComputerComponent } from '../../viewAllAssetCatagary/vcomputer/vcomputer.component';
import { VFurnitureComponent } from '../../viewAllAssetCatagary/vfurniture/vfurniture.component';
import { VProjecterComponent } from '../../viewAllAssetCatagary/vprojecter/vprojecter.component';
import { BookingAssetModalComponent } from '../../PopupModals/booking-asset-modal/booking-asset-modal.component';
import { ComplainBreakedownComponent } from '../../dashboard/complain-breakedown/complain-breakedown.component';
import { ViewBreakedownComponent } from '../../dashboard/view-breakedown/view-breakedown.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    OtherComponent,
    RegistorEmpComponent,
    ViewEmpComponent,
    FurnitureComponent,
    ViewAssetComponent,
    RegistorAssetComponent,
    ComputerComponent,
    ProjecterComponent,
    TestveiwComponent,
    TestshowComponent,
    EmployeeFilterPipe,
    AssetFilterPipe,
    View2EmpComponent,
    ConfirmPassword,
    ViewComputerComponent,
    ViewProjectreComponent,
    ViewFurnitureComponent,
    VComputerComponent,
    VFurnitureComponent,
    VProjecterComponent,
    ComplainBreakedownComponent,
    ViewBreakedownComponent
   
    

    
  
  ]
 

})

export class AdminLayoutModule {
}
