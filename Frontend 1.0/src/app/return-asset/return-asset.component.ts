import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-asset',
  templateUrl: './return-asset.component.html',
  styleUrls: ['./return-asset.component.scss']
})
export class ReturnAssetComponent implements OnInit {

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
