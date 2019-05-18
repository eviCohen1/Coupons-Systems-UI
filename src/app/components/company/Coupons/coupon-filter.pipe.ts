import { Pipe, PipeTransform} from '@angular/core';
import { Icoupons } from 'src/app/Interfaces/Icoupons';

@Pipe({
    name:'couponFilter'
})
export class CouponFilterPipe implements PipeTransform{
transform(value: Icoupons[], filterBy: string): Icoupons[]{
   
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    
   
    return filterBy ? value.filter((coupon: Icoupons) =>
        coupon.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
}
}