import { Injectable } from '@angular/core';
import { Employee } from './model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NotifiService {
 
  FormData : Employee;
  constructor(private firestore :AngularFirestore) { }

  getEmployees(){
    return this.firestore.collection('employeee').snapshotChanges();
  }
}
 