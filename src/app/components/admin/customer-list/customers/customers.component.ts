import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { customer } from 'src/app/Interfaces/Icustomer';
import { CustomersService } from './customers.service';

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
  customer : customer[]; 
  obsSubscription:Subscription;
  obsSubscriptionCoupons:Subscription; 
  
  constructor(private srvProduct:CustomersService) {   
  }

  ngOnInit(): void {
      this.obsSubscriptionCoupons = this.srvProduct.getCustomers().subscribe(
          (data) => {this.customer=data});
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
