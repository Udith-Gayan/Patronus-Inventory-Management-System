import { Component, OnInit } from '@angular/core';

import { BreakDwonNoti } from '../../firebase/BreakDownModel';
import { NotifiService } from '../../firebase/notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';
////////////
// import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
import { ViewSingleNotificationComponent } from '../../PopupModals/view-single-notification/view-single-notification.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const Swal = require('sweetalert2');
//////////////////

@Component({
  selector: 'app-view-breakedown',
  templateUrl: './view-breakedown.component.html',
  styleUrls: ['./view-breakedown.component.scss']
})
export class ViewBreakedownComponent implements OnInit {

  list:BreakDwonNoti[];
  constructor(private ser : NotifiService,private firestore:AngularFirestore,private modalService: NgbModal) { }

  ngOnInit() {
    this.ser.BreakDownAsset().subscribe(actionArry => {
      this.list = actionArry.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()

        } as BreakDwonNoti;
      })
      this.ser.updatedDataSelection(this.list.length);
    });
    this.ser.data.subscribe( data => {
      console.log(data);
    })
  }

  onDelete(id:string){
    if(Swal.fire({
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
        this.firestore.doc('BreakDwonAsset/'+id).delete();
      }
    })){

    }

  }
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
