import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { returnBook } from '../../models/ReturnBookAsset';
import { HttpService } from '../../service2/http.service';

@Component({
  selector: 'app-return-request-asset',
  templateUrl: './return-request-asset.component.html',
  styleUrls: ['./return-request-asset.component.scss']
})
export class ReturnRequestAssetComponent implements OnInit {
  AllRequest:Observable<returnBook>
  searchTerm: string;
  constructor(private asset:HttpService ) { }

  ngOnInit() {
    this.asset.getAllRequest().subscribe(res=>{

      console.log(res);
      this.AllRequest = res
      console.log(this.AllRequest)
    })
  }
////////////////////////////Issue/////////////////////////////////
  IssueAsset(id: number){
    

    console.log(id);
   
    this.asset.IssueBookAssset(id).subscribe((response)=>{
      console.log(response);
      
      
      
    });
    this.ngOnInit();




  }

  ////////////////////////////////return//////////////////////
  ReturnAsset(id: number){
    console.log(id);

    this.asset.ReturnBookAssset(id).subscribe((response)=>{
      console.log(response);
      
    });
    this.ngOnInit();



  }



}
