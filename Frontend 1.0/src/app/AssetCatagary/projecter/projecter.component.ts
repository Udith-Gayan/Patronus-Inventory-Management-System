import { Component, OnInit } from '@angular/core';
import { Asset } from '../../asset/asset';
import { HttpService } from '../../service2/http.service';
////////////
import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';

const Swal = require('sweetalert2');
//////////////////
@Component({
  selector: 'app-projecter',
  templateUrl: './projecter.component.html',
  styleUrls: ['./projecter.component.scss']
})
export class ProjecterComponent implements OnInit {
  model:any ={}
  asset: Asset;
  
  
    constructor(private userService:HttpService) { 
      this.asset=new Asset();
      this.asset.assetcategory="Projector";
      console.log(this.asset);
    }
  
    ngOnInit() {
      
    }
    onSubmit() {
      console.log(this.asset);
      this.userService.addEmployee(this.asset).subscribe((response)=>{
        console.log(response);
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Computer has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      });
      this.resetForm();
    }
    resetForm(){
      this.asset.days='';
      this.asset.location='';
      this.asset.months ='';
      this.asset.quantity=1;
      this.asset.warrantyStatus='';
      this.asset.yrs='';
      this.asset.boughtCompanyAddress='';
      this.asset.boughtCompanyName='';
      this.asset.boughtDate='';
      this.asset.brandName='';
      this.asset.buyingPrice;
      this.asset.description='';
      this.asset.companyContact='';
      this.asset.categoryTypes='';
  
    }

}
