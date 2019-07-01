import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/components/company/Coupons/coupon.service';
import { Subscription } from 'rxjs';
import { company } from 'src/app/Interfaces/Icompany';
import { CompaniesService } from './companies.service';

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

    constructor(private srvProduct:CompaniesService) {   
    }

    ngOnInit(): void {
        this.obsSubscriptionCoupons = this.srvProduct.getCompanies().subscribe(
            (data) => {this.company=data});
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