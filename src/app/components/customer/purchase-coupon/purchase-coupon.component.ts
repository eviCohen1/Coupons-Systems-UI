import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  public customerTitle: string;

  constructor() { }

  ngOnInit() {

    this.customerTitle = "Evi Cohen"
  }

}