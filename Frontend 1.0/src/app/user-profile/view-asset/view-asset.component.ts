import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from '../../asset/asset';

import { HttpService } from '../../service2/http.service';

@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.scss']
})
export class ViewAssetComponent implements OnInit {
  data: Observable<Asset[]>;
  searchTerm :string;
  constructor(private asset : HttpService) { }

  ngOnInit() {
    this.asset.getAllAssets().subscribe(res=>{

      console.log(res);
      this.data = res
      console.log(this.data)
    })

   
  }

}
