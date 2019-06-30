import { Component, OnInit } from '@angular/core';
import { Icoupons } from 'src/app/Interfaces/Icoupons';
import { Subscription } from 'rxjs';
import { CouponService } from 'src/app/components/company/Coupons/coupon.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  pageTitle:string = " Coupon List ";
  imageWidth:number = 40;
  imageMargin:number = 2 ; 
  showImage:Boolean = false;
  listFilter:string ='';
  coupons:Icoupons[];
  obsSubscription:Subscription;
  obsSubscriptionCoupons:Subscription; 
  
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
