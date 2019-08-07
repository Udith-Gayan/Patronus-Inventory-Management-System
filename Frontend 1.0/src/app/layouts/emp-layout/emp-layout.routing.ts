import { Routes } from '@angular/router';
import { NoteComponent } from '../../note/note.component';
import { AComponent } from '../../a/a.component';
import { AssetComponent } from '../../EMPLOYEE_DASHBOARD/asset/asset.component';

import { HomeComponent } from '../../home/home.component';
import { BookAssetComponent } from '../../EMPLOYEE_DASHBOARD/book-asset/book-asset.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';

export const EmpLayoutRoutes: Routes = [
   

   
   
    {
        path:'a',
        component:AComponent,
       

    },
    {
        path:'emp-asset',
        component:AssetComponent,
    },
    {
        path:'home',
        component:HomeComponent,

    },
    {
        path:'bookAsset',
        component:BookAssetComponent,
    },
    { path: 'breakdown', component: DashboardComponent },
  
    
];