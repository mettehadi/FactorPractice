import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HolidayComponent } from './presentation/holiday.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
   ReactiveFormsModule
  ],
  declarations: [HolidayComponent]
})
export class HolidayModule { }
