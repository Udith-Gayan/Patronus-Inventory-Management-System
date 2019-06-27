import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  employee : Employee;
  constructor(private userService : HttpService,private router: Router) {
    this.employee = new Employee();
   }

  ngOnInit() {
    
  }
  onSubmit() {
    
    console.log(this.employee);
    this.userService.login(this.employee).subscribe((response)=>{
      console.log(response);
      if (response['status']==='success')
        this.router.navigateByUrl('/maps')
      else 
        alert('invalid credentials')
    });
  }
}
