import { Component, OnDestroy, OnInit } from '@angular/core';
import { HolidayService } from '../../application/holiday.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-goodAssigment',
  templateUrl: './goodAssigment.component.html',
  styleUrls: ['./goodAssigment.component.scss']
})
export class GoodAssigmentComponent implements OnInit,OnDestroy {
  showInput:boolean=false
  TotalList:any[] =[]
  name:string=""
  numberList:number[]=[]
  count:number=0
  price:number=0
  number:number=0
  isEdit:boolean=false
  isNewAdd:boolean = false
  googsAssigmentList = [
    {
      "goodsId": 1,
      "Name": "بیسکوییت",
      "Count": 19,
      "ActionDate":"2023-05-15",
      "Type":"Assignment",
      "Price":8000.0,
      "isEdit":false,
      "previousCont":0,
      "previousPrice":0
    },
    {
      "goodsId": 2,
      "Name": "کیک",
      "Count": 15,
      "ActionDate":"2023-05-14",
      "Type":"Recipt",
      "Price":12000.0,
      "isEdit":false,
      "previousCont":0,
      "previousPrice":0
    },
    {
      "goodsId": 3,
      "Name": "شکلات",
      "Count": 32,
      "ActionDate":"2023-05-15",
      "Type":"Assignment",
      "Price":50000.0,
      "isEdit":false,
      "previousCont":0,
      "previousPrice":0
    },
    {
      "goodsId": 4,
      "Name": "کروسان",
      "Count": 15,
      "ActionDate":"2023-05-15",
      "Type":"Assignment",
      "Price":15000.0,
      "isEdit":false, "previousCont":0,
      "previousPrice":0
    },
    {
      "goodsId": 5,
      "Name": "آب میوه",
      "Count": 20,
      "ActionDate":"2023-05-15",
      "Type":"Assignment",
      "Price":12000.0,
      "isEdit":false,
      "previousCont":0,
      "previousPrice":0
    },
    {
      "goodsId": 6,
      "Name": "آب معدنی",
      "Count": 45,
      "ActionDate":"2023-05-15",
      "Type":"Assignment",
      "Price":10000.0,
      "isEdit":false,
      "previousCont":0,
      "previousPrice":0
    },
    {
      "goodsId": 7,
      "Name": "بستنی",
      "Count": 33,
      "ActionDate":"2023-05-15",
      "Type":"Assignment",
      "Price":20000.0,
      "isEdit":false,
      "previousCont":0,
      "previousPrice":0
    },
  ]
  constructor(private goodsService: HolidayService) { }
  getReciptGoodsSubc!: Subscription;
  ngOnInit() {
    this.getReciptGoodsSubc = this.goodsService.getRecieveGoods.subscribe(c => {
      if(c.length>0){
      this.googsAssigmentList = c
      }
    })
    this.googsAssigmentList =  this.googsAssigmentList
  }
  addGoode(){
    this.googsAssigmentList.push( {
      "goodsId": 0,
      "Name": "",
      "Count": 0,
      "ActionDate":"0",
      "Type":"",
      "Price":0,
      "isEdit":true,
      "previousCont":0,
      "previousPrice":0
    }
    )
    this.isNewAdd = true
  }
  OnDelete(item:number){
    this.googsAssigmentList.splice( this.googsAssigmentList.findIndex(c=>c.goodsId == item),1)
  }

  Edit(id:number){
    this.showInput = true
   var data= this.googsAssigmentList.filter(x=>x.goodsId == id).forEach(c=>{
    c.isEdit = true
    this.number = c.Count
   }
    )
   this.googsAssigmentList = this.googsAssigmentList
   this.numberList = []
   for (let i = 0; i < this.number; i++) {
    this.numberList.push(i);
  }
  

  }
  accept(id:number){

  }
  cancel(id:number){
    this.googsAssigmentList.filter(x=>x.goodsId == id).forEach(c=>{
      c.isEdit = false
     
     })
  }
  previousPrice:number=0
  previousCont:number=0
  OnDSubmit(id:number){
    this.googsAssigmentList.filter(x=>x.goodsId == id).forEach(c=>{
     c.previousCont = c.Count
     c.previousPrice =c.Price
      c.Name =  c.Name
      c.Count= this.count
      c.Price= this.price
      c.isEdit = false
     
     })
  }
  OnReciept(id:number){
    this.TotalList  = this.googsAssigmentList.filter(x=>x.goodsId == id).forEach(c=>{
      c.ActionDate = "2022/04/12"
      c.Type = "Assigment"
     
     })as any
  
    // this.TotalList.push( ...this.googsAssigmentList , ...item)
    console.log(  this.googsAssigmentList);
    this.goodsService.getFinalGoods.next(this.googsAssigmentList)
     
  }
  ngOnDestroy(): void {
    this.getReciptGoodsSubc?.unsubscribe()
    
  }


}
