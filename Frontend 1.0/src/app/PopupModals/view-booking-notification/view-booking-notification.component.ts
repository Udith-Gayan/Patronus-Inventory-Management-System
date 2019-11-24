import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../../service2/http.service';
import { NotifiService } from '../../firebase/notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { formatDate } from '@angular/common';
import { ViewSingleAssetNotiComponent } from '../view-single-asset-noti/view-single-asset-noti.component';
import { ViewRequestAndBookingEmpDetailComponent } from '../view-request-and-booking-emp-detail/view-request-and-booking-emp-detail.component';
import { Observable } from 'rxjs';
import { Asset } from '../../asset/asset';

import { pendinRequest } from '../../models/pendingRequestModel';
////////////
//import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';

const Swal = require('sweetalert2');
//////////////////



@Component({
  selector: 'app-view-booking-notification',
  templateUrl: './view-booking-notification.component.html',
  styleUrls: ['./view-booking-notification.component.scss']
})
export class ViewBookingNotificationComponent implements OnInit {
 
  today= new Date();
  jstoday = '';
  myForm: FormGroup;
  
 pendingRequestDH:Observable<pendinRequest>
  status:string = sessionStorage.getItem('status');
  data:Observable<Asset>
  constructor(public activeModal: NgbActiveModal,  private formBuilder: FormBuilder,private bookservices : HttpService, private ser : NotifiService,private firestore :AngularFirestore,private modalService: NgbModal,private asset : HttpService) {
    this.createForm();
  
    
   
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');


    //booking to assetId and enmployee Nic
   
   
   }

  ngOnInit() {
   
    this.asset.getAllAssets().subscribe(res=>{

      console.log(res);
      this.data = res
      console.log(this.data)
      
    })

    ////////////////get assign Table/////////////

console.log("Line 2");
this.asset.getPendingRequestDH().subscribe(res=>{
  console.log("Line 3");
  console.log(res);
  console.log(res.id);
  this.pendingRequestDH = res
  console.log(this.pendingRequestDH)
})


   


   
    
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// create the form with given data
private createForm() {
  this.myForm = this.formBuilder.group({
    assetId:'',
    username: '',
    beginDate:'',
    dueDate:'',
    massege:'',
    date:'',
    isSeen: ''

   
  });
  }

  

//////////////////////////////////////////////////////////////////////////view Asset Detailon popup
openAssetDetailModal(assetId){
  console.log(assetId);
  const modalRef = this.modalService.open(ViewSingleAssetNotiComponent);
  modalRef.componentInstance.assetId = assetId;
   
   // Pass vallue to other form component
   
   

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });

}

/////////////////////////////////////////////////////////////////////////// View Employee Delail on Popup 
openEmpDetailModal(requestedNic){
  console.log("requested ID");
  console.log(requestedNic);
  console.log("requested ID");
  const modalRef = this.modalService.open(ViewRequestAndBookingEmpDetailComponent);
   
   // Pass vallue to other form component
   modalRef.componentInstance.requestedNic = requestedNic;
   ////
   //modalRef.componentInstance.username = username;
   //console.log(username);
   ////

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });

}


////////////////////////////////////////Accept Department Head/////////////////////////

acceptDH(num,requestedNic:string,assetId:string,description:string,beginDate : string,dueDate : string){
  console.log("Line 1");
  console.log(num);
  console.log(requestedNic);
  console.log(assetId);
  
  this.asset.approveRequestDH(num).subscribe((response)=>{
    console.log(response);
    
    
  });
  console.log("line 10");
  let data = Object.assign({});
  delete data.id;
  
  data.Discription=this.jstoday;
  data.notificationType="RequestAM";
  data.assetId=assetId;
  data.requestedNic=num;
  data.massege=description;
  data.username=requestedNic;
  data.beginDate=beginDate;
  data.dueDate=dueDate;
  data.isSeen= "0";
  data.isSeen1= "0";
  

 
   
    this.firestore.collection('BookAssetNotification').add(data);
    console.log("line 44");
    
   ///////////////dialog box

   Swal.fire({
    position: 'center',
    type: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })

 
}

////////////////////////////////////////////reject Department head////////////////////////////////


rejectDH(num1 : number,requestedNic:string,assetId:string){
  
  console.log(num1);
  
  this.asset.rejectRequestDH(num1).subscribe((response)=>{
    console.log(response);
    

    
  });

  ////send to fire base massage to employee///////////

  console.log("line 10");
  let data = Object.assign({});
  delete data.id;
  
  data.Discription=this.jstoday;
  data.notificationType="Reject";
  data.assetId=assetId;
  data.requestedNic= requestedNic;
  data.massege="You'r Request is reject";
  data.isSeen="0";
  data.isSeen1= "0";
  
  

 
   
    this.firestore.collection('BookAssetNotification').add(data);
    console.log("line 6");


 

     ///////Dialog Box
     let timerInterval
      Swal.fire({
      title: 'Succes Reject Request',
      html: 'I will close in <strong></strong> milliseconds.',
      timer: 2000,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          Swal.getContent().querySelector('strong')
            .textContent = Swal.getTimerLeft()
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
      }).then((result) => {
        if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.timer
        ) {
          console.log('I was closed by the timer')
        }
      })
}


}
