import { Component, OnInit } from '@angular/core';
import { CouponsService } from '../service/coupons.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  _pageSize = 10;
  _currentPage = 0;
  _cols = 5;

  constructor(private couponService: CouponsService) {}

  ngOnInit() {
    this._cols = window.innerWidth <= 680 ? 2 : 5;
  }

  onResize(event: any) {
    this._cols = event.target.innerWidth <= 680 ? 2 : 5;
  }

  get cols() {
    return this._cols;
  }

  get pageSize() {
    return this._pageSize;
  }

  set pageSize(event: any) {
    this._pageSize = event.pageSize;
  }

  get currentPage() {
    return this._currentPage;
  }

  set currentPage(event: any) {
    this._currentPage = event.pageIndex;
  }

  get coupons() {
    const offset = this.pageSize * this.currentPage;
    return this.couponService.coupons.slice(offset, offset + this.pageSize);
  }

  get numberOfCoupons() {
    return this.couponService.coupons.length;
  }
}
