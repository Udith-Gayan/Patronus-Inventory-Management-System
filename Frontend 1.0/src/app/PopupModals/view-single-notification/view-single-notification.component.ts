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

@Component({
  selector: 'app-view-single-notification',
  templateUrl: './view-single-notification.component.html',
  styleUrls: ['./view-single-notification.component.scss']
})
export class ViewSingleNotificationComponent implements OnInit {
  @Input() assetCategory: string;
  @Input() assetId: string;

  
  myForm: FormGroup;

  bookasset: BookAsset;
  datePipe: any;
  employee:Employee;
  today= new Date();
  jstoday = '';
 
  constructor(public activeModal: NgbActiveModal,  private formBuilder: FormBuilder,private bookservices:HttpService,private ser : NotifiService,private firestore :AngularFirestore,private modalService: NgbModal) {
    this.createForm();
    this.bookasset=new BookAsset();
    this.employee=new Employee();
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');


    //booking to assetId and enmployee Nic
   
    this.bookasset.requestedNic="961341175v";
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
    AssetCategory: '' ,
    BrandName:'',
    Discription:'',
    ReturnDate:'',
    OrderDate:'',
    notificationType:'',

   
  }
}
onSubmit(form:NgForm){

  
console.log(this.bookasset);

 

  
 
  
  let now = new Date();
  console.log(this.employee);

  let data = Object.assign({}, form.value);
  delete data.id;
  data.assetCategory=this.assetCategory;
  data.assetId=this.assetId;
  data.Discription=this.jstoday;
  data.notificationType="Booking";

  if(form.value.id == null){
   
    this.firestore.collection('BookAssetNotification').add(data);
    
    
   
}
  else {
    this.firestore.doc('BookAssetNotification/'+form.value.id).update(data);
    
  }

  alert('Booking Successfully');

  this.resetForm(form);
  
 



}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//view more detail of Asset

openDetailModal(){
  console.log();
  const modalRef = this.modalService.open(ViewAllAssetDetailComponent);
   
   // Pass vallue to other form component

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });

}


}
