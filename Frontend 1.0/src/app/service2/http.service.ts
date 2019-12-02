import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../asset/constants';
import { Asset } from '../asset/asset';
import { Observable } from 'rxjs';
import { BookAsset } from '../models/BookAssetModel';
import { BreakDwonNoti } from '../firebase/BreakDownModel';
import { Replay } from '../models/NotifiReplay';
import { MonthlyReport } from '../models/MonthlyReport';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  Asset: { days: string; displaySize: string; location: string; months: string; processor: string; };

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


  ///////////////////////////all book asset////////////////////////////////////////////////
  getAllBookAsset(): Observable<any>{
    return this.http.get(Constants.BASE_URL+'/booking/all')
   }

   ////////////////////////all breakdown///////////////////////////////////////////////
   
   getAllBreakdown(): Observable<any>{
    return this.http.get(Constants.BASE_URL+'/breakdown/all')
   }

   ///////////////////////all Request////////////////////////////////////////////////
   getAllRequest(): Observable<any>{
    return this.http.get(Constants.BASE_URL+'/assign/request/view/approved/all')
   }

   ///////////////////////////////////////////////////book asset issue ////////////////////
   
   //*IssueBookAssset(id : number){
    //return this.http.post(Constants.BASE_URL+'/issue/issue',id,Constants.HTTP_OPTIONS);
  //}//

   ///////////////////////////////////////////////////book asset return ////////////////////
   
  

  IssueBookAssset(id) {                              // deleteEmployee(employee :Employee){
    return this.http.get(Constants.BASE_URL+'/issue/issue', {params: {id: id}, observe: 'response'}); 

}
ReturnBookAssset(id) {                              // deleteEmployee(employee :Employee){
  return this.http.get(Constants.BASE_URL+'/return/return', {params: {id: id}, observe: 'response'}); 

}
/////////////////////////////releseeBrokenAsset///////////////////////////

ReleaseBrokenAsset(assetId){
  return this.http.get(Constants.BASE_URL+'/breakdown/release', {params: {assetId: assetId}, observe: 'response'}); 

}

/////////////////////////get All Own Asset/////////////////////////////////

getAllOwnAssets(nic) : Observable<any>{
  return this.http.get(Constants.BASE_URL+'/asset/my/asset',{params: {nic: nic}, observe: 'response'})

}

/////////////////////////////Monthly Report//////////////////////////////////

sendDetails(year,month) : Observable<any>{
  return this.http.get(Constants.BASE_URL+'/report/monthly',{params: {year: year,month: month}, observe: 'response'})

}
////////////////////////////Send Book AssetID//////////////////////////////////

sendAssetId(assetId) : Observable<any>{
  return this.http.get(Constants.BASE_URL+'/futuredates/get',{params: {assetId: assetId}, observe: 'response'})

}

///////////////////////cancel book asset//////////////////////////////////////

deleteBookAsset(ida){
  console.log("Line 1");
  return this.http.get(Constants.BASE_URL+'/booking/delete', {params: {id: ida}, observe: 'response'});    
 
}

}
