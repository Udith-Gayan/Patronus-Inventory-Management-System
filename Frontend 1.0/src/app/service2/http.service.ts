import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../asset/constants';
import { Asset } from '../asset/asset';
import { Observable } from 'rxjs';
import { BookAsset } from '../models/BookAssetModel';
import { BreakDwonNoti } from '../firebase/BreakDownModel';
import { Replay } from '../models/NotifiReplay';



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

  // Book Asset

  bookAsset(bookasset : BookAsset){
    return this.http.post(Constants.BASE_URL+'/assign/book/add',bookasset,Constants.HTTP_OPTIONS);
  }

  //break dwon asset

  breakDownservices(breakDwonNoti : BreakDwonNoti){
    return this.http.post(Constants.BASE_URL+'/breakdown/add',breakDwonNoti,Constants.HTTP_OPTIONS);
  }

  //Request asset

  
  requestAsset(request : BookAsset){
    return this.http.post(Constants.BASE_URL+'/assign/request/add',request,Constants.HTTP_OPTIONS);
  }

  ///////replay reject or accept 

  

  deleteasset(assetId) {                              // deleteEmployee(employee :Employee){
    return this.http.delete(Constants.ASSET_API + '/delete', {params: {id: assetId}, observe: 'response'});    // return this.http.delete(Constants.EMPLOYEE_API+'/delete',Constants.HTTP_OPTIONS);
  }

  ////////Show all pending requests by Department head ////////

  getPendingRequestDH(): Observable<any>{
    return this.http.get(Constants.BASE_URL+'/assign/request/view/pending/departmentHead')
   }

   ////////Show all pending requests by AssetManager/////////////

   getPendingRequestAM(): Observable<any>{
    return this.http.get(Constants.BASE_URL+'/assign/request/view/pending/assetMananger')
   }

   /////////////////////////Approve requests by Asset Manager ///////////////////////////

     
  approveRequestAM(id : number){
    return this.http.post(Constants.BASE_URL+'/assign/confirmation/assetmanager',id,Constants.HTTP_OPTIONS);
  }

  
   /////////////////////////Approve requests by Department Head ///////////////////////////

   approveRequestDH(id : number){
    return this.http.post(Constants.BASE_URL+'/assign/confirmation/departmenthead',id,Constants.HTTP_OPTIONS);
  }

  //////////////////////////// Reject requests by Asset Manager ////////////////////////////

  rejectRequestAM(id : number){
    return this.http.post(Constants.BASE_URL+'/assign/reject/assetmanager',id,Constants.HTTP_OPTIONS);
  }

  /////////////////////////// Reject requests by department head   /////////////////////////////

  rejectRequestDH(id : number){
    return this.http.post(Constants.BASE_URL+'/assign/reject/departmenthead',id,Constants.HTTP_OPTIONS);
  }

}
