import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  public companyTitle : string; 

  constructor() { }

  ngOnInit() {

    this.companyTitle = "mPrest"; 
  }

}
