import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Asset } from '../asset/asset';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Ass:Asset[]=[];
  Bname:String;

  constructor() { }

  ngOnInit() {
  //   this.Ass=[
  //     {
  //       assetCategory:"computer",
  //       brandName : "Hp",
  //       assetId : "AA103",
  //       boughtCompanyName : "Jhon keels",
  //       buyingPrice : 55,
  //       boughtDate : "2017-02-05",
  //       warrantyStatus : "dddd"

  //     },
  //     {
  //     assetCategory:"printer",
  //     brandName : "Asser",
  //     assetId : "AA102",
  //     boughtCompanyName : "Jhon keels",
  //     buyingPrice : 55,
  //     boughtDate : "2017-02-05",
  //     warrantyStatus : "dddd"

  //   },
  //   { assetCategory:"Mic",
  //   brandName : "Hp",
  //   assetId : "AA101",
  //   boughtCompanyName : "Jhon keels",
  //   buyingPrice : 55,
  //   boughtDate : "2017-02-05",
  //   warrantyStatus : "dddd"

  // },
  // {
  //   assetCategory:"printer",
  //   brandName : "Dell",
  //   assetId : "AA102",
  //   boughtCompanyName : "Jhon keels",
  //   buyingPrice : 55,
  //   boughtDate : "2017-02-05",
  //   warrantyStatus : "dddd",

  // },
  // {
  //   assetCategory:"printer",
  //   brandName : "Asser",
  //   assetId : "AA102",
  //   boughtCompanyName : "Jhon keels",
  //   buyingPrice : 55,
  //   boughtDate : "2017-02-05",
  //   warrantyStatus : "dddd"

  // },

  //   ];
  }
  search(){

    if(this.Bname !=""){
      this.Ass=this.Ass.filter(res=>{
        return res.brandName.toLocaleLowerCase().match( this.Bname.toLocaleLowerCase());
      });
    }
    else if(this.Bname ==""){
      this.ngOnInit();

    }



  }
}
