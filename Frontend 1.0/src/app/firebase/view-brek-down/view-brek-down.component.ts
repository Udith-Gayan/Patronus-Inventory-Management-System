import { Component, OnInit } from '@angular/core';

import { BreakDwonNoti } from '../../firebase/BreakDownModel';
import { NotifiService } from '../../firebase/notifi.service';
import { AngularFirestore } from '@angular/fire/firestore';
// import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewBreakeDownAssetComponent } from '../../PopupModals/view-breake-down-asset/view-breake-down-asset.component';
import { Observable } from 'rxjs';
import { Asset } from '../../asset/asset';
import { HttpService } from '../../service2/http.service';

const Swal = require('sweetalert2');
//////////////////
@Component({
  selector: 'app-view-brek-down',
  templateUrl: './view-brek-down.component.html',
  styleUrls: ['./view-brek-down.component.scss']
})
export class ViewBrekDownComponent implements OnInit {
  status:string =sessionStorage.getItem('status');
  list:BreakDwonNoti[];
  assetDetail:Observable<Asset>
  constructor(private ser : NotifiService,private firestore:AngularFirestore,private modalService: NgbModal,private asset : HttpService) { }

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
    this.asset.getAllAssets().subscribe(res=>{

      console.log(res);
      this.assetDetail = res
      console.log(this.assetDetail)
    })
  


  }

  onDelete(id:string){
    if(Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        ),
        this.firestore.doc('BookAssetNotification/'+id).delete();
      }
    })){

    }

  }
  openFormModal(assetId,assetCategory,notificationType,complainedNic,anyMessage,beginDate,dueDate,username,idE) {
    console.log("Line1");
    const modalRef = this.modalService.open(ViewBreakeDownAssetComponent);
    modalRef.componentInstance.assetId = assetId;    // Pass vallue to other form component
    modalRef.componentInstance.assetCategory = assetCategory;
    modalRef.componentInstance.notificationType = notificationType;
    modalRef.componentInstance.complainedNic = complainedNic;
    modalRef.componentInstance.anyMessage = anyMessage;
    modalRef.componentInstance.beginDate = beginDate;
    modalRef.componentInstance.dueDate = dueDate;
    modalRef.componentInstance.username = username;


    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
    
this.updateSeen(idE,anyMessage);


  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////release button/////////////////////////

ReleaseAsset(assetId : string , id : string){
  
  console.log(assetId);
  console.log(id);


  this.asset.ReleaseBrokenAsset(assetId).subscribe((response)=>{
    console.log(response);
    console.log('line-1');

    this.onDelete(id);
  });
  this.ngOnInit();
 



}

updateSeen(idE: string, anyMessage: string){

  /////////////////////////////////// update firebase ////////////////////////
console.log("update seen1");
console.log(idE);
console.log(anyMessage);
console.log("update seen2");

console.log(this.list);
this.list.forEach(id => {
  console.log("Update seen3");
  console.log(id);
  if(id.id == idE){
    
    console.log("Update seen4");
  // id.anyMessage="seen";
   console.log(id.anyMessage);
   this.firestore.collection('BookAssetNotification').doc(id.id).update({isSeen : '1'});


  }
  });
}


}
