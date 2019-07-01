import { Pipe, PipeTransform} from '@angular/core';

import { customer } from 'src/app/Interfaces/Icustomer';

@Pipe({
    name:'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform{
transform(value: customer[], filterBy: string): customer[]{
   
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    
   
    return filterBy ? value.filter((customer: customer) =>
    customer.CustomerName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
}
}