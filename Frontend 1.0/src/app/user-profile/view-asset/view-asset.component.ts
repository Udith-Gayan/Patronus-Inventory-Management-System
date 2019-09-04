import { BookingAssetModalComponent } from './../../PopupModals/booking-asset-modal/booking-asset-modal.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from '../../asset/asset';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { HttpService } from '../../service2/http.service';
import { ViewAllAssetDetailComponent } from '../../PopupModals/view-all-asset-detail/view-all-asset-detail.component';

@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.scss']
})
export class ViewAssetComponent implements OnInit {
  data: Observable<Asset[]>;

  //////Short by date
 

 
  //////

  searchTerm :string;
  constructor(private asset : HttpService, private modalService: NgbModal) { }
////////////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.asset.getAllAssets().subscribe(res=>{

      console.log(res);
      this.data = res
      console.log(this.data)
    })


  }
////  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Open booking popup form
  openFormModal(assetId,ram) {
    const modalRef = this.modalService.open(BookingAssetModalComponent);
    modalRef.componentInstance.assetId = assetId;    // Pass vallue to other form component
    modalRef.componentInstance.ram = ram; 

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//view more detail of Asset

openDetailModal(assetId,ram,capacity,assetCategory){
  const modalRef = this.modalService.open(ViewAllAssetDetailComponent);
    modalRef.componentInstance.assetId = assetId;
    modalRef.componentInstance.ram = ram; 
    modalRef.componentInstance.capacity = capacity;
    modalRef.componentInstance.assetCategory = assetCategory;
     // Pass vallue to other form component

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });

}


///delete asset//
deleteAsst(assetId){
 
    this.asset.deleteasset(assetId).subscribe((data) => {

                                                       // this.employees.splice(this.employees.indexOf(d),1);
                                                       console.log(data);
                                                       alert("Successfully deleted");
                                                         },
                                                         (error)=>{
                                                                    console.log(error);
                                                                  }
                                              );
 
  


}

}
