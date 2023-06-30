import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HolidayService } from '../../application/holiday.service';

@Component({
  selector: 'app-good-receipt',
  templateUrl: './good-receipt.component.html',
  styleUrls: ['./good-receipt.component.scss']
})
export class GoodReceiptComponent implements OnInit ,OnDestroy{
  name:string=""
  count:number=0
  price:number=0
  isEdit:boolean=false
  isNewAdd:boolean = false
    recieveGoodList = [
    {
      "goodsId": 1,
      "Name": "بیسکوییت",
      "Count": 19,
      "ActionDate":"2023-05-15",
      "Type":"Assignment",
      "Price":8000.0,
      "isEdit":false
    },
    {
      "goodsId": 2,
      "Name": "کیک",
      "Count": 15,
      "ActionDate":"2023-05-14",
      "Type":"Recipt",
      "Price":12000.0,
      "isEdit":false
    },
    {
      "goodsId": 3,
      "Name": "شکلات",
      "Count": 32,
      "ActionDate":"2023-05-15",
      "Type":"Assignment",
      "Price":50000.0,
      "isEdit":false
    },
    {
      "goodsId": 4,
      "Name": "کروسان",
      "Count": 15,
      "ActionDate":"2023-05-15",
      "Type":"Assignment",
      "Price":15000.0,
      "isEdit":false
    },
    {
      "goodsId": 5,
      "Name": "آب میوه",
      "Count": 20,
      "ActionDate":"2023-05-15",
      "Type":"Assignment",
      "Price":12000.0,
      "isEdit":false
    },
    {
      "goodsId": 6,
      "Name": "آب معدنی",
      "Count": 45,
      "ActionDate":"2023-05-15",
      "Type":"Assignment",
      "Price":10000.0,
      "isEdit":false
    },
    {
      "goodsId": 7,
      "Name": "بستنی",
      "Count": 33,
      "ActionDate":"2023-05-15",
      "Type":"Assignment",
      "Price":20000.0,
      "isEdit":false
    },
  ]
  getGoodsSubc!: Subscription; 
  constructor(private goodsService: HolidayService) { }

  ngOnInit() {
    this.getGoodsSubc = this.goodsService.getGoods.subscribe(c => {
      if(c.length>0){
      this.recieveGoodList = c
      }
    })
    this.recieveGoodList =  this.recieveGoodList
  }
  addGoode(){
    this.recieveGoodList.push( {
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
  }
  OnDelete(item:number){
    this.recieveGoodList.splice( this.recieveGoodList.findIndex(c=>c.goodsId == item),1)
  }

  Edit(id:number){
   var data= this.recieveGoodList.filter(x=>x.goodsId == id).forEach(c=>{
    c.isEdit = true
   }
    )
   this.recieveGoodList = this.recieveGoodList

  }
  accept(id:number){

  }
  cancel(id:number){
    this.recieveGoodList.filter(x=>x.goodsId == id).forEach(c=>{
      c.isEdit = false
     
     })
  }
 
  OnDSubmit(id:number){
    this.recieveGoodList.filter(x=>x.goodsId == id).forEach(c=>{
      c.Name = this.name
      c.Count= this.count
      c.Price= this.price
      c.isEdit = false
     
     })
    
     this.goodsService.getRecieveGoods.next(  this.recieveGoodList)
     this.recieveGoodList =  this.recieveGoodList;
  }
  OnReciept(id:number){
    this.recieveGoodList.filter(x=>x.goodsId == id).forEach(c=>{
      c.ActionDate = "2022/04/12"
      c.Type = "Recipt"
     
     })
    this.goodsService.getRecieveGoods.next(   this.recieveGoodList)
     this.recieveGoodList =  this.recieveGoodList
  }
  ngOnDestroy(): void {
    this.getGoodsSubc?.unsubscribe()
    
  }
}

