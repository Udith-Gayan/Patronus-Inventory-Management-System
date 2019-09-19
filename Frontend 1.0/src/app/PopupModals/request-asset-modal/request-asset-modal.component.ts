import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { BookAsset } from '../../models/BookAssetModel';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../../service2/http.service';
import { NotifiService } from '../../firebase/notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-request-asset-modal',
  templateUrl: './request-asset-modal.component.html',
  styleUrls: ['./request-asset-modal.component.scss']
})
export class RequestAssetModalComponent implements OnInit {

  @Input() assetCategory: string;
  @Input() assetId: string;
  
  nic = sessionStorage.getItem('nic');
  fname = sessionStorage.getItem('firstname');
  myForm: FormGroup;

  requestAsset: BookAsset;
  datePipe: any;
  
  today= new Date();
  jstoday = '';
  constructor(public activeModal: NgbActiveModal,  private formBuilder: FormBuilder,private request:HttpService,private ser : NotifiService,private firestore :AngularFirestore) {
    this.createForm();
    this.requestAsset=new BookAsset();
    
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
  this.ser.FormData = {
    id : null,
    massege:'',
    username:'',
    beginDate:'',
    dueDate:'',
    assetId:'',
    description:'',
    assetCategory:'',
    requestedNic:'',
    notificationType:'',

   
  }
}
onSubmit(form:NgForm){

  
console.log(this.requestAsset);

  this.request.requestAsset(this.requestAsset).subscribe((response) => {
    
    console.log(response);
   
  
  });

  
 
  
  let now = new Date();
  console.log(this.requestAsset);

  let data = Object.assign({}, form.value);
  delete data.id;
  data.assetCategory=this.assetCategory;
  data.assetId=this.assetId;
  data.Discription=this.jstoday;
  data.notificationType="Requesting";
  data.username=this.fname;

  if(form.value.id == null){
   
    this.firestore.collection('BookAssetNotification').add(data);
    
    
   
}
  else {
    this.firestore.doc('BookAssetNotification/'+form.value.id).update(data);
    
  }

  alert('Request Successfully');

  this.resetForm(form);
  
 



}
}
