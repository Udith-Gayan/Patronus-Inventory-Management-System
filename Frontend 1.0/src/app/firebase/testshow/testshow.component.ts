import { Component, OnInit } from '@angular/core';
import { NotifiService } from '../notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-testshow',
  templateUrl: './testshow.component.html',
  styleUrls: ['./testshow.component.scss']
})
export class TestshowComponent implements OnInit {
  datePipe: any;

  constructor(private ser : NotifiService,private firestore :AngularFirestore) { }


  ngOnInit() {
  }
  resetForm(form ? : NgForm){
    if(form != null)
    form.resetForm();
    this.ser.FormData = {
      id : null,
      AssetCategory: '' ,
      BrandName:'',
      Discription:'',
      ReturnDate:'',
      OrderDate:''

     
    }
  }
  onSubmit(form:NgForm){
    let now = new Date();

    let data = Object.assign({}, form.value);
    delete data.id;
    if(form.value.id == null){
      this.firestore.collection('employeee').add(data);
     
  }
    else
      this.firestore.doc('employeee/'+form.value.id).update(data);
    this.resetForm(form);
   alert('Are u sure Update');

  }

}
