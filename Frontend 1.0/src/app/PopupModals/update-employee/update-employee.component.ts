import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { HttpService } from '../../service/http.service';

import { Employee } from '../../models/employee';
////////////
// import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';

const Swal = require('sweetalert2');
//////////////////

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  @Input() nic: string;
  myForm: any;
 employee:Employee;
 status:string = sessionStorage.getItem('status');
  constructor(public activeModal: NgbActiveModal,  private formBuilder: FormBuilder,private userService:HttpService) {
    this.createForm();
    this.employee=new Employee();
    
   
   }

  ngOnInit() {
   console.log(this.nic);
   
   this.employee.nic=this.nic;

    
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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


  ///////////////////////////////////submit Form///////////////////////////

  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
onSubmit() {
  console.log(this.employee);

  console.log(this.employee);
  console.log(this.nic)

  this.userService.updateEmployee(this.employee).subscribe((response) => {
    console.log(response);
    this.resetForm();
    this.ngOnInit();
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Employee has been Updated',
      showConfirmButton: false,
      timer: 1500,
      
    },
    
   
    ( error: any) => {

      alert('Please Check the AssetID ');
       
     

    }
    
    )

  });
  
  // this.userService.addEmployee(this.employee);
  this.ngOnInit();
}
resetForm(){
  this.employee.email='';
  this.employee.address='';
  this.employee.contactNo='';
  this.employee.firstname='';
  this.employee.gender='';
  this.employee.img='';
  this.employee.lastname='';
  this.employee.nic='';
  this.employee.password='';
  this.employee.status='';
  

}

  

}
