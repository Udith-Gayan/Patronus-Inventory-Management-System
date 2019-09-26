import { Component, OnInit } from '@angular/core';
import { Asset } from '../../asset/asset';
import { HttpService } from '../../service2/http.service';


@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  model:any ={}
  asset: Asset;

  constructor(private userService:HttpService) {
      this.asset = new Asset();
      this.asset.assetcategory = "Other";
      console.log(this.asset);

  }

  ngOnInit() {

  }
  onSubmit() {
    console.log(this.asset);
    this.userService.addEmployee(this.asset).subscribe((response)=>{
      console.log(response);
      alert('Asset Successfully Saved');
    });
  }

}
