import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-single-emp-noti',
  templateUrl: './view-single-emp-noti.component.html',
  styleUrls: ['./view-single-emp-noti.component.scss']
})
export class ViewSingleEmpNotiComponent implements OnInit {

  @Input() username: string;
  @Input() assetId: string;
  @Input() requestedNic: string;
  myForm: FormGroup;

  constructor(public activeModal: NgbActiveModal,  private formBuilder: FormBuilder) {
    this.createForm();
   }


  ngOnInit() {
  }
  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  private submitForm() {
    this.activeModal.close(this.myForm.value);
  }
}
