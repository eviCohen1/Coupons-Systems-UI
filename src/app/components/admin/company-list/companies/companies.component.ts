import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/components/company/Coupons/coupon.service';
import { Subscription } from 'rxjs';
import { company } from 'src/app/Interfaces/Icompany';
import { CompaniesService } from './companies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],

})
export class CompaniesComponent implements OnInit {

  pageTitle:string = "Company List";
    imageWidth:number = 40;
    imageMargin:number = 2 ; 
    showImage:Boolean = false;
    listFilter:string ='';
    company:company[];
    obsSubscription:Subscription;
    obsSubscriptionCoupons:Subscription
    response:String;
    loading: boolean;
   

    constructor(private srvProduct:CompaniesService,private _router: Router) {   
    }

    ngOnInit(): void {
      this.loading = true;
      this.getCompanyTable(); 
 
    }
    ngDoCheck():void { 
    } 
    deleteCompany(companyDelete) { 

      this.company = companyDelete; 
      this.loading = true;

      this.obsSubscription = this.srvProduct.deleteCompany(this.company)
      .subscribe(
        (data) => {  
            alert(data);  
            this.loading = false;
            this.getCompanyTable(); 
        },
        (err:any) => {
            this.response = null;
            alert(err);
            this.loading = false;
            this.getCompanyTable(); 
            
        })
  
      }

     toggleImage() { 

        this.showImage=!this.showImage;

    }

    getCompanyTable() { 
      this.obsSubscriptionCoupons = this.srvProduct.getCompanies().subscribe(
        (data) => {
          this.company=data
          this.loading = false;
        });
        (err:any) => {
          this.loading = false;
          console.log(err)
        } 


    }
    ngDestroy() { 
        this.obsSubscription.unsubscribe;
        this.obsSubscriptionCoupons.unsubscribe;
    } 


  }