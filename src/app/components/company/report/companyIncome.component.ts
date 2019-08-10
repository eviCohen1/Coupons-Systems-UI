import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { income } from 'src/app/Interfaces/Income';
import { CompanyFinanceService } from './company.service.service';




@Component({
  selector: 'app-companyIncome',
  templateUrl: './companyIncome.component.html',
  styleUrls: ['./companyIncome.component.css']
})
export class CompanyFinanceComponent implements OnInit {

  pageTitle:string = "company Income List";
  listFilter:string ='';
  income : income[]; 
  obsSubscription:Subscription;
  obsSubscriptionCoupons:Subscription;
  response:String;
  loading: boolean; 
  
  constructor(private srvProduct:CompanyFinanceService, private _router:Router ) {   
  }

  ngOnInit(): void {
    this.loading = true;
    this.getcompanyIncomeTable(); 


  }
  ngDoCheck():void { 
  } 

  getcompanyIncomeTable() { 
    this.obsSubscriptionCoupons = this.srvProduct.getcompanysIncome().subscribe(
      (data) => {
        this.income=data
        this.loading = false;
      });
      (err:any) => {
        this.loading = false;
        alert(err)
      }

  }
}