import { PipeTransform ,Pipe} from '@angular/core';
import { returnBook } from '../../models/ReturnBookAsset';



@Pipe({
    name:'assetIdFilter'
})

export class ReturnBookFilter implements PipeTransform{
    transform(data:returnBook[],searchTerm:string):returnBook[]{
        if(!data || !searchTerm){
            return data ;
        }
        return data.filter(employee=>
            employee.assetId.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)

    }



}