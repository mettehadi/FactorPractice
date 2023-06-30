import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorService } from './base/service/interceptor.service';
import { HomeModule } from './formes/home/goods/home.module';

import { GoodsListModule } from './formes/home/goods/presentation/goodsList/goodsList.module';
import { GoodReceiptModule } from './formes/home/goods/presentation/good-receipt/good-receipt.module';
import { GoodAssigmentModule } from './formes/home/goods/presentation/goodAssigment/goodAssigment.module';
import { ReportgoodsModule } from './formes/home/goods/presentation/reportgoods/reportgoods.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    GoodsListModule,
    GoodReceiptModule,
    GoodAssigmentModule,
    ReportgoodsModule
   
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule { }
