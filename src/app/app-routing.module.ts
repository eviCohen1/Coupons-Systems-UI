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
import { PurchaseCouponComponent } from './components/customer/purchase-coupon/purchase-coupon.component';
import { PurchasedCouponComponent } from './components/customer/purchased-coupon/purchased-coupon.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AddCompanyComponent } from './components/admin/addCompany/addCompany.component';
import { AddCustomerComponent } from './components/admin/addCustomer/addCustomer.component';
import { UpdateCompanyComponent } from './components/admin/updateCompany/updateCompany.component';
import { UpdateCustomerComponent } from './components/admin/updateCustomer/updateCustomer.component';
import { UpdateCouponComponent } from './components/company/updateCoupon/updateCoupon.component';

import { CustomersComponent } from './components/admin/customer-list/customers/customers.component';
import { CouponListComponentCustomer } from './components/customer/coupon-list/coupon-list.component';
import { CouponDetailComponentCustomer } from './components/customer/coupon-list/Coupons/coupon-detail.component';
import { ReportsComponent } from './components/admin/reports/reports.component';
import { CustomersIncomeComponent } from './components/admin/reports/customerIncome/customerIncome.component';
import { CompanysIncomeComponent } from './components/admin/reports/companyIncome/companyIncome.component';
import { AllsIncomeComponent } from './components/admin/reports/allIncome/allIncome.component';
import { CompanyFinanceComponent } from './components/company/report/companyIncome.component';

const routes: Routes = [
  {path: '' , component:LogInComponent},
  {path : 'home', component: LayoutComponent},
  {path : "admin", component: AdminComponent},
  {path : "company", component: CompanyComponent},
  {path : "customer", component: CustomerComponent},
  {path: 'coupons', component: couponListComponent},
  {path: 'coupon/:id',component:CouponDetailComponent},
  {path: "companyList",component:CompanyListComponent},
  {path: "customerList",component:CustomerListComponent },
  {path : "addCoupon", component: AddCouponComponent},
  {path : "companyCoupons", component: CompanyComponent},
  {path : "couponList", component:couponListComponent}, 
  {path : "puschaseCoupon", component:PurchaseCouponComponent}, 
  {path : "puschasedCoupon", component:CouponListComponentCustomer}, 
  {path : 'LogIn' ,component:LogInComponent}, 
  {path : "addCompany", component:AddCompanyComponent}, 
  {path : "addCustomer", component:AddCustomerComponent}, 
  {path : "updateCompany", component:UpdateCompanyComponent}, 
  {path : "updateCustomer", component : UpdateCustomerComponent},
  {path : "updateCompanyCoupon", component:UpdateCouponComponent},
  {path: 'couponCust/:id',component:CouponDetailComponentCustomer},
  {path : "incomeReports", component:ReportsComponent},
  {path : "CustomersIncome", component:CustomersIncomeComponent},
  {path : "CompanyIncome", component:CompanysIncomeComponent}, 
  {path : "AllIncom", component:AllsIncomeComponent},
  {path : "CompanyFinanceReport", component:CompanyFinanceComponent}
  
  
  
  
 
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
