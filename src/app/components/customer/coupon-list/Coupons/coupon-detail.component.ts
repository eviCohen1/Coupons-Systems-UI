import { Component, OnInit} from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';

import { Icoupons } from 'src/app/Interfaces/Icoupons';
import { CouponServiceCustomer } from './coupon.service';

@Component({
    templateUrl: './coupon-detail.component.html'
})
export class CouponDetailComponentCustomer implements OnInit { 
 pageTitle: string = 'Coupon Detail';
 coupons:Icoupons[];
 coupon:Icoupons
  
 constructor(private _router:Router,private route:ActivatedRoute,private srvCoupon:CouponServiceCustomer){
 }
ngOnInit(){
    let id= +this.route.snapshot.paramMap.get('id')
    this.srvCoupon.getCouponById(id).subscribe(
        (data) => this.coupon = data,
        (err) =>console.log(err)
    )
    
}



 onBack() {
    this._router.navigate(['/puschasedCoupon']);
}
}
