import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BookAsset } from '../../models/BookAssetModel';
import { HttpService } from '../../service2/http.service';


@Component({
  selector: 'app-booking-asset-modal',
  templateUrl: './booking-asset-modal.component.html',
  styleUrls: ['./booking-asset-modal.component.scss']
})
export class BookingAssetModalComponent implements OnInit {
  @Input() assetId: number;
  myForm: FormGroup;

  bookasset: BookAsset;

  constructor(public activeModal: NgbActiveModal,  private formBuilder: FormBuilder,private bookservices:HttpService) {
    this.createForm();
    this.bookasset=new BookAsset();
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

 

  this.bookservices.bookAsset(this.bookasset).subscribe((response) => {
    console.log(response);
    alert('Booking Successfully');
  });

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}