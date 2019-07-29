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

<<<<<<< HEAD
  onSubmit() {

    console.log(this.employee)
  }

=======

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

  onChange(event){
    
  }


>>>>>>> 27344b3a2204c59f091486c79a3af30673e54ab5
}
