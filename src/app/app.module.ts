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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from './components/log-in/log-in.component';
import { AddCouponComponent } from './components/company/add-coupon/add-coupon.component';
import { CompanyListComponent } from './components/admin/company-list/company-list.component';
import { CustomerListComponent } from './components/admin/customer-list/customer-list.component';
import { PurchaseCouponComponent } from './components/customer/purchase-coupon/purchase-coupon.component';
import { PurchasedCouponComponent } from './components/customer/purchased-coupon/purchased-coupon.component';
import { CompaniesComponent } from './components/admin/company-list/companies/companies.component';
import { CustomersComponent } from './components/admin/customer-list/customers/customers.component';
import { JoinService } from './join.service';
import { CookieService } from 'ngx-cookie-service';
import { AddCompanyComponent } from './components/admin/addCompany/addCompany.component';
import { AddCustomerComponent } from './components/admin/addCustomer/addCustomer.component';
import { UpdateCustomerComponent } from './components/admin/updateCustomer/updateCustomer.component';
import { UpdateCompanyComponent } from './components/admin/updateCompany/updateCompany.component';
import { CustomersService } from './components/admin/customer-list/customers/customers.service';
import { CustomerFilterPipe } from './components/admin/customer-list/customers/customer-filter.pipe';
import { CompaniesService } from './components/admin/company-list/companies/companies.service';
import { CompanyFilterPipe } from './components/admin/company-list/companies/companies-filter.pipe';
import { AddCompanyService } from './components/admin/addCompany/addCompany.service';
import { UpdateCouponComponent } from './components/company/updateCoupon/updateCoupon.component';
import { CouponListComponentCustomer } from './components/customer/coupon-list/Coupons/coupon-list.component';
import { AuthenticationService } from './components/log-in/AuthenticationService.service';
import { UpdateCompanyService } from './components/admin/updateCompany/updateCompant.service';
import { TokenInterceptor } from './httpInterceptor';
import { AddCustomerService } from './components/admin/addCustomer/addCustomer.service';
import { UpdateCustomerService } from './components/admin/updateCustomer/updateCustomer.service';
import { AddCouponService } from './components/company/add-coupon/add-coupon.service';
import { UpdateCouponService } from './components/company/updateCoupon/updateCoupon.service';



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
      PurchaseCouponComponent,
      PurchasedCouponComponent,
      CompaniesComponent,
      CustomersComponent,
      AddCompanyComponent,
      AddCustomerComponent, 
      UpdateCustomerComponent,
      UpdateCompanyComponent, 
      CustomerFilterPipe,
      CompanyFilterPipe,
      UpdateCouponComponent,
      CouponListComponentCustomer,
      couponListComponent
       
        ],
  imports: [BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule
          ],
  providers: [CouponService,
              JoinService,
              CookieService,
              CustomersService,
              CompaniesService,
              AddCompanyService,
              AuthenticationService,
              UpdateCompanyService,{
                provide: HTTP_INTERCEPTORS,
                useClass: TokenInterceptor,
                multi: true,
              }, 
              AddCustomerService,
              UpdateCustomerService, 
              AddCouponService,
              UpdateCouponService
              ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
