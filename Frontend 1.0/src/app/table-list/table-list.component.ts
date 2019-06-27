import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service2/http.service';
import { range } from 'rxjs';
import { Asset } from '../asset/asset';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
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
