import { Component, OnInit } from '@angular/core';
import { Icoupons } from 'src/app/Interfaces/Icoupons';
import { PurchaseCouponService } from './purchase-coupon.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  public customerTitle: string;
  public coupon : Icoupons;  
  obsSubscription:Subscription;
  public response:String;
  loading: boolean;

  constructor(private srvAddCoupon: PurchaseCouponService, private _router: Router) { }

  ngOnInit() {

    this.loading = true;
    this.customerTitle = sessionStorage.getItem("userName"); 
  }

  buyCoupon(Id) { 

    switch (Id) {
      case 1 : {
        this.coupon = <Icoupons>{}; 
        this.coupon.title = "Cookie";
        this.coupon.amount = 50; 
        this.coupon.type = "FOOD"; 
        this.coupon.message ="Free Toasted"; 
        this.coupon.price = 100;
        this.coupon.image = "assets/images/coupon 2.jpg"; 
        this.coupon.active = true; 
        this.coupon.id = 55; 

        this.Subscribe(this.coupon); 


       ;

        break;
      }
      case 2 : {

        this.coupon = <Icoupons>{}; 
        this.coupon.title = "BulkBarn";
        this.coupon.amount = 20; 
        this.coupon.type = "HEALTH"; 
        this.coupon.message ="save 50%"; 
        this.coupon.price = 200;
        this.coupon.image = "assets/images/Coupon 11.png"; 
        this.coupon.active = true; 
        this.coupon.id = 55; 
       
        this.Subscribe(this.coupon); 
        
        break;
      }

      case 3: {
        this.coupon = <Icoupons>{}; 
        this.coupon.title = "Sales & Deals";
        this.coupon.amount = 50; 
        this.coupon.type = "CAMPING"; 
        this.coupon.message ="70% OFF"; 
        this.coupon.price = 99.99;
        this.coupon.image = "assets/images/Coupon 3.jpg"; 
        this.coupon.active = true; 
        this.coupon.id = 55; 

        this.Subscribe(this.coupon); 
        break;
      }
      case 4: {
        this.coupon = <Icoupons>{}; 
        this.coupon.title = "Acqua Plus";
        this.coupon.amount = 30; 
        this.coupon.type = "TRAVELING"; 
        this.coupon.message ="10% off"; 
        this.coupon.price = 99.99;
        this.coupon.image = "assets/images/Coupon 5.jpg"; 
        this.coupon.active = true; 
        this.coupon.id = 55; 
 
        this.Subscribe(this.coupon); 
         break;
       }
       case 5: {
        this.coupon = <Icoupons>{}; 
        this.coupon.title = "Gas Saving";
        this.coupon.amount = 30; 
        this.coupon.type = "TRAVELING"; 
        this.coupon.message ="Save 5%"; 
        this.coupon.price = 49.99;
        this.coupon.image = "assets/images/Coupon 13.png"; 
        this.coupon.active = true; 
        this.coupon.id = 55;
 
        this.Subscribe(this.coupon); 
         break;
       }
 
       case 6: {

        this.coupon = <Icoupons>{}; 
        this.coupon.title = "Pizza King";
        this.coupon.amount = 30; 
        this.coupon.type = "RESTURANTS"; 
        this.coupon.message ="11 Orginal Sub"; 
        this.coupon.price = 10.99;
        this.coupon.image = "assets/images/Coupon 17.jpg"; 
        this.coupon.active = true; 
        this.coupon.id = 55;

        this.Subscribe(this.coupon); 
         break;
       }
       case 7: {
        this.coupon = <Icoupons>{}; 
        this.coupon.title = "Gretto Pizza";
        this.coupon.amount = 150; 
        this.coupon.type = "RESTURANTS"; 
        this.coupon.message ="2 Free Topping"; 
        this.coupon.price = 99.99;
        this.coupon.image = "assets/images/Coupon 24.png"; 
        this.coupon.active = true; 
        this.coupon.id = 55;
        
        this.Subscribe(this.coupon); 
         break;
       }
       case 8: {
        this.coupon = <Icoupons>{}; 
        this.coupon.title = "Mister Sparky";
        this.coupon.amount = 30; 
        this.coupon.type = "RESTURANTS"; 
        this.coupon.message ="$250 OFF"; 
        this.coupon.price = 99.99;
        this.coupon.image = "assets/images/Coupon 22.png"; 
        this.coupon.active = true; 
        this.coupon.id = 55;
 
        this.Subscribe(this.coupon);  
        break;
       }
 
       case 9: {
        this.coupon = <Icoupons>{}; 
        this.coupon.title = "Cook Books";
        this.coupon.amount = 30; 
        this.coupon.type = "FOOD"; 
        this.coupon.message ="Save $130"; 
        this.coupon.price = 99.99;
        this.coupon.image = "assets/images/Coupon 21.jpg"; 
        this.coupon.active = true; 
        this.coupon.id = 55;

        this.Subscribe(this.coupon); 
         break;
       }
       case 10: {
        this.coupon = <Icoupons>{}; 
        this.coupon.title = "Mister Sparky 2";
        this.coupon.amount = 30; 
        this.coupon.type = "SPORTS"; 
        this.coupon.message ="$250 OFF"; 
        this.coupon.price = 99.99;
        this.coupon.image = "assets/images/Coupon 29.png"; 
        this.coupon.active = true; 
        this.coupon.id = 55;
         
        this.Subscribe(this.coupon); 
          break;
        }
        case 11: {
          this.coupon = <Icoupons>{}; 
        this.coupon.title = "ACE Song Check";
        this.coupon.amount = 30; 
        this.coupon.type = "FOOD"; 
        this.coupon.message ="Smog Check $28.75"; 
        this.coupon.price = 99.99;
        this.coupon.image = "assets/images/Coupon 29.png"; 
        this.coupon.active = true; 
        this.coupon.id = 55;
  
        this.Subscribe(this.coupon); 
        break;
        }
  
        case 12: {
          this.coupon = <Icoupons>{}; 
          this.coupon.title = "Skyline Canverns";
          this.coupon.amount = 30; 
          this.coupon.type = "FOOD"; 
          this.coupon.message ="Internet Coupon"; 
          this.coupon.price = 99.99;
          this.coupon.image = "assets/images/Coupon 28.png"; 
          this.coupon.active = true; 
          this.coupon.id = 55;
         
          this.Subscribe(this.coupon); 
          break;
        }
      default:
        alert("here");
    }


  }

  Subscribe(coupon) {

    this.obsSubscription = this.srvAddCoupon.addCoupon(coupon)
    .subscribe( 
     (data) => { 
        alert("Success to purchase a coupon, you charged " + coupon.price + "$ by eCoupon system"); 
        this.loading = false;
        this._router.navigate(["./puschasedCoupon"]);
    },
    (err:any) => {
        this.response = null;
        alert(err);
        this.loading = false;
        this._router.navigate(["./puschaseCoupon"]);
        }
    );

     
  }
}