import { Component, OnInit } from '@angular/core';

import { NotifiService } from '../notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';

import { BookAsset } from '../../models/BookAssetModel';
////////////
// import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
import { ViewSingleNotificationComponent } from '../../PopupModals/view-single-notification/view-single-notification.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
