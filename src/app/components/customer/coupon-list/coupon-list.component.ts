import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponentCustomer implements OnInit {

  public customerTitle: string;

  constructor() { }

  ngOnInit() {

    this.customerTitle = sessionStorage.getItem("userName");  
  }

}