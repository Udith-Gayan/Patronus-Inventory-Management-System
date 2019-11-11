import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Asset } from '../asset/asset';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Ass:Asset[]=[];
  Bname:String;
  status:string = sessionStorage.getItem('status');
  constructor() { }

  ngOnInit() {
   
    this.toggle1(1);

    

  }
  isButtonActive: number = 0;

  toggle1( val) {
    console.log(' val ='+ val);
    this.isButtonActive = val;
  }
}
