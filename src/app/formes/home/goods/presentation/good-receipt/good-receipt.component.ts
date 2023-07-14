import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HolidayService } from '../../application/holiday.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-good-receipt',
  templateUrl: './good-receipt.component.html',
  styleUrls: ['./good-receipt.component.scss']
})
export class GoodReceiptComponent implements OnInit ,OnDestroy{
  name:string=""
  count:number=0
  price:number|any=0
  isEdit:boolean=false
  isNewAdd:boolean = false
    recieveGoodList = [
    {
      "goodsId": 1,
      "Name": "بیسکوییت",
      "Count": 0,
      "ActionDate":"",
      "category":"خواروبار",
      "Type":"",
      "previousCont":0,
      "previousPrice":0,
      "isSelect":false,
      "isDelete":false,
      "Price":'0',
      "isEdit":false
    },
    {
      "goodsId": 2,
      "Name": "کیک",
      "Count": 0,
      "ActionDate":"",
      "category":"خواروبار",
      "Type":"",
      "previousCont":0,
      "previousPrice":0,
      "isSelect":false,
      "Price":'0',
      "isDelete":false,
      "isEdit":false
    },
    {
      "goodsId": 3,
      "Name": "شکلات",
      "Count": 0,
      "ActionDate":"",
      "category":"خواروبار",
      "Type":"",
      "previousCont":0,
      "previousPrice":0,
      "Price":'0',
      "isEdit":false
    },
    {
      "goodsId": 4,
      "Name": "کروسان",
      "Count": 0,
      "ActionDate":"",
      "category":"خواروبار",
      "Type":"",
      "previousCont":0,
      "previousPrice":0,
      "isSelect":false,
      "isDelete":false,
      "Price":'0',
      "isEdit":false
    },
    {
      "goodsId": 5,
      "Name": "آب میوه",
      "Count": 0,
      "ActionDate":"",
      "category":"خواروبار",
      "Type":"",
      "previousCont":0,
      "previousPrice":0,
      "isSelect":false,
      "Price":'0',
      "isDelete":false,
      "isEdit":false
    },
    {
      "goodsId": 0,
      "Name": "آب معدنی",
      "Count": 0,
      "ActionDate":"",
      "category":"خواروبار",
      "Type":"",
      "Price":'0',
      "previousCont":0,
      "previousPrice":0,
      "isDelete":false,
      "isSelect":false,
      "isEdit":false
    },
    {
      "goodsId": 7,
      "Name": "بستنی",
      "Count": 0,
      "ActionDate":"",
      "category":"خواروبار",
      "Type":"",
      "Price":'0',
      "isDelete":false,
      "isSelect":false,
      "previousCont":0,
      "previousPrice":0,
      "isEdit":false
    },
  ]
  
  date:string=""
  isSelect:boolean=false
  root:any
  assignList:any
  getGoodsSubc!: Subscription; 
  constructor(private goodsService: HolidayService,private route: ActivatedRoute,) { }

