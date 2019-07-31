import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../service/http.service';
import{ Event,Router,NavigationStart,NavigationEnd, RouterEvent} from '@angular/router'


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  employee : Employee;
  showLoadingIndicator =true;
  imgUrl:String="/assets/img/1.jpeg";
  constructor(private userService : HttpService,private _router:Router) { 
    this.employee = new Employee();
    this._router.events.subscribe((RouterEvent:Event)=>{

      if(RouterEvent instanceof NavigationStart){
        this.showLoadingIndicator=true;
      }
      if(RouterEvent instanceof NavigationEnd){
        this.showLoadingIndicator=false;
      }
    })
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
