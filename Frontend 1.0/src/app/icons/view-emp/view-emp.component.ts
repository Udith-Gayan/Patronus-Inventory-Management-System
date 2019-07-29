import { Component, OnInit } from '@angular/core';

import { Employee } from '../../models/employee';
import { Observable } from 'rxjs';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.scss']
})
export class ViewEmpComponent implements OnInit {
  data: Observable<Employee[]>;
  employees: Employee[];
  
  constructor(private emp:HttpService  ) { }

  ngOnInit() {
    this.emp.getAllEmployeee()
    .subscribe(res=>{
      console.log(res)
      this.data = res
      console.log(this.data)

    })
  }
  deleteEmployee(employee:Employee):void{
    this.emp.deleteEmployee(employee).subscribe(d => {
      this.employees=this.employees.filter(u => u !== employee);
    })
  }

}
