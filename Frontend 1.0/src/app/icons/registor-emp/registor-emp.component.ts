import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';

import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-registor-emp',
  templateUrl: './registor-emp.component.html',
  styleUrls: ['./registor-emp.component.scss']
})
export class RegistorEmpComponent implements OnInit {
employee:Employee;
imgUrl:String="/assets/img/1.jpeg";
  constructor(private userservice:HttpService) {

    this.employee=new Employee();
   }

  ngOnInit() {
  }

 
  onSubmit() {
    console.log(this.employee);
   
    this.userservice.addEmployee(this.employee).subscribe((response)=>{
      console.log(response);
      alert('Registor Successfully');
    });
    // this.userService.addEmployee(this.employee);
    
  }
  logchange(data){
    console.log(data);
  }


}
