import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchased-coupon',
  templateUrl: './purchased-coupon.component.html',
  styleUrls: ['./purchased-coupon.component.css']
})
export class PurchasedCouponComponent implements OnInit {

  public customerTitle: string;

  constructor() { }

  ngOnInit() {

    this.customerTitle = "Evi Cohen"
  }

}