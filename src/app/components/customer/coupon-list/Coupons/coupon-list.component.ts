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

    pageTitle:string = " Coupon List ";
    imageWidth:number = 40;
    imageMargin:number = 2 ; 
    showImage:Boolean = false;
    listFilter:string ='';
    coupons:Icoupons[];
    obsSubscription:Subscription;
    obsSubscriptionCoupons:Subscription

    constructor(private srvProduct:CouponService) {   
    }

    ngOnInit(): void {
        this.obsSubscriptionCoupons = this.srvProduct.getCoupons().subscribe(
            (data) => {this.coupons=data});
            (err:any) => console.log(err)
    }
    ngDoCheck():void { 
    } 

     toggleImage() { 

        this.showImage=!this.showImage;

    }
    ngDestroy() { 
        this.obsSubscription.unsubscribe;
        this.obsSubscriptionCoupons.unsubscribe;
    } 




}