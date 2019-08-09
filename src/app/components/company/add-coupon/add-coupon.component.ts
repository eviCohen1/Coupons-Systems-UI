import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Icoupons } from 'src/app/Interfaces/Icoupons';
import { Router } from '@angular/router';
import { AddCouponService } from './add-coupon.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  public companyTitle : string; 

  obsSubscription:Subscription;
  public response:String;
  @ViewChild('f') addCouponForm:NgForm; 
  public coupon : Icoupons;  
  loading: boolean;



  constructor(private srvAddCoupon: AddCouponService, private _router: Router) { }

  ngOnInit() {

    this.companyTitle =sessionStorage.getItem("userName");  
  }


  onSubmit() { 
    
    this.coupon = <Icoupons>{}; 
    this.loading = true;
    this.coupon.title = this.addCouponForm.value.title;
    this.coupon.amount = this.addCouponForm.value.amount; 
    this.coupon.type = this.addCouponForm.value.type; 
    this.coupon.message = this.addCouponForm.value.message; 
    this.coupon.price = this.addCouponForm.value.price;
    this.coupon.image = this.addCouponForm.value.image; 
    this.coupon.active = this.addCouponForm.value.active; 
    this.coupon.id = 55; 


    this.obsSubscription = this.srvAddCoupon.addCoupon(this.coupon)
    .subscribe( 
        (data) => { 
            alert("success to create a coupon, you charged 100 $ by eCoupon system"); 
            this.loading = false;
            this._router.navigate(["./companyCoupons"]);
        },
        (err:any) => {
            this.response = null;
            alert(err);
            this.loading = false;
            this._router.navigate(["./addCoupon"]);
        }
    ); 



  }

}
