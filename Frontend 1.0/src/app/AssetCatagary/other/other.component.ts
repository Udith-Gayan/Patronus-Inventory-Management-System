import { Component, OnInit } from '@angular/core';
import { Asset } from '../../asset/asset';
import { HttpService } from '../../service2/http.service';
////////////
import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';

const Swal = require('sweetalert2');
//////////////////

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  model:any ={}
  asset: Asset;
  minDate: Date;
  maxDate: Date;

  constructor(private userService:HttpService) {
      this.asset = new Asset();
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
    this.asset.description='';
    this.asset.location='';
    this.asset.months ='';
    this.asset.quantity=1;
    this.asset.warrantyStatus='';
    this.asset.yrs='';
    this.asset.boughtCompanyAddress='';
    this.asset.boughtCompanyName='';
    this.asset.boughtDate='';
    this.asset.buyingPrice;
    this.asset.companyContact='';
    this.asset.categoryTypes='';

  }


  hideWarranty: boolean = true;

  toggleWarranty(value: boolean){

    this.hideWarranty = value;
  
  }



}
