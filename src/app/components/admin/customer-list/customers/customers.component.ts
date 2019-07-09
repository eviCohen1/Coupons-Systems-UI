import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { customer } from 'src/app/Interfaces/Icustomer';
import { CustomersService } from './customers.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { Router } from '@angular/router';


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
  response:String;
  loading: boolean; 
  
  constructor(private srvProduct:CustomersService, private _router:Router ) {   
  }

  ngOnInit(): void {
    this.loading = true;
    this.getCustomerTable(); 


  }
  ngDoCheck():void { 
  } 

   toggleImage() { 

      this.showImage=!this.showImage;

  }
  deleteCustomer(customer){ 
    this.customer = customer; 
    this.loading = true ; 

    console.log(this.customer); 

    this.obsSubscription = this.srvProduct.deleteCustomer(this.customer)
    .subscribe(
      (data) => {  
         this.response = data;
          alert(this.response);  
          this.loading = false;
          this.getCustomerTable(); 

      },
      (err:any) => {

          this.response = null;
          alert(err);
          this.loading = false;
          this.getCustomerTable(); 
          
      })


  }
  ngDestroy() { 
      this.obsSubscription.unsubscribe;
      this.obsSubscriptionCoupons.unsubscribe;
  } 

  getCustomerTable() { 
    this.obsSubscriptionCoupons = this.srvProduct.getCustomers().subscribe(
      (data) => {
        this.customer=data
        this.loading = false;
      });
      (err:any) => {
        this.loading = false;
        console.log(err)
      }

  }
}