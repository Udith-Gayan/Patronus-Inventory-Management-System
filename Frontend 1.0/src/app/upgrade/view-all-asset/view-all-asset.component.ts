import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service2/http.service';
import { Observable } from 'rxjs';
import { pendinRequest } from '../../models/pendingRequestModel';

@Component({
  selector: 'app-view-all-asset',
  templateUrl: './view-all-asset.component.html',
  styleUrls: ['./view-all-asset.component.scss']
})
export class ViewAllAssetComponent implements OnInit {

  pendingRequestAM:Observable<pendinRequest>
  constructor(private asset:HttpService) { }

  ngOnInit() {
    console.log("Line 4");
    this.asset.getPendingRequestAM().subscribe(res=>{
      console.log("Line 5");
      console.log(res);
      console.log(res.id);
      this.pendingRequestAM = res
      console.log(this.pendingRequestAM)
    })
  }

}
