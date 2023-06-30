import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsListComponent } from './formes/home/goods/presentation/goodsList/goodsList.component';
import { GoodReceiptComponent } from './formes/home/goods/presentation/good-receipt/good-receipt.component';
import { GoodAssigmentComponent } from './formes/home/goods/presentation/goodAssigment/goodAssigment.component';
import { ReportgoodsComponent } from './formes/home/goods/presentation/reportgoods/reportgoods.component';

const routes: Routes = [
  {
    path: "goodsList",
    component: GoodsListComponent
  },
  {
    path: "goodsReceipt",
    component: GoodReceiptComponent
  },
  {
    path: "goodsRemittance",
    component: GoodAssigmentComponent
  },
  {
    path: "reportgoods",
    component: ReportgoodsComponent
  },
  
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'goodsList'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
