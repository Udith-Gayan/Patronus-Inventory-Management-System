import { Component, OnInit } from '@angular/core';
import { NotifiService } from '../notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Employee } from '../model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-testshow',
  templateUrl: './testshow.component.html',
  styleUrls: ['./testshow.component.scss']
})
export class TestshowComponent implements OnInit {
  datePipe: any;
  employee:Employee;
  today= new Date();
  jstoday = '';
  constructor(private ser : NotifiService,private firestore :AngularFirestore) { 
    this.employee=new Employee();
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }


  ngOnInit() {
  }
  resetForm(form ? : NgForm){
    if(form != null)
    form.resetForm();
    this.ser.FormData = {
      id : null,
     
      massege:'',
      username:'',
      beginDate:'',
      dueDate:'',
     
      assetId:'',
      description:'',
      assetcategory:'',
      requestedNic:'',
      notificationType:'',
      isSeen: '',
      isSeen1: ''
  
  
    }
  }
  onSubmit(form:NgForm){
    let now = new Date();

    let data = Object.assign({}, form.value);
    delete data.id;
    data.Discription=this.jstoday;
    if(form.value.id == null){
      this.firestore.collection('employeee').add(data);
      
     
  }
    else
      this.firestore.doc('employeee/'+form.value.id).update(data);
    this.resetForm(form);
    
   alert('Are u sure Update');

  }

}
