import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service2/http.service';
import { Observable } from 'rxjs';
import { ownAsset } from '../../models/ownAsset';

@Component({
  selector: 'app-own-asset',
  templateUrl: './own-asset.component.html',
  styleUrls: ['./own-asset.component.scss']
})
export class OwnAssetComponent implements OnInit {
ownAsset : Observable<ownAsset>
  constructor(private ownasset : HttpService) {  }

  ngOnInit() {
    this.ownasset.getAllOwnAssets().subscribe(res=>{

      console.log(res);
      this.ownAsset = res
      console.log(this.ownAsset)
    })
  }

}
