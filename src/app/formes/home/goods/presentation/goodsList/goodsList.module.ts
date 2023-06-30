import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsListComponent } from './goodsList.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [GoodsListComponent]
})
export class GoodsListModule { }
