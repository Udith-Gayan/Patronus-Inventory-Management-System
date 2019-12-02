import { Component, OnInit } from '@angular/core';
import { Asset } from '../../asset/asset';
import { Observable } from 'rxjs';
import { HttpService } from '../../service2/http.service';
import { returnBook } from '../../models/ReturnBookAsset';

@Component({
  selector: 'app-return-bok-asset',
  templateUrl: './return-bok-asset.component.html',
  styleUrls: ['./return-bok-asset.component.scss']
})
export class ReturnBokAssetComponent implements OnInit {
  AllBook:Observable<returnBook>
  searchTerm : string;
   issue:number=-1;

  

  //AllBook1:Observable<Asset>
  constructor(private asset:HttpService) { }

  ngOnInit() {
    this.asset.getAllBookAsset().subscribe(res=>{

      console.log(res);
      this.AllBook = res
      console.log(this.AllBook)
    })
  }
////////////////////////////Issue/////////////////////////////////
  IssueAsset(id: number){
    

    console.log(id);
    console.log(this.issue);
    this.issue=id;
    console.log(this.issue);
    this.asset.IssueBookAssset(id).subscribe((response)=>{
      console.log(response);
      this.ngOnInit();
      this.ngOnInit();
      
      
      
    });
    this.ngOnInit();
      





  }

  ////////////////////////////////return//////////////////////
  ReturnAsset(id: number){
    console.log(id);

    this.asset.ReturnBookAssset(id).subscribe((response)=>{
      console.log(response);
      this.ngOnInit();
      this.ngOnInit();
      
      
    });
    this.ngOnInit();



  }



}
