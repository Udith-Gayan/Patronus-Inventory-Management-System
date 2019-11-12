import { Component, OnInit } from '@angular/core';

import { Employee } from '../../models/employee';
import { Observable } from 'rxjs';
import { HttpService } from '../../service/http.service';
import { error } from 'util';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewAllEmpDelailComponent } from '../../PopupModals/view-all-emp-delail/view-all-emp-delail.component';
import { DomSanitizer } from '@angular/platform-browser';

////////////
// import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
import { UpdateEmployeeComponent } from '../../PopupModals/update-employee/update-employee.component';

const Swal = require('sweetalert2');
//////////////////

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.scss']
})
export class ViewEmpComponent implements OnInit {
  data: Observable<Employee[]>;
  tempo: any;
  employees: Employee[];
  searchTerm :string;
  status:string = sessionStorage.getItem('status');
  submitted = false;
  message: string;
  dd: Employee;
  i: number;
  constructor(private emp:HttpService ,private _router : Router, private modalService: NgbModal, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.emp.getAllEmployeee()
    .subscribe(res => {
      console.log(res);
       this.tempo = res;
       this.data = res;
       this.i = -1;
       for (this.dd of res ) {
        console.log('Usersssss');
          this.i++;
          console.log(this.dd.img.substring(36, this.dd.img.length - 2));
          this.data[this.i].img = this.domSanitizer.bypassSecurityTrustUrl(this.dd.img.substring(36, this.dd.img.length - 2));
          // this.data[this.i].img = this.dd.img.substring(36, this.dd.img.length - 2);
       }


      console.log('Dataaaa');
      console.log(this.data);

    });
  }

  ////////////////////////////////////////////////////////////////////////////
  deleteEmployee(nic){
    
     
                                                       // this.employees.splice(this.employees.indexOf(d),1);
                                                       console.log();
                                                       Swal.fire({
                                                        title: 'Are you sure?',
                                                        text: "You won't be able to revert this!",
                                                        type: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonColor: '#3085d6',
                                                        cancelButtonColor: '#d33',
                                                        confirmButtonText: 'Yes, delete it!'
                                                      }).then((result) => {
                                                      

                                                        this.emp.deleteEmployee(nic).subscribe((data) => {
                                                            this.ngOnInit();
                                                              this.ngOnInit();
                                                        console.log("Line23");
                                                        if (result.value) {
                                                          Swal.fire(
                                                            'Deleted!',
                                                            'Your file has been deleted.',
                                                            'success'
                                                          )
                                                        }
                                                      })
 },
                                                         (error)=>{
                                                                    console.log(error);
                                                                    Swal.fire({
                                                                      type: 'error',
                                                                      title: 'Oops...',
                                                                      text: 'Deletion Not Allowed!',
                                                                      footer: ''
                                                                    })
                                                                  }
                                              );
                                             
  }
///////////////////////////////////////////////////////////////////////////////
  editButtonEmployee(epmId:number){
    this._router.navigate(['/edit', epmId]);



  }


  ////
  openFormModal(nic,firstname,email,lastname,gender,contactNo,address,employeeId) {
    this.ngOnInit();
    this.ngOnInit();
    this.ngOnInit();
    const modalRef = this.modalService.open(ViewAllEmpDelailComponent);
    modalRef.componentInstance.nic = nic;
    modalRef.componentInstance.lastname = lastname;
    modalRef.componentInstance.email = email;
    modalRef.componentInstance.gender = gender;
    modalRef.componentInstance.contactNo = contactNo;
    modalRef.componentInstance.address = address;
  

    modalRef.componentInstance.employeeId = employeeId;
    modalRef.componentInstance.location = location;
    modalRef.componentInstance.firstname = firstname;    // Pass vallue to other form component

    modalRef.result.then((result) => {
      console.log(result);
      this.ngOnInit();
    }).catch((error) => {
      console.log(error);
    });
  }


  //////////////Block employee/////////////////////
  BlockEmp(nic : string){
  console.log("line 1");
 console.log(nic);
 this.emp.BlockEmp(nic).subscribe((response)=>{
  console.log(response);
  this.ngOnInit();
  
});


  }

  /////////////////////Unblock/////////////////
  UnBlockEmp(nic : string){
    console.log(nic);
    this.emp.UnBlockEmp(nic).subscribe((response)=>{
     console.log(response);
     this.ngOnInit();
     
   });
   
   
     }

     // Open update popup form
     openUpdateEmp1(nic) {
    console.log("line 1");
    this.ngOnInit();
    const modalRef = this.modalService.open(UpdateEmployeeComponent);
      // Pass vallue to other form component
      modalRef.componentInstance.nic = nic;
    

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }


}
