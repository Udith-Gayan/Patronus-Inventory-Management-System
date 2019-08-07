import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../service/http.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-registor-emp',
  templateUrl: './registor-emp.component.html',
  styleUrls: ['./registor-emp.component.scss']
})
export class RegistorEmpComponent implements OnInit {
employee:Employee;
imgUrl:String="/assets/img/1.jpeg";
  constructor(private userservice:HttpService ,private route: ActivatedRoute) {

    this.employee=new Employee();
   }

  ngOnInit() {
    this.route.paramMap.subscribe(param =>{
      const empId=+param.get('id');
      if(empId){
        this.getEmp(empId);
      }
    })

    
  }
  getEmp(id:number){
    this.userservice.getAllEmployeee().subscribe();
      
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

  onChange(event){
    
  }


}
