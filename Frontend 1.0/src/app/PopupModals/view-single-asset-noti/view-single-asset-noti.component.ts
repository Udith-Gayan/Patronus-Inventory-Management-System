import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../../service2/http.service';
import { Observable } from 'rxjs';
import { Asset } from '../../asset/asset';

@Component({
  selector: 'app-view-single-asset-noti',
  templateUrl: './view-single-asset-noti.component.html',
  styleUrls: ['./view-single-asset-noti.component.scss']
})
export class ViewSingleAssetNotiComponent implements OnInit {

  @Input() assetId: number;
  myForm: FormGroup;
  
  data: Observable<Asset[]>;
  constructor(public activeModal: NgbActiveModal,  private formBuilder: FormBuilder,private asset : HttpService) {
    this.createForm();
   }

  ngOnInit() {
    this.asset.getAllAssets().subscribe(res=>{

      console.log(res);
      this.data = res
      console.log(this.data)
    })
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
