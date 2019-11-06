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
///

///
////////////
//  */import Swal from 'sweetalert2/dist/sweetalert2.js';

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
    nic:string = sessionStorage.getItem('nic');
   con:boolean=false;

//notification
test : Date = new Date();
list:BookAsset[];
list2:BreakDwonNoti[];
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

    

   

    ////  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Open booking popup form
  openFormModal(assetId,assetcategory,notificationType,requestedNic,massege,beginDate,dueDate,username) {
    console.log();
    const modalRef = this.modalService.open(ViewSingleNotificationComponent);
    modalRef.componentInstance.assetId = assetId;    // Pass vallue to other form component
    modalRef.componentInstance.assetcategory = assetcategory;
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

// logout

logout() {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Logout!'
  }).then((result) => {
    if (result.value) {
      
      sessionStorage.clear();
      this.router.navigate(['/home']);
    }
  });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////






}
