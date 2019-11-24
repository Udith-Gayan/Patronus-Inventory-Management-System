import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { BookAsset } from '../../models/BookAssetModel';
import { Employee } from '../../firebase/model';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../../service2/http.service';
import { NotifiService } from '../../firebase/notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { formatDate } from '@angular/common';
import { ViewAllAssetDetailComponent } from '../view-all-asset-detail/view-all-asset-detail.component';
import { ViewSingleAssetNotiComponent } from '../view-single-asset-noti/view-single-asset-noti.component';
import { ViewAllEmpDelailComponent } from '../view-all-emp-delail/view-all-emp-delail.component';
import { Replay } from '../../models/NotifiReplay';
import { Observable } from 'rxjs';
import { Asset } from '../../asset/asset';
import { BookingAssetModalComponent } from '../booking-asset-modal/booking-asset-modal.component';
import { ViewRequestAndBookingEmpDetailComponent } from '../view-request-and-booking-emp-detail/view-request-and-booking-emp-detail.component';
import { pendinRequest } from '../../models/pendingRequestModel';
////////////
//import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';

const Swal = require('sweetalert2');
//////////////////

@Component({
  selector: 'app-view-single-notification',
  templateUrl: './view-single-notification.component.html',
  styleUrls: ['./view-single-notification.component.scss']
})
export class ViewSingleNotificationComponent implements OnInit {
  @Input() assetcategory: string;
  @Input() assetId: string;
  @Input() username: String;
  @Input() id: string;
  @Input() requestedNic: string;
  @Input() begingDate: string;
  @Input() returnDate: string;
  
 

  status:string = sessionStorage.getItem('status');
  replay:Replay;
  myForm: FormGroup;
  num:number;
  datePipe: any;

  today= new Date();
  jstoday = '';
 data:Observable<Asset>
 pendingRequestDH:Observable<pendinRequest>
 
  constructor(public activeModal: NgbActiveModal,  private formBuilder: FormBuilder,private bookservices : HttpService, private ser : NotifiService,private firestore :AngularFirestore,private modalService: NgbModal,private asset : HttpService) {
    this.createForm();
    this.replay=new Replay();
    
   
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');


    //booking to assetId and enmployee Nic
   
   
   }

  ngOnInit() {
    this.replay.assetId=this.assetId;
    
  
   
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
    date:''

   
  });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// close the modal
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// submit the form



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

resetForm(form ? : NgForm){
  if(form != null)
  form.resetForm();
  this.ser.ReplyNoti = {
    id : null,
    assetId: '',
    replayMsg: '',
    date:'',
    userNic:''

    

   
  }
}
////Book asset Registation///////////////////////////////////////////////////////////////
onSubmit(form:NgForm){

  
console.log(this.replay);



  
 
  
  let now = new Date();
  console.log(this.replay);

  let data = Object.assign({}, form.value);
  delete data.id;
  data.assetcategory=this.assetcategory;
  data.assetId=this.assetId;
  data.Discription=this.jstoday;
 
  if(form.value.id == null){
   
    this.firestore.collection('ReplayNotification').add(data);
    
    
   
}
  else {
    this.firestore.doc('ReplayNotification/'+form.value.id).update(data);
    
  }

  alert('Replay Successfully');

  this.resetForm(form);
  
 



}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//view more detail of Asset



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
    console.log(this.replay.id);
    
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
    console.log(this.replay.id);

    
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

////////////////////////////////////////////Accept Asset manger///////////////////////////////

acceptAM(username,requestedNic: number,assetId: string){
  console.log("Line 1");
  console.log(username);
  
  console.log(requestedNic);
  console.log(assetId);
  
 this.asset.approveRequestAM(requestedNic).subscribe((response)=>{
    console.log(response);

  
    
    
  });

  //////stored by firebase

  console.log("line 10");
  let data = Object.assign({});
  delete data.id;
  
  data.Discription=this.jstoday;
  data.notificationType="acceptAM";
  
  data.massege= requestedNic;
  data.assetId=assetId;
  data.requestedNic=username;
  data.isSeen= "0";
  
  

 
   
    this.firestore.collection('BookAssetNotification').add(data);
    console.log("line 6");


    ////////////dialog box

    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 2000
    })


}

//////////////////////////////////////////Reject Asset manger//////////////////////////////////////////

rejectAM(username,requestedNic : number,assetId: string){
  console.log("line-999");
  console.log(username);
  console.log(requestedNic);
  console.log(assetId);
  console.log("line-1000");
  
  this.asset.rejectRequestAM(requestedNic).subscribe((response)=>{
     console.log(response);
     console.log("line-1001");
     console.log("line-1002");

   });

   //////stored by firebase

console.log("line 10");
let data = Object.assign({});
delete data.id;

data.Discription=this.jstoday;
data.notificationType="rejectAM";
data.assetId=assetId;
data.requestedNic= requestedNic;
data.massege=username;
data.isSeen="0";




 
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
