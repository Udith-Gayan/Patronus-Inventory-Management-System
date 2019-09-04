import { Injectable } from '@angular/core';
import { Employee } from './model';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifiService {

  private dataSource = new BehaviorSubject(new Number());
  FormData : Employee;
  
  constructor(private firestore :AngularFirestore) { }

  data = this.dataSource.asObservable();

  updatedDataSelection(data: Number){
    this.dataSource.next(data);
  }

  getEmployees(){
    return this.firestore.collection('employeee').snapshotChanges();
  }
}
 