import { Injectable } from '@angular/core';
import { Employee } from './model';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { BreakDwonNoti } from './BreakDownModel';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class NotifiService {

  private dataSource = new BehaviorSubject(new Number());
  FormData : Employee;
  BreakDown:BreakDwonNoti;
  
  constructor(private firestore :AngularFirestore) { }

  data = this.dataSource.asObservable();

  updatedDataSelection(data: Number){
    this.dataSource.next(data);
  }

  BreakDownAsset(){
    return this.firestore.collection('BookAssetNotification').snapshotChanges();
  }

  formatDate(date :Date): string{
    const day=date.getDate();
    const month=date.getMonth() + 1;
    const year=date.getFullYear();

    return '${year}-${month}-${day}';

    
  }
}
 