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
  employee:BreakDwonNoti;
  constructor(private ser : NotifiService,private firestore :AngularFirestore) { 
    this.employee=new BreakDwonNoti();
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
     

     
    }
  }
  onSubmit(form:NgForm){
    let now = new Date();

    let data = Object.assign({}, form.value);
    delete data.id;
    if(form.value.id == null){
     
      this.firestore.collection('BreakDwonAsset').add(data);
     
     
  }
    else
      this.firestore.doc('BreakDwonAsset/'+form.value.id).update(data);
    this.resetForm(form);
    
   alert('Notifyed successfully');

  }
  

}
