import { Component, OnDestroy, OnInit } from '@angular/core';
import { HolidayService } from '../../application/holiday.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-goodsList',
  templateUrl: './goodsList.component.html',
  styleUrls: ['./goodsList.component.scss']
})
export class GoodsListComponent implements OnInit ,OnDestroy{
  isEdit:boolean=false
  isNewAdd:boolean = false
  name:string=""
  count:number=0
  price:number=0
  googsList = [
    {
      "goodsId": 1,
      "Name": "بیسکوییت",
      "Count": 19,
      "ActionDate":"",
      "Type":"",
      "Price":8000.0,
      "isEdit":false
    },
    {
      "goodsId": 2,
      "Name": "کیک",
      "Count": 15,
      "ActionDate":"",
      "Type":"",
      "Price":12000.0,
      "isEdit":false
    },
    {
      "goodsId": 3,
      "Name": "شکلات",
      "Count": 32,
      "ActionDate":"2",
      "Type":"",
      "Price":50000.0,
      "isEdit":false
    },
    {
      "goodsId": 4,
      "Name": "کروسان",
      "Count": 15,
      "ActionDate":"",
      "Type":"",
      "Price":15000.0,
      "isEdit":false
    },
    {
      "goodsId": 5,
      "Name": "آب میوه",
      "Count": 20,
      "ActionDate":"",
      "Type":"",
      "Price":12000.0,
      "isEdit":false
    },
    {
      "goodsId": 6,
      "Name": "آب معدنی",
      "Count": 45,
      "ActionDate":"",
      "Type":"",
      "Price":10000.0,
      "isEdit":false
    },
    {
      "goodsId": 7,
      "Name": "بستنی",
      "Count": 33,
      "ActionDate":"",
      "Type":"",
      "Price":20000.0,
      "isEdit":false
    },
  ]
  constructor(private goodsService: HolidayService) { }
  getGoodsSubc!: Subscription;
  ngOnInit() {
    this.getGoodsSubc = this.goodsService.getRecieveGoods.subscribe(c => {
      if(c.length>0){
        this.googsList = c
      }
     
    })
    this.googsList =  this.googsList
  }
  addGoode(){
    this.googsList.push( {
      "goodsId": 0,
      "Name": "",
      "Count": 0,
      "ActionDate":"0",
      "Type":"",
      "Price":0,
      "isEdit":true
    }
    )
    this.isNewAdd = true
    this.goodsService.getGoods.next( this.googsList)
  }
  OnDelete(item:number){
    this.googsList.splice( this.googsList.findIndex(c=>c.goodsId == item),1)
  }

  Edit(id:number){
   var data= this.googsList.filter(x=>x.goodsId == id).forEach(c=>{
    c.isEdit = true
   
   }
    )
   this.googsList = this.googsList
  

  }
  cancel(id:number){
    this.googsList.filter(x=>x.goodsId == id).forEach(c=>{
      c.isEdit = false
     
     })
  }
 
  OnDSubmit(id:number){
    this.googsList.filter(x=>x.goodsId == id).forEach(c=>{
      c.Name = this.name
      c.Count= this.count
      c.Price= this.price
      c.isEdit = false
     
     })
     this.goodsService.getGoods.next( this.googsList)
     this.googsList = this.googsList 
  
}
ngOnDestroy(): void {
  this.getGoodsSubc?.unsubscribe()
  
}
}