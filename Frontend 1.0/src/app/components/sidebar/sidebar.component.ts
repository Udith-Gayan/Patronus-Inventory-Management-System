import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

  
  { path: '/welcome', title: 'Welcome',  icon:'design_app', class: '' },
    { path: '/employee', title: 'Employees',  icon:'users_single-02', class: '' },
    { path: '/asset', title: 'Company Assets',  icon:'education_atom', class: '' },
   
    { path: '/breakdown', title: 'Breakdown Assets',  icon: 'design_app', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },
    { path: '/report', title: 'Reports',  icon:'design_bullet-list-67', class: '' },
    { path: '/return', title: 'Return Asset',  icon:'design_app', class: '' }
    
    
   
    
    

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  Fname = sessionStorage.getItem('firstname');
  Lname = sessionStorage.getItem('lastname');
  status = sessionStorage.getItem('status');
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  
}
