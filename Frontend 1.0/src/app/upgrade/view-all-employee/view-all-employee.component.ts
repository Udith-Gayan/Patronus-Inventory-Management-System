import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-view-all-employee',
  templateUrl: './view-all-employee.component.html',
  styleUrls: ['./view-all-employee.component.scss']
})



export class ViewAllEmployeeComponent implements OnInit {

  email:string = sessionStorage.getItem('email');
  Fname:string = sessionStorage.getItem('firstname');
  Lname:string = sessionStorage.getItem('lastname');
  status:string = sessionStorage.getItem('status');

  AllEmp:Observable<Employee>
  today=new Date();
  searchTerm :string;
  constructor(private empservice: HttpService) { }

  ngOnInit() {
    this.empservice.getAllEmployeee().subscribe(Response =>{
     this.AllEmp = Response;

    console.log(Response);

    })
  }

}
