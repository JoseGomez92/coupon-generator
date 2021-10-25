import { Component, Input } from '@angular/core';
import { Coupon } from '../interface/coupon.interface';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css'],
})
export class CouponComponent {
  @Input() coupon!: Coupon;
}
