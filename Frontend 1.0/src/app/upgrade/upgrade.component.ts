import { Component, OnInit } from '@angular/core';
import { ReadVarExpr } from '@angular/compiler';
//DialogBox
// import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';

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


  constructor() { }

  ngOnInit() {
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
 }
