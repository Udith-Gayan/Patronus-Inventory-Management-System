import { Asset } from '../asset/asset';
import { Employee } from './employee';



export class MonthlyReport{
    year:string;
    month:string;
    bookedAssets:Asset;
    breakdowns: Asset;
    requestedApprovedAssets: Asset;
    requestedRejectedAssets:Asset;
    requestedAsset:Asset;
    userAssigned:Employee;
    assetId:string;
    beginDate:string;
    dueDate:string;
    requestedNic:string;
    complainedNic:string;
    brokenAsset:Asset;
    informedBy : Employee;
    informedDate:string;
    dateAMConfirmed:string;
   
    dateDHConfirmed:string;
    
   

}