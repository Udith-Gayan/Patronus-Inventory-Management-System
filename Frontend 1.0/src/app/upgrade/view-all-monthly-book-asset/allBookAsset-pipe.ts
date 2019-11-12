import { PipeTransform ,Pipe} from '@angular/core';
import { returnBook } from '../../models/ReturnBookAsset';




@Pipe({
    name:'assetfilterBook'
})

export class MonthlyBookAssetpipe implements PipeTransform{
    transform(data:returnBook[],searchTerm:string):returnBook[]{
        if(!data || !searchTerm){
            return data ;
        }
        return data.filter(employee=>
           employee.requestedAsset.assetcategory.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
            
           
            

    }
}




