import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../asset/constants';
import { Asset } from '../asset/asset';
import { Observable } from 'rxjs';
import { BookAsset } from '../models/BookAssetModel';
import { Employee } from '../firebase/model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  addEmployee(asset : Asset){
    return this.http.post(Constants.ASSET_API+'/add',asset,Constants.HTTP_OPTIONS);
  }

  getAllEmployees(){
    return this.http.get(Constants.ASSET_API+'/all',Constants.HTTP_OPTIONS);
  }

  getAllAssets(): Observable<any>{
    return this.http.get(Constants.ASSET_API+'/all')
  }

  //Book Asset

  bookAsset(bookasset : Employee){
    return this.http.post(Constants.BASE_URL+'/assign/book/add',bookasset,Constants.HTTP_OPTIONS);
  }
  deleteasset(assetId){                              // deleteEmployee(employee :Employee){
    return this.http.delete(Constants.ASSET_API+'/delete',{params: {id: assetId}, observe: 'response'});    // return this.http.delete(Constants.EMPLOYEE_API+'/delete',Constants.HTTP_OPTIONS);
  }

  
}
