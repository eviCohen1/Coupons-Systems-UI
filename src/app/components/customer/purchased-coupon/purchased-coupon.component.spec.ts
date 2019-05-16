import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedCouponComponent } from './purchased-coupon.component';

describe('PurchasedCouponComponent', () => {
  let component: PurchasedCouponComponent;
  let fixture: ComponentFixture<PurchasedCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasedCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
