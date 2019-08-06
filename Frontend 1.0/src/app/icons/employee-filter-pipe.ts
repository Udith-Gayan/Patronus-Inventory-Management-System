import { PipeTransform ,Pipe} from '@angular/core';
import { Employee } from '../models/employee';


@Pipe({
    name:'employeeFilter'
})

export class EmployeeFilterPipe implements PipeTransform{
    transform(data:Employee[],searchTerm:string):Employee[]{
        if(!data || !searchTerm){
            return data ;
        }
        return data.filter(employee=>
            employee.nic.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)

    }
}