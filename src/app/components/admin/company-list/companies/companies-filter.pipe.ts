import { Pipe, PipeTransform} from '@angular/core';
import { company } from 'src/app/Interfaces/Icompany';

@Pipe({
    name:'companyFilter'
})
export class CompanyFilterPipe implements PipeTransform{
transform(value: company[], filterBy: string): company[]{
   
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    
   
    return filterBy ? value.filter((company: company) =>
    company.compName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
}
}