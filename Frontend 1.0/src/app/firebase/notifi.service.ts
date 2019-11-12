import { Injectable } from '@angular/core';
import { Employee } from './model';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { BreakDwonNoti } from './BreakDownModel';
import { ReturnStatement } from '@angular/compiler';
import { Replay } from '../models/NotifiReplay';
import { BookAsset } from '../models/BookAssetModel';

@Injectable({
  providedIn: 'root'
})
export class NotifiService {

  private dataSource = new BehaviorSubject(new Number());
  FormData : BookAsset;
  BreakDown:BreakDwonNoti;
  ReplyNoti:Replay;
  
  constructor(private firestore :AngularFirestore) { }

  data = this.dataSource.asObservable();

  updatedDataSelection(data: Number){
    this.dataSource.next(data);
  }

  /*
  updateUser(userKey, value){
    value.nameToSearch = value.name.toLowerCase();
    return this.firestore.collection('BookAssetNotification').doc(userKey).set(value);
  }
  */

  Bookasset(){
    return this.firestore.collection('BookAssetNotification').snapshotChanges();
  }

  replayNoti(){
    return this.firestore.collection('ReplayNotification').snapshotChanges();
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

  //update_massage(recordID,record){
  //  this.firestore.doc('BookAssetNotification/' + recordID).update(record);
  //}

}
 