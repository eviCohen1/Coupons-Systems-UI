import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CouponListComponentCustomer } from './coupon-list.component';


describe('CouponListComponent', () => {
  let component: CouponListComponentCustomer;
  let fixture: ComponentFixture<CouponListComponentCustomer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponListComponentCustomer]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponListComponentCustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
