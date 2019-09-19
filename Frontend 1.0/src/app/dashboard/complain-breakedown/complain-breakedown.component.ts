import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotifiService } from '../../firebase/notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { BreakDwonNoti } from '../../firebase/BreakDownModel';
import { HttpService } from '../../service2/http.service';
import { formatDate } from '@angular/common';


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
      date:''
     

     
    }
  }
  onSubmit(form:NgForm){


/////save backend
    console.log(this.breakDown);
    console.log("Line1");

  this.breakSer.breakDownservices(this.breakDown).subscribe((response) => {
    console.log("Line2");
    console.log(this.nic);
    console.log(response);
    this.chek=true;
    alert('Notifyed successfully');


  },

    ( error: any) => {
     
      window.alert('Please Check the AssetID ');
      


        
   
  
  });

  ///save Firebase

    console.log();
    let now = new Date();

    let data = Object.assign({}, form.value);
    delete data.id;
    data.complainedNic=this.nic;
    data.fName=this.Fname;
    data.notificationType="BreakDown"
    data.date=this.jstoday;
    
    if(form.value.id == null || this.chek == true){
     
      this.firestore.collection('BreakDwonAsset').add(data);
     
  }
    else
      this.firestore.doc('BreakDwonAsset/'+form.value.id).update(data);
    this.resetForm(form);

    
    
  
  }
  

}
