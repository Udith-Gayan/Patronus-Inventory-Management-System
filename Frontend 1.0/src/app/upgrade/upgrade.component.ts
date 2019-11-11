import { Component, OnInit } from '@angular/core';
import { ReadVarExpr } from '@angular/compiler';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//DialogBox
// import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
import { Observable, from } from 'rxjs';

import { HttpService } from '../service2/http.service';
import { pendinRequest } from '../models/pendingRequestModel';

const Swal = require('sweetalert2');
//////////////////


@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent implements OnInit {
imgUrl:String="/assets/img/1.jpeg";
FileToUpload:File=null;
color:boolean=true;

pendingRequestDH:Observable<pendinRequest>
  constructor(private asset:HttpService) { }

  ngOnInit() {
    this.toggle1(1);
    /////////////////Testing//////////////////////////
   /* this.asset.getPendingRequestAM().subscribe(res=>{

      
      console.log("Line 1");
      console.log(res);
      this.pendingRequestDH = res
      console.log(this.pendingRequestDH)
    })*/
    console.log("Line 2");
    this.asset.getPendingRequestDH().subscribe(res=>{
      console.log("Line 3");
      console.log(res);
      console.log(res.id);
      this.pendingRequestDH = res
      console.log(this.pendingRequestDH)
    })
//////////////////////////////////////////////////////////////////



  }

  
abc(){
  console.log("line1 Sajith");
  this.color=false;
  console.log(this.color);
}


  handleFileInput(File:FileList){

    this.FileToUpload=File.item(0);


  }
test(){
  const ipAPI = 'https://api.ipify.org?format=json'

  Swal.queue([{
    title: 'Your public IP',
    confirmButtonText: 'Show my public IP',
    text:
      'Your public IP will be received ' +
      'via AJAX request',
    showLoaderOnConfirm: true,
    preConfirm: () => {
      return fetch(ipAPI)
        .then(response => response.json())
        .then(data => Swal.insertQueueStep(data.ip))
        .catch(() => {
          Swal.insertQueueStep({
            type: 'error',
            title: 'Unable to get your public IP'
          })
        })
    }
  }])

}
isButtonActive: number = 0;

  toggle1( val) {
    console.log(' val ='+ val);
    this.isButtonActive = val;
  }
 }
