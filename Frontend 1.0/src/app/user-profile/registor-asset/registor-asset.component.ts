import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registor-asset',
  templateUrl: './registor-asset.component.html',
  styleUrls: ['./registor-asset.component.scss']
})
export class RegistorAssetComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
    
  }

  isButtonActive: number = 0;

  toggle1( val) {
    console.log(' val ='+ val);
    this.isButtonActive = val;
  }
  
 
}
