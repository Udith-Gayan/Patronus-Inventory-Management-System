import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service2/http.service';
import { Observable } from 'rxjs';
import { Asset } from '../../asset/asset';
import { returnBook } from '../../models/ReturnBookAsset';

@Component({
  selector: 'app-view-all-request-assets',
  templateUrl: './view-all-request-assets.component.html',
  styleUrls: ['./view-all-request-assets.component.scss']
})
export class ViewAllRequestAssetsComponent implements OnInit {
AllRequest:Observable<returnBook>
email:string = sessionStorage.getItem('email');
Fname:string = sessionStorage.getItem('firstname');
Lname:string = sessionStorage.getItem('lastname');
status:string = sessionStorage.getItem('status');
today=new Date();

  constructor(private asset:HttpService) { }

  ngOnInit() {
    this.asset.getAllRequest().subscribe(res=>{

      console.log(res);
      this.AllRequest = res
      console.log(this.AllRequest)
    })
  }

}
