import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../../service/http.service';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-view-request-and-booking-emp-detail',
  templateUrl: './view-request-and-booking-emp-detail.component.html',
  styleUrls: ['./view-request-and-booking-emp-detail.component.scss']
})
export class ViewRequestAndBookingEmpDetailComponent implements OnInit {
empdetail:Observable<Employee>
  @Input() nic: string;
  @Input() firstname: string;
  @Input() requestedNic: string;

  myForm: FormGroup;

  constructor(public activeModal: NgbActiveModal,  private formBuilder: FormBuilder,private emp:HttpService) {
    this.createForm();
   }


  ngOnInit() {
    this.emp.getAllEmployeee()
    .subscribe(res=>{
      console.log(res)
      this.empdetail = res
      console.log(this.empdetail)

    })
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
