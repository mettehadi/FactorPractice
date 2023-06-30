import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
   FormsModule,
   ReactiveFormsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
