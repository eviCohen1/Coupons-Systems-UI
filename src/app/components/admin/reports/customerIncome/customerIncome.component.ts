import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { income } from 'src/app/Interfaces/Income';
import { CustomersIncomeService } from './customerIncome.service';


@Component({
  selector: 'app-customerIncome',
  templateUrl: './customerIncome.component.html',
  styleUrls: ['./customerIncome.component.css']
})
export class CustomersIncomeComponent implements OnInit {

  pageTitle:string = "Customer Income List";
  listFilter:string ='';
  income : income[]; 
  obsSubscription:Subscription;
  obsSubscriptionCoupons:Subscription;
  response:String;
  loading: boolean; 
  
  constructor(private srvProduct:CustomersIncomeService, private _router:Router ) {   
  }

  ngOnInit(): void {
    this.loading = true;
    this.getCustomerIncomeTable(); 


  }
  ngDoCheck():void { 
  } 

  getCustomerIncomeTable() { 
    this.obsSubscriptionCoupons = this.srvProduct.getCustomersIncome().subscribe(
      (data) => {
        this.income=data
        this.loading = false;
      });
      (err:any) => {
        this.loading = false;
        console.log(err)
      }

  }
}