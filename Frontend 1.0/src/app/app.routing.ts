import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { notEqual } from 'assert';
import { TestshowComponent } from './firebase/testshow/testshow.component';
import { TestveiwComponent } from './firebase/testveiw/testveiw.component';
import { EmpLayoutComponent } from './layouts/emp-layout/emp-layout.component';


const routes: Routes =[
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'Employee',
    component:EmpLayoutComponent,
    children:[
      {
        path: 'X',
        loadChildren:'./layouts/emp-layout/emp-layout.module#EmpLayoutModule'
      },

    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  },

]},

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'hom'
  },
  {
    path:"list",
    component:LoginComponent

  },







];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
