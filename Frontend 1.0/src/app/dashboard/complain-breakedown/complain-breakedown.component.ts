import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotifiService } from '../../firebase/notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { BreakDwonNoti } from '../../firebase/BreakDownModel';
import { HttpService } from '../../service2/http.service';
import { formatDate } from '@angular/common';

////////////
// import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';

const Swal = require('sweetalert2');
//////////////////
@Component({
  selector: 'app-complain-breakedown',
  templateUrl: './complain-breakedown.component.html',
  styleUrls: ['./complain-breakedown.component.scss']
})
export class ComplainBreakedownComponent implements OnInit {



  datePipe: any;
  breakDown:BreakDwonNoti;
  nic:string = sessionStorage.getItem('nic');
  Fname:string = sessionStorage.getItem('firstname');
  today= new Date();
  jstoday = '';
  chek:boolean =false;


  constructor(private ser : NotifiService,private firestore :AngularFirestore,private breakSer:HttpService) {
    this.breakDown=new BreakDwonNoti();
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');

  }


  ngOnInit() {
    this.breakDown.complainedNic=this.nic;
    console.log(this.nic);

    
  }
  resetForm(form ? : NgForm){
    if(form != null)
    form.resetForm();
    this.ser.BreakDown = {
      id : null,
      assetId:'',
      anyMessage:'',
      complainedNic:'',
      fName:'',
      notificationType:'',
      date:'',
      iSseen: ''



    }
  }
  onSubmit(form:NgForm){


///// save backend
    console.log(this.breakDown);
    console.log("Line1");

  this.breakSer.breakDownservices(this.breakDown).subscribe((response) => {

    console.log("Line2");
    console.log(this.nic);
    console.log(response);
    this.chek=true;
    console.log("Line4");
    console.log(this.chek);
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 2000
    })
      ///save Firebase

  console.log();
  let now = new Date();

  let data = Object.assign({}, form.value);
  delete data.id;
  data.complainedNic=this.nic;
  data.fName=this.Fname;
  data.notificationType="BreakDown"
  data.date=this.jstoday;
  data.isSeen ="0"; 

  if(form.value.id == null){

    this.firestore.collection('BookAssetNotification').add(data);
   console.log("line 10");
}
  else
    this.firestore.doc('BookAssetNotification/'+form.value.id).update(data);
  this.resetForm(form);
  console.log("line 11");




  },

    ( error: any) => {
      this.chek=false;
      console.log("Line5");
      console.log(this.chek);
      console.log(error);
      // Popup 
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: error.error.message,
        footer: '<a> Please check the AssetId Again </a>'
      });

      this.resetForm(form);
  });





  }


}
