import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { income } from 'src/app/Interfaces/Income';
import { AllIncomeService } from './allIncome.service';



@Component({
  selector: 'app-allIncome',
  templateUrl: './allIncome.component.html',
  styleUrls: ['./allIncome.component.css']
})
export class AllsIncomeComponent implements OnInit {

  pageTitle:string = "all Income List";
  listFilter:string ='';
  income : income[]; 
  obsSubscription:Subscription;
  obsSubscriptionCoupons:Subscription;
  response:String;
  loading: boolean; 
  
  constructor(private srvProduct:AllIncomeService, private _router:Router ) {   
  }

  ngOnInit(): void {
    this.loading = true;
    this.getallIncomeTable(); 


  }
  ngDoCheck():void { 
  } 

  getallIncomeTable() { 
    this.obsSubscriptionCoupons = this.srvProduct.getallIncome().subscribe(
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