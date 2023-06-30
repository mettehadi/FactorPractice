import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import {dynamicfilter ,GetHoliday, OutPutHoliday  } from './holiday';
import { FilterAndSortConditions } from 'src/app/base/models/filter-and-sort-conditions-model';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  constructor(private http: HttpClient) { }

  getGoods =   new BehaviorSubject<any[]>([]);
  getRecieveGoods = new BehaviorSubject<any[]>([]);
  getFinalGoods = new BehaviorSubject<any[]>([]);

}