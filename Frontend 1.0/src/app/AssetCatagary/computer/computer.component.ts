import { Component, OnInit } from '@angular/core';
import { Asset } from '../../asset/asset';
import { HttpService } from '../../service2/http.service';
////////////
//import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';

const Swal = require('sweetalert2');
//////////////////

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {
  model:any ={}
  asset: Asset;
  minDate: Date;
  maxDate: Date;

  hideWarranty: boolean = true;


  constructor(private userService:HttpService) {
    this.asset=new Asset();
    this.asset.assetcategory="Computer";
    console.log(this.asset);

    ////begin date hide in this calander
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate()-10);
    this.maxDate.setDate(this.maxDate.getDate());
  }

  ngOnInit() {
    this.asset.quantity=1;

  }

  onSubmit() {
    console.log(this.asset);
    this.userService.addEmployee(this.asset).subscribe((response)=>{
      console.log(response);
      this.resetForm();
      Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Computer has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    });
   
  }
  resetForm(){
    this.asset.days='';
    this.asset.displaySize='';
    this.asset.location='';
    this.asset.months ='';
    this.asset.processor='';
    this.asset.quantity=1;
    this.asset.ram='';
    this.asset.warrantyStatus='';
    this.asset.yrs='' ;
    this.asset.boughtCompanyAddress='';
    this.asset.boughtCompanyName='';
    this.asset.boughtDate='';
    this.asset.brandName='';
    this.asset.buyingPrice;
    this.asset.capacity='';
    this.asset.description='';
    this.asset.companyContact='';
    this.asset.categoryTypes='';

  }


toggleWarranty(value: boolean){

  this.hideWarranty = value;

}



}
