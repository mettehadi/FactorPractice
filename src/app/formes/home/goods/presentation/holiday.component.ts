import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { FilterAndSortConditions } from 'src/app/base/models/filter-and-sort-conditions-model';
import { GetHoliday, OutPutHoliday } from '../application/holiday';
import { HolidayService } from '../application/holiday.service';
import { dynamicfilter, UserOutPutViweModel } from '../application/holiday';
import {NgForm} from "@angular/forms"
@Component({
  selector: 'app-hholiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {
  dynamicfilter: dynamicfilter []=[]
  UserOutPutViweModel: UserOutPutViweModel []=[]
  constructor(private HolidayService: HolidayService) {
  }
  

  holidayData!: OutPutHoliday[]

  async ngOnInit() { 
   this.GetHoliday()
  }

  startDate = ''
  endDate = ''
  GetHoliday() {
    // var data: GetHoliday = {
    //   startDate: this.startDate,
    //   endDate: this.endDate
    // }
    // this.HolidayService.GetDataFromServer(data).subscribe(getdata => {
    //   this.holidayData = getdata;
    // })
  }
 
}

