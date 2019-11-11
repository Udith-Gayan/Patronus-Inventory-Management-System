import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service2/http.service';
import { Asset } from '../../asset/asset';
import { Observable } from 'rxjs';
import { returnBook } from '../../models/ReturnBookAsset';

@Component({
  selector: 'app-view-all-monthly-brake-down-asset',
  templateUrl: './view-all-monthly-brake-down-asset.component.html',
  styleUrls: ['./view-all-monthly-brake-down-asset.component.scss']
})
export class ViewAllMonthlyBrakeDownAssetComponent implements OnInit {

  email:string = sessionStorage.getItem('email');
  Fname:string = sessionStorage.getItem('firstname');
  Lname:string = sessionStorage.getItem('lastname');
  status:string = sessionStorage.getItem('status');
  today=new Date();
  searchTerm : string;

  constructor(private asset:HttpService) { }
  AllBrekdown:Observable<returnBook>
  ngOnInit() {

    this.asset.getAllBreakdown().subscribe(res=>{

      console.log(res);
      this.AllBrekdown = res
      console.log(this.AllBrekdown)
    })
  }

}
