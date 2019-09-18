import { Component, OnInit } from '@angular/core';

import { BreakDwonNoti } from '../../firebase/BreakDownModel';
import { NotifiService } from '../../firebase/notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-view-breakedown',
  templateUrl: './view-breakedown.component.html',
  styleUrls: ['./view-breakedown.component.scss']
})
export class ViewBreakedownComponent implements OnInit {

  list:BreakDwonNoti[];
  constructor(private ser : NotifiService,private firestore:AngularFirestore) { }

  ngOnInit() {
    this.ser.BreakDownAsset().subscribe(actionArry => {
      this.list = actionArry.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()

        } as BreakDwonNoti;
      })
      this.ser.updatedDataSelection(this.list.length);
    });
    this.ser.data.subscribe( data => {
      console.log(data);
    })
  }
 
  onDelete(id:string){
    if(confirm("Are you sure")){
      this.firestore.doc('BreakDwonAsset/'+id).delete();
    }

  }

}
