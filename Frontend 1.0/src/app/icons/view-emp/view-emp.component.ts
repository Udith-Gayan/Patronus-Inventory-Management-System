import { Component, OnInit } from '@angular/core';

import { Employee } from '../../models/employee';
import { Observable } from 'rxjs';
import { HttpService } from '../../service/http.service';
import { error } from 'util';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.scss']
})
export class ViewEmpComponent implements OnInit {
  data: Observable<Employee[]>;
  employees: Employee[];
  searchTerm :string;
  constructor(private emp:HttpService  ) { }

  ngOnInit() {
    this.emp.getAllEmployeee()
    .subscribe(res=>{
      console.log(res)
      this.data = res
      console.log(this.data)

    })
  }
  deleteEmployee(d){
    this.emp.deleteEmployee(d.nic).subscribe((data) => {
     
      this.employees.splice(this.employees.indexOf(d),1);
    },(error)=>{
      console.log(error);
    });
  }

}
