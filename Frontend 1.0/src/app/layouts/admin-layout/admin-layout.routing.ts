import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
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

export const AdminLayoutRoutes: Routes = [
    { path: 'breakdown', component: DashboardComponent },
    { 
        path: 'asset', 
        component: UserProfileComponent ,
        children:[
            {
                path: '',
                redirectTo: 'view-asset',
                pathMatch: 'full',
              },

            {
                path:'view-asset',
                component: ViewAssetComponent,
                children:[
                    {
                        path:'book',
                        component:TestshowComponent,
                    },
                    {
                        path:'more',
                        component:TableListComponent,
                    },
                    

                ]

        },
        {
            path:'registor-asset',
            component:RegistorAssetComponent,
            children:[
                {
                    path: '',
                    redirectTo: 'computer',
                    pathMatch: 'full',
                  },

                {
                    path:'furniture',
                    component:FurnitureComponent
                },
                {
                    path:'other',
                    component:OtherComponent
                },
                {
                    path:'computer',
                    component:ComputerComponent,
                   
                },
                {
                    path:'projecter',
                    component:ProjecterComponent
                }
               
            ]
        }
    ]
    
    },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    {
        path: 'employee', component: IconsComponent,
        children: [
            {
                path: '',
                redirectTo: 'view-employee',
                pathMatch: 'full',
              }, 
            {
                path: 'registor',
                component: RegistorEmpComponent
            },
            {
                path:'view-employee',
                component:ViewEmpComponent
            },
            {
                path: '**',
                redirectTo: 'employee'
              },
            
        ],

    },
    { path: 'welcome', component: MapsComponent },
    { 
        path: 'notifications', 
        component: NotificationsComponent ,
        children:[
            {
                path:'view',
                component:TestveiwComponent
            },
            {
                path:'show',
                component:TestshowComponent
            }
        ]
    
    },
    { path: 'upgrade', component: UpgradeComponent },
    {path: 'other', component: OtherComponent },
    {path: 'registor', component: RegistorEmpComponent },
    {path:'view' ,component:TestveiwComponent},
    {path:'show' ,component:TestshowComponent}
    
];
