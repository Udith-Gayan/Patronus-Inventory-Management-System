import { Component, OnInit } from '@angular/core';
import { ReadVarExpr } from '@angular/compiler';

  import { from } from 'rxjs';
import { ConfireDialogService } from '../DialogModals/Confire-Dialog.service';
import {  ConfirmDialogModule } from "../DialogModals/confirmeDialog.module";  
  
  
  
 
@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent implements OnInit {

  constructor(public confirmDialogService : ConfireDialogService) { }

  ngOnInit() {
  }
  

  //////////////////////////////////////////popup window in confirm Dialog Box//////////////////////  but this method not working

  showDialog() {  
    console.log("line1");
    this.confirmDialogService.confirmThis("Are you sure to delete?",function() {  
      console.log("line2");
      alert("Yes clicked");  
    }, function () {  
      alert("No clicked");  
      console.log("line3");
    })  
  }  

  /////////////////////////////////////////
}
