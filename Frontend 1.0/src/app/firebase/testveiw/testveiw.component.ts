import { Component, OnInit } from '@angular/core';
import { Employee } from '../../firebase/model';
import { NotifiService } from '../notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-testveiw',
  templateUrl: './testveiw.component.html',
  styleUrls: ['./testveiw.component.scss']
})
export class TestveiwComponent implements OnInit {

  list:Employee[];
  constructor(private ser : NotifiService,private firestore:AngularFirestore) { }

  ngOnInit() {
    this.ser.getEmployees().subscribe(actionArry => {
      this.list = actionArry.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()

        } as Employee;
      })
    });
  }
  onEdit(emp:Employee){
    this.ser.FormData=Object.assign({},emp);
  }
  onDelete(id:string){
    if(confirm("Are you sure")){
      this.firestore.doc('employeee/'+id).delete();
    }

  }


}
