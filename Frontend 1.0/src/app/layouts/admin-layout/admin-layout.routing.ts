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
import { View2EmpComponent } from '../../icons/view2-emp/view2-emp.component';
import { ViewComputerComponent } from '../../AssetCatagary/ViewAsset/view-computer/view-computer.component';
import { ViewFurnitureComponent } from '../../AssetCatagary/ViewAsset/view-furniture/view-furniture.component';
import { ViewProjectreComponent } from '../../AssetCatagary/ViewAsset/view-projectre/view-projectre.component';
import { VComputerComponent } from '../../viewAllAssetCatagary/vcomputer/vcomputer.component';
import { VFurnitureComponent } from '../../viewAllAssetCatagary/vfurniture/vfurniture.component';
import { VProjecterComponent } from '../../viewAllAssetCatagary/vprojecter/vprojecter.component';
import { ComplainBreakedownComponent } from '../../dashboard/complain-breakedown/complain-breakedown.component';
import { ViewBreakedownComponent } from '../../dashboard/view-breakedown/view-breakedown.component';
import { ViewBrekDownComponent } from '../../firebase/view-brek-down/view-brek-down.component';
import { ViewRequestAssetComponent } from '../../firebase/view-request-asset/view-request-asset.component';
import { AboutUsComponent } from '../../maps/about-us/about-us.component';
import { WelcomeComponent } from '../../maps/welcome/welcome.component';
import { ContactUsComponent } from '../../maps/contact-us/contact-us.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'breakdown',
     component: DashboardComponent,
     children:[
        {
            path: '',
            redirectTo: 'complainBreakedown',
            pathMatch: 'full',
          },

         {
             path:'complainBreakedown',
             component:ComplainBreakedownComponent

         },
         {
             path:'viewBreakdownnotification',
             component:ViewBreakedownComponent
         }
     ]
    
    
    },


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
                    {
                        path:'back',
                        component:ViewBreakedownComponent
                    }
                    

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
    { path: 'table-list', component: TableListComponent ,
        children:[
            {
                path:'computerView',
                component:VComputerComponent
            },
            {
                path:'FurnitureView',
                component:VFurnitureComponent
            },
            {
                path:'projecterView',
                component:VProjecterComponent
            },
        ]


    },

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
                path:'more',
                component:View2EmpComponent
            },
            {
                path:'edit/:id',
                component:RegistorEmpComponent
            },
            {
                path: '**',
                redirectTo: 'employee'
              },
            
        ],

    },
    { path: 'welcome',
     component: MapsComponent,
     children:[
        {
            path: '',
            redirectTo: 'welcome',
            pathMatch: 'full',
          },
         {
            
                path:'aboutUs',
                component:AboutUsComponent
                
          
         },
         {
            path:'welcome',
            component:WelcomeComponent
         
        },
        {
            path:'contactUs',
            component:ContactUsComponent
         
        }
     ]
    
    },
    { 
        path: 'notifications', 
        component: NotificationsComponent ,
        children:[
            {
                path:'',
                redirectTo: 'bookNotification',
                pathMatch: 'full',
                
            },
            {
                path:'bookNotification',
                component:TestveiwComponent
            },
            {
                path:'show',
                component:TestshowComponent
            },
            {
                path:'breakDownNotification',
                component:ViewBrekDownComponent
            },
            {
                path:'requestNotification',
                component:ViewRequestAssetComponent
                
            }
          
        ]
    
    },
    { path: 'upgrade', component: UpgradeComponent },
    {path: 'other', component: OtherComponent },
    {path: 'registor', component: RegistorEmpComponent },
    {path:'view' ,component:TestveiwComponent},
    {path:'show' ,component:TestshowComponent}
    
];
