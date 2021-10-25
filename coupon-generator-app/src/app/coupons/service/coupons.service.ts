import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Coupon } from '../interface/coupon.interface';

@Injectable()
export class CouponsService {
  private _coupons: Array<Coupon> = [];
  private servicePath = 'coupons';

  constructor(private httpClient: HttpClient) {}

  get coupons() {
    return [...this._coupons];
  }

  set coupons(coupons: Array<Coupon>) {
    this._coupons = coupons;
  }

  findCoupons(amount: number) {
    const params = new HttpParams().set('amount', amount);
    this.httpClient
      .get<Coupon[]>(`${environment.apiUrl}/${this.servicePath}/generate`, {
        params,
      })
      .subscribe((resp) => (this.coupons = resp));
  }
}
