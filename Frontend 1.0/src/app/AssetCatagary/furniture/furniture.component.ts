import { Component, OnInit } from '@angular/core';
import { Asset } from '../../asset/asset';
import { HttpService } from '../../service2/http.service';
////////////
import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';

const Swal = require('sweetalert2');
//////////////////

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.scss']
})
export class FurnitureComponent implements OnInit {

  model:any ={}
asset: Asset;


  constructor(private userService:HttpService) { 
    this.asset=new Asset();
    this.asset.assetCategory="Furniture";
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
    
  }
}
