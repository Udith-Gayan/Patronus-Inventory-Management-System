import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from '../../asset/asset';
import { HttpService } from '../../service2/http.service';

@Component({
  selector: 'app-view-all-monthly-book-asset',
  templateUrl: './view-all-monthly-book-asset.component.html',
  styleUrls: ['./view-all-monthly-book-asset.component.scss']
})

export class ViewAllMonthlyBookAssetComponent implements OnInit {

  email:string = sessionStorage.getItem('email');
  Fname:string = sessionStorage.getItem('firstname');
  Lname:string = sessionStorage.getItem('lastname');
  status:string = sessionStorage.getItem('status');

  AllBook:Observable<Asset>
  today=new Date();
  constructor(private asset: HttpService) { }

  ngOnInit() {
    this.asset.getAllBookAsset().subscribe(Response =>{
      this.AllBook = Response;
 
     console.log(Response);
 
     })
  }

}
