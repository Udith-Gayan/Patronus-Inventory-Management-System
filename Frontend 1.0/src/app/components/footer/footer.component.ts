import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  test : Date = new Date();
  
  
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
