import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from '../../asset/asset';
import { HttpService } from '../../service2/http.service';

@Component({
  selector: 'app-vfurniture',
  templateUrl: './vfurniture.component.html',
  styleUrls: ['./vfurniture.component.scss']
})
export class VFurnitureComponent implements OnInit {

  data: Observable<Asset[]>;
  constructor(private asset : HttpService) { }

  ngOnInit() {
    this.asset.getAllAssets()
    .subscribe(res=>{
      console.log(res)
      this.data = res
      console.log(this.data)

    })
  }

}
