import { Component, ElementRef, ViewChild } from '@angular/core';
import { CouponsService } from '../service/coupons.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
})
export class SearcherComponent {
  @ViewChild('amountToGenerate')
  amountToGenerate!: ElementRef<HTMLInputElement>;
  minValue = 1;
  maxValue = 999999;

  constructor(private couponService: CouponsService) {}

  search() {
    const amount = Number(this.amountToGenerate.nativeElement.value);
    if (amount > this.minValue && amount < this.maxValue) {
      this.couponService.findCoupons(amount);
    }
    this.amountToGenerate.nativeElement.value = '';
  }
}
