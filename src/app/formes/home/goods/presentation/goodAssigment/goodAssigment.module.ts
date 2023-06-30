import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodAssigmentComponent } from './goodAssigment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [GoodAssigmentComponent]
})
export class GoodAssigmentModule { }
