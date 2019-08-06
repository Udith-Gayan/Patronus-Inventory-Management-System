import { PipeTransform ,Pipe} from '@angular/core';
import { Asset } from '../asset/asset';



@Pipe({
    name:'assetfilter'
})

export class AssetFilterPipe implements PipeTransform{
    transform(data:Asset[],searchTerm:string): Asset[]{
        if(!data || !searchTerm){
            return data ;
        }
        return data.filter(d=>
            d.ram.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)

    }
}