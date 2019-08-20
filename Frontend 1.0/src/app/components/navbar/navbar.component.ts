import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import Chart from 'chart.js';
import { Employee } from '../../firebase/model';
import { NotifiService } from '../../firebase/notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   
  list:Employee[];
  constructor(private ser : NotifiService,private firestore:AngularFirestore) { }

    ngOnInit(){
      this.ser.getEmployees().subscribe(actionArry => {
        this.list = actionArry.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
  
          } as Employee;
        })
      });


    }
    onEdit(emp:Employee){
      this.ser.FormData=Object.assign({},emp);
    }
    onDelete(id:string){
      if(confirm("Are you sure")){
        this.firestore.doc('employeee/'+id).delete();
      }

    
    }
    setNotifiedUser(){
      
				let now = new Date();

    }
    
   
}
