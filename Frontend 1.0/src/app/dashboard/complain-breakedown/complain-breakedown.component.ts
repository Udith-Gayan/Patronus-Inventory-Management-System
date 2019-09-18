import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotifiService } from '../../firebase/notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { BreakDwonNoti } from '../../firebase/BreakDownModel';

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
  constructor(private ser : NotifiService,private firestore :AngularFirestore) { 
    this.breakDown=new BreakDwonNoti();
  }


  ngOnInit() {
  }
  resetForm(form ? : NgForm){
    if(form != null)
    form.resetForm();
    this.ser.BreakDown = {
      id : null,
      assetId:'',
      description:'',
      nic:'',
      fName:'',
      notificationType:''
     

     
    }
  }
  onSubmit(form:NgForm){
    console.log();
    let now = new Date();

    let data = Object.assign({}, form.value);
    delete data.id;
    data.nic=this.nic;
    data.fName=this.Fname;
    data.notificationType="BreakDown"
    
    if(form.value.id == null){
     
      this.firestore.collection('BreakDwonAsset').add(data);
     
     
  }
    else
      this.firestore.doc('BreakDwonAsset/'+form.value.id).update(data);
    this.resetForm(form);
    
   alert('Notifyed successfully');

  }
  

}
