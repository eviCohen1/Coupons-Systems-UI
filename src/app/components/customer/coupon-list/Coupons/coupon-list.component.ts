import { Component, ViewEncapsulation, OnInit, DoCheck } from '@angular/core';
import { CouponServiceCustomer } from "./coupon.service";
import { Subscription } from 'rxjs';
import { Icoupons } from 'src/app/Interfaces/Icoupons';


@Component({
  selector: 'pm-couponsCustomer',
  templateUrl: "./coupon-list.component.html",
  styleUrls: ['./coupon-list.component.css'],
  encapsulation : ViewEncapsulation.None,
  providers:[CouponServiceCustomer]
  
  
})

export class CouponList implements OnInit, DoCheck {

    pageTitle:string = " Coupon List ";
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

    constructor(private srvProduct:CouponServiceCustomer) {   
    }

    ngOnInit(): void {

        this.loading = true ;
       this.obsSubscriptionCoupons = this.srvProduct.getCoupons().subscribe(
            (data) => {
              this.coupons=data
              this.loading = false;
            });
            (err:any) => {
              this.loading = false;
              console.log(err)
            }
    }
    ngDoCheck():void { 
    } 

     toggleImage() { 

        this.showImage=!this.showImage;

    }
    
    deleteCoupon(title) { 

        window.alert("delete coupon " + title); 
    }
    ngDestroy() { 
        this.obsSubscription.unsubscribe;
        this.obsSubscriptionCoupons.unsubscribe;
    } 




}