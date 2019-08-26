import { Component, OnInit } from '@angular/core';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [


{ path: '/Employee/emp-asset', title: 'emp-asset',  icon:'design_app', class: '' },
  { path: 'Employee/a', title: 'Employees',  icon:'users_single-02', class: '' },
  { path: '/bookAsset', title: 'Book Asset',  icon:'education_atom', class: '' },
  { path: '/breakdown', title: 'Assets Pools',  icon:'design_bullet-list-67', class: '' },
  
  
 
  
  

];

@Component({
  selector: 'app-emp-sidebar',
  templateUrl: './emp-sidebar.component.html',
  styleUrls: ['./emp-sidebar.component.scss']
})
export class EmpSidebarComponent implements OnInit {
  menuItems: any[];
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
