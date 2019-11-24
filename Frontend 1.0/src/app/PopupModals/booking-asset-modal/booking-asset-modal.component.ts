import { Component, OnInit, Input, EventEmitter, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { BookAsset } from '../../models/BookAssetModel';
import { HttpService } from '../../service2/http.service';
import { Employee } from '../../firebase/model';
import { NotifiService } from '../../firebase/notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { formatDate } from '@angular/common';
////////////
// import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker/public_api';
import { FutureDates } from '../../asset/futureDates';

const Swal = require('sweetalert2');
//////////////////

@Component({
  selector: 'app-booking-asset-modal',
  templateUrl: './booking-asset-modal.component.html',
  styleUrls: ['./booking-asset-modal.component.scss']
})
export class BookingAssetModalComponent implements OnInit {
  currentDate = new Date();
  minDate: Date;
  maxDate: Date;
  minDate2: Date;
  maxDate2: Date;
  

  
 
  @Input() assetcategory: string;
  @Input() assetId: string;
  @Input() dateArray: FutureDates[];

  nic = sessionStorage.getItem('nic');
  fname = sessionStorage.getItem('firstname');
  myForm: FormGroup;
  error:string;
  bookasset: BookAsset;
  datePipe: any;
  employee:Employee;
  today= new Date();
  jstoday = '';

  form = new FormGroup({
    dateYMD: new FormControl(new Date()),
    
  });
  constructor(public activeModal: NgbActiveModal,  private formBuilder: FormBuilder,private bookservices:HttpService,private ser : NotifiService,private firestore :AngularFirestore) {
    this.createForm();
    this.bookasset=new BookAsset();
    this.employee=new Employee();
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
////begin date hide in this calander
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate() + 30);

    ////due date date hide 

    this.minDate2 = new Date();
    this.maxDate2 = new Date();
    this.minDate2.setDate(this.minDate.getDate());
    this.maxDate2.setDate(this.maxDate.getDate() + 60);


    //booking to assetId and enmployee Nic

    this.bookasset.requestedNic=this.nic;
   }

  ngOnInit() {
    this.bookasset.assetId=this.assetId;

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
    isSeen :'',
    isSeen1: ''


  }
}
onSubmit(form:NgForm){


  console.log(this.bookasset);
  this.bookservices.bookAsset(this.bookasset).subscribe((response) => {
  console.log(response);

  
  
  
  let now = new Date();
  console.log(this.employee);
  let data = Object.assign({}, form.value);
  delete data.id;
  data.assetcategory=this.assetcategory;
  data.assetId=this.assetId;
  data.Discription=this.jstoday;
  data.notificationType="Booking";
  data.username=this.nic;
  data.isSeen="0";
  

  if(form.value.id == null){

    this.firestore.collection('BookAssetNotification').add(data);

  }
  else {
    this.firestore.doc('BookAssetNotification/'+form.value.id).update(data);

  }
  Swal.fire({
    position: 'center',
    type: 'success',
    title: 'Booking has been saved',
    showConfirmButton: false,
    timer: 2000
  })
  this.resetForm(form);
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




