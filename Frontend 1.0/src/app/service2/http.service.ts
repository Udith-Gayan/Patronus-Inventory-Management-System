import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../asset/constants';
import { Asset } from '../asset/asset';
import { Observable } from 'rxjs';

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

}
