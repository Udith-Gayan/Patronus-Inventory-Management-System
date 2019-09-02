import { Component, OnInit } from '@angular/core';

import { Employee } from '../../models/employee';
import { Observable } from 'rxjs';
import { HttpService } from '../../service/http.service';
import { error } from 'util';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewAllEmpDelailComponent } from '../../PopupModals/view-all-emp-delail/view-all-emp-delail.component';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.scss']
})
export class ViewEmpComponent implements OnInit {
  data: Observable<Employee[]>;
  employees: Employee[];
  searchTerm :string;
  constructor(private emp:HttpService ,private _router : Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.emp.getAllEmployeee()
    .subscribe(res=>{
      console.log(res)
      this.data = res
      console.log(this.data)

    })
  }

  ////////////////////////////////////////////////////////////////////////////
  deleteEmployee(nic){
    this.emp.deleteEmployee(nic).subscribe((data) => {

                                                       // this.employees.splice(this.employees.indexOf(d),1);
                                                       console.log(data);
                                                         },
                                                         (error)=>{
                                                                    console.log(error);
                                                                  }
                                              );
  }
///////////////////////////////////////////////////////////////////////////////
  editButtonEmployee(epmId:number){
    this._router.navigate(['/edit', epmId]);



  }


  ////
  openFormModal(nic,firstname,email,lastname,gender,contactNo,address,employeeId) {
    const modalRef = this.modalService.open(ViewAllEmpDelailComponent);
    modalRef.componentInstance.nic = nic;
    modalRef.componentInstance.lastname = lastname;
    modalRef.componentInstance.email = email;
    modalRef.componentInstance.gender = gender;
    modalRef.componentInstance.contactNo = contactNo;
    modalRef.componentInstance.address = address;

    modalRef.componentInstance.employeeId = employeeId;
    modalRef.componentInstance.firstname = firstname;    // Pass vallue to other form component

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

}
