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
import { ViewBreakeDownAssetComponent } from '../../PopupModals/view-breake-down-asset/view-breake-down-asset.component';
import { ViewBookingNotificationComponent } from '../../PopupModals/view-booking-notification/view-booking-notification.component';

const Swal = require('sweetalert2');
//////////////////

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    status: string = sessionStorage.getItem('status');
    nic: string = sessionStorage.getItem('nic');
   con: boolean=false;
   isclick: boolean=true;


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

      this.toggle1(1);
     // notification count genarator
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

    

   

    ////  /////////////////////////////////////////// Open All popup ////////////////////////////////////////////////////////////////////////////////////


 
///////////////////////////////////////////////////////open booking Details///////////////////////////////////////////////////////


// Open booking popup form
BookingDetails(assetId,assetcategory,notificationType,requestedNic,massege,beginDate,dueDate,username,idE) {
  console.log("bookingDetails");
  const modalRef = this.modalService.open(ViewBookingNotificationComponent);
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


  /////////////////////////////////// update firebase ////////////////////////
console.log("update seen1");
console.log(idE);
console.log(massege);
console.log("update seen2");

console.log(this.list);
this.list.forEach(id => {
  console.log("Update seen3");
  console.log(id);
  if(id.id == idE){
    console.log(assetId);
    console.log("Update seen4");
   
   console.log(id.massege);
   this.firestore.collection('BookAssetNotification').doc(id.id).update({isSeen : '1'});





  }
  
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
openFormModal(assetId,assetcategory,notificationType,requestedNic,massege,beginDate,dueDate,username,idE) {
  console.log(requestedNic);
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

/////////////////////////////////// update firebase ////////////////////////
console.log("update seen1");
console.log(idE);
console.log(massege);
console.log("update seen2");

console.log(this.list);
this.list.forEach(id => {
console.log("Update seen3");
console.log(id);
if(id.id == idE){
  console.log(assetId);
  console.log("Update seen4");
 id.massege="seen";
 console.log(id.massege);
 this.firestore.collection('BookAssetNotification').doc(id.id).update({isSeen : '1'});




}

});



}

  countnoti(){
    console.log("Line 100");
    this.data=0;
    this.isclick=false;
    
  }

  isButtonActive: number = 0;

  toggle1( val) {
    console.log(' val ='+ val);
    this.isButtonActive = val;
  }

  //////////////////////////////////////////////////open breakdown form/////////////////////////

  openBreakDownModal(assetId,assetCategory,notificationType,complainedNic,massege,beginDate,dueDate,username,idE){
    console.log("Line1");
    const modalRef = this.modalService.open(ViewBreakeDownAssetComponent);
    modalRef.componentInstance.assetId = assetId;    // Pass vallue to other form component
    modalRef.componentInstance.assetCategory = assetCategory;
    modalRef.componentInstance.notificationType = notificationType;
    modalRef.componentInstance.complainedNic = complainedNic;
    modalRef.componentInstance.massege = massege;
    modalRef.componentInstance.beginDate = beginDate;
    modalRef.componentInstance.dueDate = dueDate;
    modalRef.componentInstance.username = username;


    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });

    
  /////////////////////////////////// update firebase ////////////////////////
console.log("update seen1");
console.log(idE);
console.log(massege);
console.log("update seen2");

console.log(this.list);
this.list.forEach(id => {
  console.log("Update seen3");
  console.log(id);
  if(id.id == idE){
    console.log(assetId);
    console.log("Update seen4");
   
   console.log(id.massege);
   this.firestore.collection('BookAssetNotification').doc(id.id).update({isSeen : '1'});





  }
  
});

  }

  
  ////////////////////////////////////////////////////////////////
  openBookDetails(assetId,assetcategory,notificationType,requestedNic,massege,beginDate,dueDate,username,idE) {
    console.log(requestedNic);
    console.log("Check Bookind Details");
    const modalRef = this.modalService.open(ViewBookingNotificationComponent);
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

/////////////////////////////////// update firebase ////////////////////////
console.log("update seen1");
console.log(idE);
console.log(massege);
console.log("update seen2");

console.log(this.list);
this.list.forEach(id => {
  console.log("Update seen3");
  console.log(id);
  if(id.id == idE){
    console.log(assetId);
    console.log("Update seen4");
   id.massege="seen";
   console.log(id.massege);
   this.firestore.collection('BookAssetNotification').doc(id.id).update({isSeen : '1'});





  }
  
});



  }
  

  ///////////////////////////////// open Employee Details/////////////////////////////////////////////////////////////////////////////

  openEmployeeDetails(assetId,assetcategory,notificationType,requestedNic,massege,beginDate,dueDate,username,idE){
    console.log("ceck iseen-00");
    console.log(requestedNic);
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

/////////////////////////////////// update firebase ////////////////////////
console.log("update seen1");
console.log(idE);
console.log(massege);
console.log("update seen2");

console.log(this.list);
this.list.forEach(id => {
  console.log("Update seen3");
  console.log(id);
  if(id.id == idE){
    console.log(assetId);
    console.log("Update seen4");
    console.log("ceck iseen0");
   console.log(id.massege);
   console.log("ceck iseen0");
   this.firestore.collection('BookAssetNotification').doc(id.id).update({isSeen1 :'1'});
   console.log("ceck iseen1");



  }
  
});





  }

  
  /////////////////////////eject Department Head///////////////////////////////


  openRejectDepartmentH(assetId,assetcategory,notificationType,requestedNic,massege,beginDate,dueDate,username,idE){

    console.log(requestedNic);
    const modalRef = this.modalService.open(ViewAllAssetDetailComponent);
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

/////////////////////////////////// update firebase ////////////////////////
console.log("update seen1");
console.log(idE);
console.log(massege);
console.log("update seen2");

console.log(this.list);
this.list.forEach(id => {
  console.log("Update seen3");
  console.log(id);
  if(id.id == idE){
    console.log(assetId);
    console.log("Update seen4");
  
   console.log(id.massege);
   this.firestore.collection('BookAssetNotification').doc(id.id).update({isSeen : '1'});




  }
  
});



  }


  
 
}

