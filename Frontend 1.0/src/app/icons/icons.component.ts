import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  employee : Employee;
  constructor(private userService : HttpService) { 
    this.employee = new Employee();
  }

  ngOnInit() {
  }
  submitted = false;



  onSubmit() {
    console.log(this.employee);
    this.submitted = true;
    this.userService.addEmployee(this.employee).subscribe((response)=>{
      console.log(response);
      alert('Registor Successfully');
    });
    // this.userService.addEmployee(this.employee);
    
  }
  logchange(data){
    console.log(data);
  }

}
