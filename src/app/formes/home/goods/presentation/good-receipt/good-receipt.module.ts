import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodReceiptComponent } from './good-receipt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [GoodReceiptComponent]
})
export class GoodReceiptModule { }
