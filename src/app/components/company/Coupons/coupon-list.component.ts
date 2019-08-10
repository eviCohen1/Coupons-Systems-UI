import { Component, ViewEncapsulation, OnInit, DoCheck } from '@angular/core';
import { CouponService } from "./coupon.service";
import { Subscription } from 'rxjs';
import { Icoupons } from 'src/app/Interfaces/Icoupons';


@Component({
  selector: 'pm-coupons',
  templateUrl: "./coupon-list.component.html",
  styleUrls: ['./coupon-list.component.css'],
  encapsulation : ViewEncapsulation.None,
  providers:[CouponService]
  
  
})

export class couponListComponent implements OnInit, DoCheck {

    pageTitle:string = sessionStorage.getItem("userName");  
    imageWidth:number = 40;
    imageMargin:number = 2 ; 
    showImage:Boolean = false;
    listFilter:string ='';
    coupons:Icoupons[];
    obsSubscription:Subscription;
    obsSubscriptionCoupons:Subscription
    response:String;
    loading: boolean;
    coupon : Icoupons;

    constructor(private srvProduct:CouponService) {   
    }

    ngOnInit(): void {

        this.loading = true ;
        this.getCompanyCoupons();  

    }

    getCompanyCoupons() { 
        this.obsSubscriptionCoupons = this.srvProduct.getCoupons().subscribe(
            (data) => {
              this.coupons=data
              this.loading = false;
            });
            (err:any) => {
              this.loading = false;
              alert(err)
            }
    }
    ngDoCheck():void { 
    } 

     toggleImage() { 

        this.showImage=!this.showImage;

    }
    deleteCoupon(couponDelete) { 
        this.coupon = <Icoupons>{}; 
        this.coupon.id = couponDelete.id ; 
        
        this.loading = true;

        this.obsSubscription = this.srvProduct.deleteCoupon(this.coupon)
        .subscribe(
          (data) => {   
              this.loading = false;
              this.getCompanyCoupons(); 
          },
          (err:any) => {
              this.response = null;
              alert(err);
              this.loading = false;
              this.getCompanyCoupons();  
              
          })
    
    }
    ngDestroy() { 
        this.obsSubscription.unsubscribe;
        this.obsSubscriptionCoupons.unsubscribe;
    } 




}