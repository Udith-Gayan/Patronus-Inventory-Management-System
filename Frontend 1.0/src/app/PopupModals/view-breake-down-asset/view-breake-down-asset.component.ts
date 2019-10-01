import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifiService } from '../../firebase/notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Asset } from '../../asset/asset';
import { HttpService } from '../../service2/http.service';
import { ViewRequestAndBookingEmpDetailComponent } from '../view-request-and-booking-emp-detail/view-request-and-booking-emp-detail.component';

@Component({
  selector: 'app-view-breake-down-asset',
  templateUrl: './view-breake-down-asset.component.html',
  styleUrls: ['./view-breake-down-asset.component.scss']
})
export class ViewBreakeDownAssetComponent implements OnInit {

  @Input() assetcategory: string;
  @Input() assetId: string;
  @Input() username: String;
  @Input() bookNic:string;

  
  myForm: FormGroup;

  datePipe: any;
 
  today= new Date();
  jstoday = '';
 data:Observable<Asset>
 
  constructor(public activeModal: NgbActiveModal,  private formBuilder: FormBuilder,private ser : NotifiService,private firestore :AngularFirestore,private modalService: NgbModal,private asset : HttpService) {
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

/////////////////////////////////////////////////////////////////////////// View Employee Delail on Popup 
openEMPDetailModal(complainedNic){
  console.log(complainedNic);
  const modalRef = this.modalService.open(ViewRequestAndBookingEmpDetailComponent);
   
   // Pass vallue to other form component
   modalRef.componentInstance.requestedNic = complainedNic;
   console.log(complainedNic);
   

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });

}

}
