import { Component, OnInit } from '@angular/core';

import { NotifiService } from '../notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';

import { BookAsset } from '../../models/BookAssetModel';

@Component({
  selector: 'app-testveiw',
  templateUrl: './testveiw.component.html',
  styleUrls: ['./testveiw.component.scss']
})
export class TestveiwComponent implements OnInit {

  list:BookAsset[];
  constructor(private ser : NotifiService,private firestore:AngularFirestore) { }

  ngOnInit() {
    this.ser.Bookasset().subscribe(actionArry => {
      this.list = actionArry.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()

        } as BookAsset;
      })
      this.ser.updatedDataSelection(this.list.length);
    });
    this.ser.data.subscribe( data => {
      console.log(data);
    })
  }
 
  onDelete(id:string){
    if(confirm("Are you sure")){
      this.firestore.doc('BookAssetNotification/'+id).delete();
    }

  }


}
