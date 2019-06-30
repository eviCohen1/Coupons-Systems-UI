import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CouponDetailComponent } from './components/company/Coupons/coupon-detail.component';
import { couponListComponent } from './components/company/Coupons/coupon-list.component';
import { CompanyListComponent } from './components/admin/company-list/company-list.component';
import { CustomerListComponent } from './components/admin/customer-list/customer-list.component';
import { AddCouponComponent } from './components/company/add-coupon/add-coupon.component';
import { CouponListComponent } from './components/customer/coupon-list/coupon-list.component';
import { PurchaseCouponComponent } from './components/customer/purchase-coupon/purchase-coupon.component';
import { PurchasedCouponComponent } from './components/customer/purchased-coupon/purchased-coupon.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LogInComponent } from './components/log-in/log-in.component';

const routes: Routes = [
  {path: '' , component:LogInComponent},
  {path : 'home', component: LayoutComponent},
  {path : "admin", component: AdminComponent},
  {path : "company", component: CompanyComponent},
  {path : "customer", component: CustomerComponent},
  {path: 'coupons', component: couponListComponent},
  {path: 'coupon/:id',component:CouponDetailComponent},
  {path: 'admin/company-list',component:CompanyListComponent},
  {path: 'admin/customer-list',component:CustomerListComponent},
  {path : "company/add-coupon", component: AddCouponComponent},
  {path : "company/coupons", component: CompanyComponent},
  {path : "custmer/coupon-list", component:CouponListComponent},
  {path : "custmer/puschase-coupon", component:PurchaseCouponComponent}, 
  {path : "custmer/puschased-coupon", component:PurchasedCouponComponent}, 
  {path : 'LogIn' ,component:LogInComponent}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
