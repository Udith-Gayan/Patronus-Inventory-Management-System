import { Component, OnInit } from '@angular/core';

import { NotifiService } from '../notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';

import { BookAsset } from '../../models/BookAssetModel';
////////////
// import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
import { ViewSingleNotificationComponent } from '../../PopupModals/view-single-notification/view-single-notification.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { database } from 'firebase';
import { ViewBreakeDownAssetComponent } from '../../PopupModals/view-breake-down-asset/view-breake-down-asset.component';
import { ViewBookingNotificationComponent } from '../../PopupModals/view-booking-notification/view-booking-notification.component';
import { ViewAllAssetDetailComponent } from '../../PopupModals/view-all-asset-detail/view-all-asset-detail.component';

const Swal = require('sweetalert2');
//////////////////
@Component({
  selector: 'app-testveiw',
  templateUrl: './testveiw.component.html',
  styleUrls: ['./testveiw.component.scss']
})
export class TestveiwComponent implements OnInit {

  list:BookAsset[];
  status:string = sessionStorage.getItem('status');
  nic:string = sessionStorage.getItem('nic');
  fname:string=sessionStorage.getItem('firstname');
  count:number=0;
  constructor(private ser : NotifiService,private firestore:AngularFirestore,private modalService: NgbModal) { }

  ngOnInit() {
    this.ser.Bookasset().subscribe(actionArry => {
      this.list = actionArry.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()

        } as BookAsset;
      })
      
      this.ser.updatedDataSelection(this.list.length);
    });
    this.ser.data.subscribe( data => {
      console.log(data);
    })
  ///////////
  this.firestore.collection('BookAssetNotification',ref => ref.where('assetId','==','OTH98')).valueChanges().subscribe(data=>{
           
    console.log(data.length);
    console.log("data");

    // ---check current user
    // ---get new notification count
    
      })

  ////////test count///////////////

  
    this.firestore.collection('BookAssetNotification',ref => ref.where('username', '>=', this.fname)
      )
      
      .snapshotChanges().subscribe(snapshots => {
        console.log("line -0");
     console.log(snapshots);
     console.log(snapshots.length);
        })
    this.count=+1;
 
    console.log('line 1');
    console.log("line 2-"+this.count);


  }

  onDelete(id:string){
      Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'

        ),
        this.firestore.doc('BookAssetNotification/'+id).delete();
      }
    })




  }
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
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  openBreakModal(assetId,assetCategory,notificationType,complainedNic,massege,beginDate,dueDate,username,idE) {
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

    /////
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
    this.firestore.doc('BookAssetNotification/'+id).update(massege);




  }
  
});
    ////
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
