import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-updateCoupon',
  templateUrl: './updateCoupon.component.html',
  styleUrls: ['./updateCoupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

 @Input() public companyTitle : string; 

  constructor() { }

  ngOnInit() {

    this.companyTitle = "mPrest"; 
  }

}
