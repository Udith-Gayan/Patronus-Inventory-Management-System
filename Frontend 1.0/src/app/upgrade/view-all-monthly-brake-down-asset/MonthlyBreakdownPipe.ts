import { PipeTransform ,Pipe} from '@angular/core';
import { returnBook } from '../../models/ReturnBookAsset';




@Pipe({
    name:'assetfilterBreak'
})

export class MonthlyBrekdownpipe implements PipeTransform{
    transform(data:returnBook[],searchTerm:string):returnBook[]{
        if(!data || !searchTerm){
            return data ;
        }
        return data.filter(employee=>
           employee.brokenAsset.assetcategory.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
            
           
            

    }
}