  ngOnInit() {
  this.root =  this.route.snapshot.url[0].path
    this.getGoodsSubc = this.goodsService.getRecieveGoods.subscribe(c => {
      if(c.length>0){
      this.recieveGoodList = c
      this.recieveGoodList.forEach(res=>{
        res.isSelect = false
      })
      }
    })
   this.googsListSearch =  this.recieveGoodList
   this.assignList =  this.recieveGoodList
    this.recieveGoodList =  this.recieveGoodList
         
  }
  addGoode(){
    this.recieveGoodList.push( {
      "goodsId": 0,
      "Name": "",
      "Count": 0,
      "ActionDate":"",
      "category":"خواروبار",
      "Type":"",
      "Price":'0',
      "previousCont":0,
      "previousPrice":0,
      "isEdit":true,
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
  OnDeleteAssign(item:number){
    this.assignList.splice( this.recieveGoodList.findIndex(c=>c.goodsId == item),1)
  }
  cancelDeleteAssign(item:number){
    this.assignList.filter((x: { goodsId: number; })=>x.goodsId == item).forEach((c: { isDelete: boolean; })=>{
      c.isDelete = false
     
     })
  }
  errorCountLimit:boolean =false
  OnDSubmitAssign(item:number){
    if(this.count ==0 ){
      // alert("لطفا مقادیر را پر کنید")
       this.errorCunt = true
     }if(this.price ==0 ){
      // alert("لطفا مقادیر را پر کنید")
       this.errorPrice = true
     }
    if(this.count !=0 ){
       // alert("لطفا مقادیر را پر کنید")
        this.errorCunt = false
      }if(this.price !=0 ){
       // alert("لطفا مقادیر را پر کنید")
        this.errorPrice = false
      }

    if(this.count !=0  &&this.price !=0 ){
     
    this.assignList.filter((x: { goodsId: number; })=>x.goodsId == item).forEach((c: {
      previousCont: any;
      previousPrice: string; Count: number; Price: string; ActionDate: string; Type: string; isEdit: boolean; 
})=>{
      if(this.count > c.Count){
this.errorCountLimit = true
return
      }
      else{
        c.previousCont = c.Count ,
        c.previousPrice =c.Price
      c.Count= this.count
      c.Price=   Math.round(this.price as any)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') 
      c.ActionDate = this.date.replace(/-/g,"/")
      c.Type = "Assigment"
      c.isEdit = false
      }
     
     })
    
     this.goodsService.getRecieveGoods.next(  this.assignList)
     this.goodsService.getFinalGoods.next(this.assignList)
     this.assignList =  this.assignList;
  }
  }
  accept(id:number){

  }
  cancelAssign(id:number){
    this.assignList.filter((x: { goodsId: number; })=>x.goodsId == id).forEach((c: { isEdit: boolean; })=>{
      c.isEdit = false
     
     })
  }
  cancel(id:number){
    this.recieveGoodList.filter(x=>x.goodsId == id).forEach(c=>{
      c.isEdit = false
     
     })
  }
 
  errorName:boolean=false
  errorCunt:boolean=false
  errorPrice:boolean=false
  OnDSubmit(id:number){
   if(this.count ==0 ){
      // alert("لطفا مقادیر را پر کنید")
       this.errorCunt = true
     }if(this.price ==0 ){
      // alert("لطفا مقادیر را پر کنید")
       this.errorPrice = true
     }
    if(this.count !=0 ){
       // alert("لطفا مقادیر را پر کنید")
        this.errorCunt = false
      }if(this.price !=0 ){
       // alert("لطفا مقادیر را پر کنید")
        this.errorPrice = false
      }

    if(this.count !=0  && this.price !=0 ){
    this.recieveGoodList.filter(x=>x.goodsId == id).forEach(c=>{
    
      c.Count= this.count
      c.Price=   Math.round(this.price as any)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') 
      c.ActionDate = this.date.replace(/-/g,"/")
      c.Type ="Recipt"
      c.isEdit = false
     
     })
    
     this.goodsService.getRecieveGoods.next(  this.recieveGoodList)
     
     this.recieveGoodList =  this.recieveGoodList;
     this.assignList = this.recieveGoodList
  }}
  // OnReciept(id:number){
  //   this.recieveGoodList.filter(x=>x.goodsId == id).forEach(c=>{
  //     c.ActionDate = "2022/04/12"
  //     c.Type = "Recipt"
     
  //    })
  //   this.goodsService.getRecieveGoods.next(   this.recieveGoodList)
  //    this.recieveGoodList =  this.recieveGoodList
  // }
  isDelete:boolean = false
  openModal(id:number){
    this.recieveGoodList.filter(x=>x.goodsId == id).forEach(c=>{
      c.isDelete = true
     
     })
  
  }
  cancelDelete(id:number){
    this.recieveGoodList.filter(x=>x.goodsId == id).forEach(c=>{
      c.isDelete = false
     
     })
    
  }

  private _searchGoods:any;

get searchGoods() {
  return this._searchGoods;
}
googsListSearch:any
 delayTim:any
firstRequest: boolean = true;
set searchGoods(val) {
  const that = this;
  clearTimeout(this.delayTim);
  this.delayTim = setTimeout(() => {
    if (!that.firstRequest) {
      that.onDoSearch(val);
      this._searchGoods = val;
    }
    that.firstRequest = false;
  }, 300);
}
onDoSearch(searchInput = this.searchGoods) {
  if (searchInput?.toString()?.length > 2) {

    this.recieveGoodList = this.googsListSearch.filter((x: { Name: string; } ) => x.Name.toLowerCase().includes(searchInput.toLowerCase()));
  }
  else {
    this.recieveGoodList = this.googsListSearch
  }
}
  ngOnDestroy(): void {
    this.getGoodsSubc?.unsubscribe()
    
  }
}

