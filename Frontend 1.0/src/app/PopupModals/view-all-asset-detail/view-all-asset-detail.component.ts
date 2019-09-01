import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-all-asset-detail',
  templateUrl: './view-all-asset-detail.component.html',
  styleUrls: ['./view-all-asset-detail.component.scss']
})
export class ViewAllAssetDetailComponent implements OnInit {

  @Input() assetId: number;
  myForm: FormGroup;

  constructor(public activeModal: NgbActiveModal,  private formBuilder: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// create the form with given data
private createForm() {
  this.myForm = this.formBuilder.group({
    username: '',
    password: ''
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
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


}
