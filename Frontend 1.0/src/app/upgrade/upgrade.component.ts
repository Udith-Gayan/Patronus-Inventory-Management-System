import { Component, OnInit } from '@angular/core';
import { ReadVarExpr } from '@angular/compiler';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent implements OnInit {
imgUrl:String="/assets/img/1.jpeg";
FileToUpload:File=null;

  constructor() { }

  ngOnInit() {
  }
  handleFileInput(File:FileList){

    this.FileToUpload=File.item(0);
    
    
  }
}
