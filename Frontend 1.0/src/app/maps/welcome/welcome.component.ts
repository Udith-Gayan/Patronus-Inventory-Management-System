import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  firstName:string = sessionStorage.getItem('firstname');
  lastname:string = sessionStorage.getItem('lastname');
   
  constructor() { }

  ngOnInit() {
  }

}
