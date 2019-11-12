import { BookingAssetModalComponent } from './../../PopupModals/booking-asset-modal/booking-asset-modal.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from '../../asset/asset';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { HttpService } from '../../service2/http.service';
import { ViewAllAssetDetailComponent } from '../../PopupModals/view-all-asset-detail/view-all-asset-detail.component';
import { RequestAssetModalComponent } from '../../PopupModals/request-asset-modal/request-asset-modal.component';
////////////

 import Swal from 'sweetalert2/dist/sweetalert2.js';
 import { FutureDates } from '../../asset/futureDates';

// import 'sweetalert2/src/sweetalert2.scss';

// const Swal = require('sweetalert2');
//////////////////

@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.scss']
})
export class ViewAssetComponent implements OnInit {
  data: Observable<Asset[]>;
  data1: Observable<Asset[]>;
  
  

  //////Short by date



  //////
  status:string = sessionStorage.getItem('status');
  searchTerm :string;
  searchTerm1 :string;
  constructor(private asset : HttpService, private modalService: NgbModal) { }
////////////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.asset.getAllAssets().subscribe(res=>{

      console.log(res);
      this.data = res
      console.log(this.data);
      console.log();
    })
    //console.log(this.data);


  }
////  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Open booking popup form
  openFormModal(assetId,assetcategory) {
    console.log("line-89");
    console.log(assetId);
    this.asset.sendAssetId(assetId).subscribe(res=>{
    console.log("line-90");
      console.log(res);
      this.data1 = res.body;

     let dateArray : FutureDates[];
     dateArray = res.body;


      console.log(this.data1);



      ////

      const modalRef = this.modalService.open(BookingAssetModalComponent);
      modalRef.componentInstance.assetId = assetId;    // Pass vallue to other form component
      modalRef.componentInstance.assetcategory = assetcategory;
     modalRef.componentInstance.dateArray = dateArray;
      console.log(assetcategory);
     
      
  
      modalRef.result.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });

 
    });

    
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Requesting Asset Popup

openRequestmModal(assetId,assetcategory) {

  console.log("line-89");
  console.log(assetId);
  this.asset.sendAssetId(assetId).subscribe(res=>{
  console.log("line-90");
    console.log(res);
    this.data1 = res.body;

   let dateArray : FutureDates[];
   dateArray = res.body;


    console.log(this.data1);

    const modalRef = this.modalService.open(RequestAssetModalComponent);
    modalRef.componentInstance.assetId = assetId;    // Pass vallue to other form component
    modalRef.componentInstance.assetcategory = assetcategory;
    modalRef.componentInstance.dateArray = dateArray;
  
  
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });


  });
  
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//view more detail of Asset

openDetailModal(assetId,ram,capacity,assetcategory){
  const modalRef = this.modalService.open(ViewAllAssetDetailComponent);
    modalRef.componentInstance.assetId = assetId;
    modalRef.componentInstance.ram = ram;
    modalRef.componentInstance.capacity = capacity;
    modalRef.componentInstance.assetcategory = assetcategory;
     // Pass vallue to other form component

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });

}


///delete asset//
deleteAsst(assetId){

  Swal.fire({
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


      this.asset.deleteasset(assetId).subscribe((data) => {

        // this.employees.splice(this.employees.indexOf(d),1);
        console.log(data);
        this.ngOnInit();
        this.ngOnInit();

          },
          (error)=>{
                     console.log(error);
                   }
);


    }



  })


  this.ngOnInit();

}

BlockAsset(assetId : number){
  console.log(assetId);

}

}
