import { Employee } from './employee';
import { Asset } from '../asset/asset';

export class returnBook{
    assetId:string;
    beginDate:string;
    dueDate:string;
    userAssigned:Employee;
    id:number;
    returned:string;
    requestedAsset:Asset;
    informedBy:Employee;
    brokenAsset:Asset;
   



}