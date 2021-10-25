import { Component } from '@angular/core';
import { CouponsService } from '../service/coupons.service';

@Component({
  selector: 'app-coupons-page',
  templateUrl: './coupons-page.component.html',
  styleUrls: ['./coupons-page.component.css'],
})
export class CouponsPageComponent {
  constructor(private couponsService: CouponsService) {}

  get thereAreCoupons() {
    return this.couponsService.coupons.length > 0;
  }
}
