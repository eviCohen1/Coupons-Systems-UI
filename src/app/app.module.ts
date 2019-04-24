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


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, MenuComponent, HomeComponent, AdminComponent, CompanyComponent, CustomerComponent],
  imports: [BrowserModule,AppRoutingModule],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
