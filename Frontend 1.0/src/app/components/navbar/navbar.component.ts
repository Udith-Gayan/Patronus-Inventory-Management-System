import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import Chart from 'chart.js';
import { NotifiService } from '../../firebase/notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';

import { BookAsset } from '../../models/BookAssetModel';
import { BookingAssetModalComponent } from '../../PopupModals/booking-asset-modal/booking-asset-modal.component';
import { ViewAllAssetDetailComponent } from '../../PopupModals/view-all-asset-detail/view-all-asset-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewSingleNotificationComponent } from '../../PopupModals/view-single-notification/view-single-notification.component';
import { BreakDwonNoti } from '../../firebase/BreakDownModel';

////////////
import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';

const Swal = require('sweetalert2');
//////////////////

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    status:string = sessionStorage.getItem('status');
<<<<<<< HEAD
   con:boolean=false;
   
//notification
test : Date = new Date();
list:BookAsset[];
list2:BreakDwonNoti[];
=======
    userName:string = sessionStorage.getItem('firstname');


// notification
test: Date = new Date();
list: BookAsset[];
list2: BreakDwonNoti[];
>>>>>>> 37e2828f5981123fd2bcb0e77b84c4172c3b1a0f
    private data: Number ;
///////////////////////////
    public isCollapsed = true;


    constructor( private router: Router , private ser: NotifiService,private firestore:AngularFirestore, private modalService: NgbModal) {

    }

    ngOnInit() {


     // notification genarator
     this.ser.data.subscribe( data => {
       this.data = data ;
     })

     this.ser.Bookasset().subscribe(actionArry => {
      this.list = actionArry.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()

        } as BookAsset;
      })
     // this.ser.updatedDataSelection(this.list.length+this.list2.length);
    });

    this.ser.BreakDownAsset().subscribe(actionArry => {
      this.list2 = actionArry.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()

        } as BreakDwonNoti;
      })
      this.ser.updatedDataSelection(this.list2.length+this.list.length);
    });


    this.ser.data.subscribe( data => {
      console.log(data);
    })
    }

    collapse(){
      this.isCollapsed = !this.isCollapsed;
      const navbar = document.getElementsByTagName('nav')[0];
      console.log(navbar);
      if (!this.isCollapsed) {
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('bg-white');
      }else{
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('bg-white');
      }

    }

    login(){
      console.log("line1");
      
      console.log("Line2");
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Logout!'
        
      }).then((result) => {
        this.con=true;
        console.log(this.con);
        
        if (result.value) {
          console.log(this.con);
          console.log("Line3");
         
        }
      })
     

    }
   
    ////  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Open booking popup form
  openFormModal(assetId,assetCategory,notificationType,requestedNic,massege,beginDate,dueDate,username) {
    console.log();
    const modalRef = this.modalService.open(ViewSingleNotificationComponent);
    modalRef.componentInstance.assetId = assetId;    // Pass vallue to other form component
    modalRef.componentInstance.assetCategory = assetCategory;
    modalRef.componentInstance.notificationType = notificationType;
    modalRef.componentInstance.requestedNic = requestedNic;
    modalRef.componentInstance.massege = massege;
    modalRef.componentInstance.beginDate = beginDate;
    modalRef.componentInstance.dueDate = dueDate;
    modalRef.componentInstance.username = username;


    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////







}
