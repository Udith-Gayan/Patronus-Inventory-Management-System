import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { BookAsset } from '../../models/BookAssetModel';
import { HttpService } from '../../service2/http.service';
import { Employee } from '../../firebase/model';
import { NotifiService } from '../../firebase/notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-booking-asset-modal',
  templateUrl: './booking-asset-modal.component.html',
  styleUrls: ['./booking-asset-modal.component.scss']
})
export class BookingAssetModalComponent implements OnInit {
  @Input() assetId: number;
  
  myForm: FormGroup;

  bookasset: BookAsset;
  datePipe: any;
  employee:Employee;
  constructor(public activeModal: NgbActiveModal,  private formBuilder: FormBuilder,private bookservices:HttpService,private ser : NotifiService,private firestore :AngularFirestore) {
    this.createForm();
    this.bookasset=new BookAsset();
    this.employee=new Employee();
   }

  ngOnInit() {
    
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// create the form with given data
private createForm() {
  this.myForm = this.formBuilder.group({
    username: '',
   
    beginDate:'',
    dueDate:'',
    massege:''

   
  });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// close the modal
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// submit the form

private submitForm() {
  this.activeModal.close(this.myForm.value);
  console.log(this.bookasset);

 

  this.bookservices.bookAsset(this.employee).subscribe((response) => {
    console.log(response);
    alert('Booking Successfully');
  });

}

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
    OrderDate:''

   
  }
}
onSubmit(form:NgForm){
  this.bookservices.bookAsset(this.employee).subscribe((response) => {
    console.log(response);
    alert('Booking Successfully');
  });
  
  let now = new Date();
  console.log(this.employee);

  let data = Object.assign({}, form.value);
  delete data.id;
  data.username=this.assetId;
  if(form.value.id == null){
    alert('fill this feild');
    this.firestore.collection('employeee').add(data);
    
   
}
  else
    this.firestore.doc('BookAssetNotification/'+form.value.id).update(data);
  this.resetForm(form);
  
 alert('Do you Want Book this One');

}



}




  