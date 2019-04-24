import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { Icoupons } from './Icoupons';
import { CouponService } from './coupon.service';

@Component({
    templateUrl: './coupon-detail.component.html'
})
export class CouponDetailComponent implements OnInit { 
 pageTitle: string = 'Coupon Detail';
 coupons:Icoupons[];
 coupon:Icoupons
  
 constructor(private _router:Router,private route:ActivatedRoute,private srvCoupon:CouponService){
 }
ngOnInit(){
    let id= +this.route.snapshot.paramMap.get('id')
    this.srvCoupon.getCouponById(id).subscribe(
        (data) => this.coupon = data,
        (err) =>console.log(err)
    )
    
}
onRatingClicked(message: string): void {
    this.pageTitle = 'Coupon Detail: ' + message;
 }
 onBack() {
    this._router.navigate(['/coupons']);
}
}
