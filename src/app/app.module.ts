import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CouponFilterPipe } from './components/company/Coupons/coupon-filter.pipe';
import { CouponService } from './components/company/Coupons/coupon.service';
import { CouponDetailComponent } from './components/company/Coupons/coupon-detail.component';
import { couponListComponent } from './components/company/Coupons/coupon-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from './components/log-in/log-in.component';
import { AddCouponComponent } from './components/company/add-coupon/add-coupon.component';
import { CompanyListComponent } from './components/admin/company-list/company-list.component';
import { CustomerListComponent } from './components/admin/customer-list/customer-list.component';
import { CouponListComponent } from './components/customer/coupon-list/coupon-list.component';
import { PurchaseCouponComponent } from './components/customer/purchase-coupon/purchase-coupon.component';
import { PurchasedCouponComponent } from './components/customer/purchased-coupon/purchased-coupon.component';
import { CompaniesComponent } from './components/admin/company-list/companies/companies.component';
import { CustomersComponent } from './components/admin/customer-list/customers/customers.component';



@NgModule({
  declarations: [
      LayoutComponent,
      HeaderComponent, 
      FooterComponent, 
      MenuComponent, 
      HomeComponent, 
      AdminComponent, 
      CompanyComponent, 
      CustomerComponent, 
      CouponFilterPipe,
      CouponDetailComponent,
      couponListComponent,
      LogInComponent,
      AddCouponComponent,
      CompanyListComponent,
      CustomerListComponent,
      CouponListComponent,
      PurchaseCouponComponent,
      PurchasedCouponComponent,
      CompaniesComponent,
      CustomersComponent
      
    
        ],
  imports: [BrowserModule,AppRoutingModule,HttpClientModule,FormsModule],
  providers: [CouponService],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
