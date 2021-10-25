import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListComponent } from './list/list.component';
import { SearcherComponent } from './searcher/searcher.component';
import { CouponsPageComponent } from './coupons-page/coupons-page.component';
import { CouponsService } from './service/coupons.service';
import { CouponComponent } from './coupon/coupon.component';

@NgModule({
  declarations: [
    ListComponent,
    SearcherComponent,
    CouponsPageComponent,
    CouponComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
  exports: [CouponsPageComponent],
  providers: [CouponsService],
})
export class CouponsModule {}
