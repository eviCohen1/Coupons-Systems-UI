import { Pipe, PipeTransform} from '@angular/core';
import { income } from 'src/app/Interfaces/Income';



@Pipe({
    name:'companyIncomeFilter'
})
export class CompanyIncomeFilterPipe implements PipeTransform{
transform(value: income[], filterBy: string): income[]{
   
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    
   
    return filterBy ? value.filter((income: income) =>
    income.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
}
}