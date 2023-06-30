import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HolidayService } from '../../application/holiday.service';

@Component({
  selector: 'app-reportgoods',
  templateUrl: './reportgoods.component.html',
  styleUrls: ['./reportgoods.component.scss']
})
export class ReportgoodsComponent implements OnInit {

  constructor(private goodsService: HolidayService) { }
  getReciptGoodsSubc!: Subscription;
  googsReportList:any[]=[]
  ngOnInit() {
    this.getReciptGoodsSubc = this.goodsService.getFinalGoods.subscribe(c => {
      if(c.length>0){
      this.googsReportList = c
      }
      console.log(  this.googsReportList);
      
  })
this.mathCount()
}
inventory:number=0
averagePrice:number = 0
mathCount(){
  this.googsReportList?.forEach(c=>{
   c.inventory= (c?. previousCont !=0? c?. previousCont - c?.Count: c?.Count - c?. previousCont)
   c.averagePrice = c?. previousPrice !=0 ?(c?.previousPrice + c?.Price / 2)  :c.Price
   
   
   

  })

}
}
