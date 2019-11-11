import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from '../../asset/asset';
import { HttpService } from '../../service2/http.service';
import { returnBook } from '../../models/ReturnBookAsset';

@Component({
  selector: 'app-view-all-monthly-book-asset',
  templateUrl: './view-all-monthly-book-asset.component.html',
  styleUrls: ['./view-all-monthly-book-asset.component.scss']
})

export class ViewAllMonthlyBookAssetComponent implements OnInit {
  searchTerm : string;
  email:string = sessionStorage.getItem('email');
  Fname:string = sessionStorage.getItem('firstname');
  Lname:string = sessionStorage.getItem('lastname');
  status:string = sessionStorage.getItem('status');

  AllBook:Observable<returnBook>
  today=new Date();
  
  constructor(private asset: HttpService) { }

  ngOnInit() {
    this.asset.getAllBookAsset().subscribe(Response =>{
      this.AllBook = Response;
 
     console.log(Response);
 
     })
  }

}
