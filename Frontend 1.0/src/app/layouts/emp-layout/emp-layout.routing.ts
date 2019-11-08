import { Routes } from '@angular/router';
import { NoteComponent } from '../../note/note.component';
import { AComponent } from '../../a/a.component';
import { AssetComponent } from '../../EMPLOYEE_DASHBOARD/asset/asset.component';

import { HomeComponent } from '../../home/home.component';
import { BookAssetComponent } from '../../EMPLOYEE_DASHBOARD/book-asset/book-asset.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AuthGuardServiceService } from './../../service/auth-guard-service.service';


export const EmpLayoutRoutes: Routes = [
   

   
   
    {
        path:'a',
        component:AComponent,
       

    },
    {
        path:'emp-asset',
        component:AssetComponent,
        canActivate: [AuthGuardServiceService]
    },
    {
        path:'home',
        component:HomeComponent,

    },
    {
        path:'bookAsset',
        component:BookAssetComponent,
        canActivate: [AuthGuardServiceService]
    },
    { path: 'breakdown', component: DashboardComponent , canActivate: [AuthGuardServiceService]},
  
    
];