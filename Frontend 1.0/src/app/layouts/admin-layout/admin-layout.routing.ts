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
import { AuthGuardServiceService } from '../../service/auth-guard-service.service';
import { WelcomeComponent } from '../../maps/welcome/welcome.component';
import { AboutUsComponent } from '../../maps/about-us/about-us.component';
import { ViewAllAssetComponent } from '../../upgrade/view-all-asset/view-all-asset.component';
import { ViewAllEmployeeComponent } from '../../upgrade/view-all-employee/view-all-employee.component';
import { ViewAllMonthlyBrakeDownAssetComponent } from '../../upgrade/view-all-monthly-brake-down-asset/view-all-monthly-brake-down-asset.component';
import { ViewAllMonthlyReportComponent } from '../../upgrade/view-all-monthly-report/view-all-monthly-report.component';
import { ViewAllMonthlyBookAssetComponent } from '../../upgrade/view-all-monthly-book-asset/view-all-monthly-book-asset.component';

import { ContactUsComponent } from '../../maps/contact-us/contact-us.component';
import { ViewAllRequestAssetsComponent } from '../../upgrade/view-all-request-assets/view-all-request-assets.component';
import { ReturnAssetComponent } from '../../return-asset/return-asset.component';
import { ReturnBokAssetComponent } from '../../return-asset/return-bok-asset/return-bok-asset.component';
import { ReturnRequestAssetComponent } from '../../return-asset/return-request-asset/return-request-asset.component';
import { OwnAssetComponent } from '../../user-profile/own-asset/own-asset.component';

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
             path: 'complainBreakedown',
             component: ComplainBreakedownComponent

         },
         {
             path: 'viewBreakdownnotification',
             component: ViewBreakedownComponent
         }
     ],
    canActivate: [AuthGuardServiceService]


    },


    {
        path: 'asset',
        component: UserProfileComponent ,
        children: [
            {
                path: '',
                redirectTo: 'view-asset',
                pathMatch: 'full',
              },
              {
                path: 'own-asset',
                component:OwnAssetComponent,

            },

            {
                path: 'view-asset',
                component: ViewAssetComponent,
                children: [
                    {
                        path: 'book',
                        component: TestshowComponent,
                    },
                    {
                        path: 'more',
                        component: TableListComponent,
                    },
                    {
                        path: 'back',
                        component: ViewBreakedownComponent
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
                    path: 'projecter',
                    component: ProjecterComponent
                }

            ]
        }
    ],
    //canActivate: [AuthGuardServiceService]

    },
    { path: 'table-list', component: TableListComponent ,
        children: [
            {
                path: 'computerView',
                component: VComputerComponent
            },
            {
                path: 'FurnitureView',
                component: VFurnitureComponent
            },
            {
                path:  'projecterView',
                component: VProjecterComponent
            },
        ],
       // canActivate: [AuthGuardServiceService]


    },

    { path: 'typography', component: TypographyComponent, canActivate: [AuthGuardServiceService] },
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
                path:  'view-employee',
                component: ViewEmpComponent
            },
            {
                path:  'more',
                component: View2EmpComponent
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
       // canActivate: [AuthGuardServiceService]

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
     ],
     //canActivate: [AuthGuardServiceService]

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
                path: 'bookNotification',
                component: TestveiwComponent
            },
            {
                path: 'show',
                component: TestshowComponent
            },
            {
                path: 'breakDownNotification',
                component: ViewBrekDownComponent
            },
            {
                path: 'requestNotification',
                component: ViewRequestAssetComponent


            }
        ],
       // canActivate: [AuthGuardServiceService]

    },
    { path: 'report',
     component: UpgradeComponent ,

     children:[
        {
            path: '',
            redirectTo: 'viewAllMonthlyReport',
            pathMatch: 'full',
          },
         {
             path:'viewAllAssetReport',
             component:ViewAllAssetComponent
         },
         {
            path:'viewallEmployeeDetailReport',
            component:ViewAllEmployeeComponent
        },
        {
            path:'viewAllBreakDownReport',
            component:ViewAllMonthlyBrakeDownAssetComponent
        },
        {
            path:'viewAllMonthlyReport',
            component:ViewAllMonthlyReportComponent
        },
        {
            path:'viewMonthlyBookAssetReport',
            component:ViewAllMonthlyBookAssetComponent
        },
        {
            path:'viewAllRequestAssets',
            component:ViewAllRequestAssetsComponent

        }

     ],
    // canActivate: [AuthGuardServiceService]
    },
    {path: 'other', component: OtherComponent },
    {path: 'registor', component: RegistorEmpComponent },
    {path: 'view' , component: TestveiwComponent},
    {path: 'show' , component: TestshowComponent},
    {
        path:'return',
        component:ReturnAssetComponent,
        children:[
            {
                path:'',
                redirectTo:'return-book-asset',
                pathMatch:'full',

            },
         {
             path:'return-book-asset',
             component: ReturnBokAssetComponent,
         
         },
         {
             path:'return-request-asset',
             component:ReturnRequestAssetComponent,
         }
        ],
       // canActivate: [AuthGuardServiceService]
        
        
    }


];
