import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { BookAsset } from '../../models/BookAssetModel';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../../service2/http.service';
import { NotifiService } from '../../firebase/notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { formatDate } from '@angular/common';
////////////
//import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
import { FutureDates } from '../../asset/futureDates';

const Swal = require('sweetalert2');
//////////////////

@Component({
  selector: 'app-request-asset-modal',
  templateUrl: './request-asset-modal.component.html',
  styleUrls: ['./request-asset-modal.component.scss']
})
export class RequestAssetModalComponent implements OnInit {

  @Input() assetcategory: string;
  @Input() assetId: string;
  @Input() dateArray: FutureDates[];

  nic = sessionStorage.getItem('nic');
  fname = sessionStorage.getItem('firstname');
  myForm: FormGroup;
  minDate: Date;
  maxDate: Date;

  requestAsset: BookAsset;
  datePipe: any;
  
  today= new Date();
  jstoday = '';
  constructor(public activeModal: NgbActiveModal,  private formBuilder: FormBuilder,private request:HttpService,private ser : NotifiService,private firestore :AngularFirestore) {
    this.createForm();
    this.requestAsset=new BookAsset();
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate() + 30);
    
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');


    //booking to assetId and enmployee Nic
   
    this.requestAsset.requestedNic=this.nic;
   }

  ngOnInit() {
    this.requestAsset.assetId=this.assetId;
    
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
    isSeen:'',
    isSeen1: ''

   
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
  this.ser.FormData = {
    id : null,
    massege:'',
    username:'',
    beginDate:'',
    dueDate:'',
    assetId:'',
    description:'',
    assetcategory:'',
    requestedNic:'',
    notificationType:'',
    isSeen: '',
    isSeen1: '',
    

   
  }
}
onSubmit(form:NgForm){

  
console.log(this.requestAsset);

  this.request.requestAsset(this.requestAsset).subscribe((response) => {
    
    console.log(response);
      
  let now = new Date();
  console.log(this.requestAsset);

  let data = Object.assign({}, form.value);
  delete data.id;
  data.assetcategory=this.assetcategory;
  data.assetId=this.assetId;
  data.Discription=this.jstoday;
  data.notificationType="Requesting";
  data.username=this.fname;
  data.requestedNic=this.nic;
  data.isSeen= "0";
  data.isSeen1= "0";

  if(form.value.id == null){
   
    this.firestore.collection('BookAssetNotification').add(data);
    
    
   
}
  else {
    this.firestore.doc('BookAssetNotification/'+form.value.id).update(data);
    
  }

 

  this.resetForm(form);
  
 
  Swal.fire({
    position: 'center',
    type: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 2000
  })

   
  
  },
  ( error: any) => {
    console.log();
    console.log(error);
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: "Asset has been already reserved during the given period. Please select another period.",
     
    });
 
  }
  
  );

  
 


}

}
