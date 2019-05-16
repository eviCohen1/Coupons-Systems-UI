import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/components/company/Coupons/coupon.service';
import { Subscription } from 'rxjs';
import { Icoupons } from 'src/app/Interfaces/Icoupons';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],

})
export class CompaniesComponent implements OnInit {

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