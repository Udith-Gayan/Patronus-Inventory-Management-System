import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

  
  { path: '/maps', title: 'Welcome',  icon:'users_single-02', class: '' },
    { path: '/icons', title: 'Employee Registation',  icon:'users_single-02', class: '' },
    { path: '/user-profile', title: 'Add new Asset',  icon:'education_atom', class: '' },
    { path: '/table-list', title: 'Company Assets',  icon:'design_bullet-list-67', class: '' },
    { path: '/dashboard', title: 'Breakdown Inbox',  icon: 'design_app', class: '' },
    { path: '/notifications', title: 'Request Inbox',  icon:'ui-1_bell-53', class: '' },
   
    
    

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  
}
