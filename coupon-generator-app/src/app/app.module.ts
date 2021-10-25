import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CouponsModule } from './coupons/coupons.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CouponsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
