import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NoteComponent } from './note/note.component';
import { IconsComponent } from './icons/icons.component';
import { HomeComponent } from './home/home.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, 
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
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
    redirectTo: 'icon'
  },
  {
    path:"list",
    component:LoginComponent
    
  },

  
  {
    path: 'maps',
    component: AdminLayoutComponent,
    children:[
      {
        path:'note',
        component:NoteComponent
      }
    ]
    },
    {
      path: 'note',
      component: NoteComponent,
      },
 
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
