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

@Component({
  selector: 'app-view-single-notification',
  templateUrl: './view-single-notification.component.html',
  styleUrls: ['./view-single-notification.component.scss']
})
export class ViewSingleNotificationComponent implements OnInit {
  @Input() assetCategory: string;
  @Input() assetId: string;
  @Input() username: String;
  @Input() bookNic:string;

  replay:Replay;
  myForm: FormGroup;

  datePipe: any;
 
  today= new Date();
  jstoday = '';
 
  constructor(public activeModal: NgbActiveModal,  private formBuilder: FormBuilder,private bookservices:HttpService,private ser : NotifiService,private firestore :AngularFirestore,private modalService: NgbModal) {
    this.createForm();
    this.replay=new Replay();
    
   
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');


    //booking to assetId and enmployee Nic
   
   
   }

  ngOnInit() {
    this.replay.assetId=this.assetId;
 
   
    
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
  data.assetCategory=this.assetCategory;
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
  console.log();
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
openEmpDetailModal(assetId){
  console.log();
  const modalRef = this.modalService.open(ViewAllEmpDelailComponent);
   
   // Pass vallue to other form component
   modalRef.componentInstance.assetId = assetId;
   
   

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });

}


////////////////////////////////////////////////////////////////////////////Reject Button
//////////////////////////////////////////








}
