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
            d.assetcategory.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)

    }
    
}

export class AssetFilterPipe1 implements PipeTransform{
    transform(data:Asset[],searchTerm1:string): Asset[]{
        if(!data || !searchTerm1){
            return data ;
        }
        return data.filter(d=>
            d.brandName.toLowerCase().indexOf(searchTerm1.toLowerCase()) !== -1)

    }
    
}