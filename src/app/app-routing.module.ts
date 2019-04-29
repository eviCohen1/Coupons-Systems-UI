import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CouponDetailComponent } from './components/company/Coupons/coupon-detail.component';
import { couponListComponent } from './components/company/Coupons/coupon-list.component';

const routes: Routes = [
  {path : "home", component: HomeComponent},
  {path : "admin", component: AdminComponent},
  {path : "company", component: CompanyComponent},
  {path : "customer", component: CustomerComponent},
  { path: 'coupons', component: couponListComponent},
  { path: 'coupon/:id',component:CouponDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
