import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service2/http.service';
import { Observable } from 'rxjs';
import { pendinRequest } from '../../models/pendingRequestModel';
import { Asset } from '../../asset/asset';
import { Session } from 'inspector';

@Component({
  selector: 'app-view-all-asset',
  templateUrl: './view-all-asset.component.html',
  styleUrls: ['./view-all-asset.component.scss']
})



export class ViewAllAssetComponent implements OnInit {
  email:string = sessionStorage.getItem('email');
  Fname:string = sessionStorage.getItem('firstname');
  Lname:string = sessionStorage.getItem('lastname');
  status:string = sessionStorage.getItem('status');
  today=new Date();
  searchTerm :string;

  pendingRequestAM:Observable<pendinRequest>
  constructor(private asset:HttpService) { }
AllAsset:Observable<Asset[]>

  ngOnInit() {
   
    this.asset.getAllAssets().subscribe(res=>{

      console.log(res);
      this.AllAsset = res
      console.log(this.AllAsset)
    })
  }

  

}
