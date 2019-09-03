import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from '../../asset/asset';
import { HttpService } from '../../service2/http.service';

@Component({
  selector: 'app-vcomputer',
  templateUrl: './vcomputer.component.html',
  styleUrls: ['./vcomputer.component.scss']
})
export class VComputerComponent implements OnInit {

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
