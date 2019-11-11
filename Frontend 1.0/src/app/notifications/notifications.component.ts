import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  status:string = sessionStorage.getItem('status');
  constructor() {}
 
  
  ngOnInit() {
    this.toggle1(1);
  }
  isButtonActive: number = 0;

  toggle1( val) {
    console.log(' val ='+ val);
    this.isButtonActive = val;
  }
}
