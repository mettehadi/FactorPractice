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
  category:string=""
  activeModal:boolean=false
  price:number|string=0
  googsList = [
    {
      "goodsId": 1,
      "Name": "بیسکوییت",
      "category":"خواروبار",
      "Count": 0,
      "ActionDate":"",
      "Type":"",
      "Price":"0",
      "isDelete":false,
      "isEdit":false
    },
    {
      "goodsId": 2,
      "Name": "کیک",
      "Count": 0,
      "ActionDate":"",
      "category":"خواروبار",
      "Type":"",
      "Price":"0",
      "isDelete":false,
      "isEdit":false
    },
    {
      "goodsId": 3,
      "Name": "شکلات",
      "Count": 0,
      "ActionDate":"2",
      "category":"شیرینی",
      "Type":"",
      "Price":"0",
      "isDelete":false,
      "isEdit":false
    },
    {
      "goodsId": 4,
      "Name": "کروسان",
      "Count": 0,
      "ActionDate":"",
      "category":"شیرینی",
      "Type":"",
      "Price":"0",
      "isDelete":false,
      "isEdit":false
    },
    {
      "goodsId": 5,
      "Name": "آب میوه",
      "Count": 0,
      "ActionDate":"",
      "category":"نوشیدنی",
      "Type":"",
      "Price":"0",
      "isDelete":false,
      "isEdit":false
    },
    {
      "goodsId": 6,
      "Name": "آب معدنی",
      "Count": 0,
      "ActionDate":"",
      "category":"نوشیدنی",
      "Type":"",
      "Price":"0",
      "isDelete":false,
      "isEdit":false
    },
    {
      "goodsId": 7,
      "Name": "بستنی",
      "Count": 0,
      "ActionDate":"",
      "category":"لبنیات",
      "isDelete":false,
      "Type":"",
      "Price":"0",
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
     this.googsListSearch = this.googsList
    })
     this.googsList.forEach(c=>{
      c.Price  =  Math.round(c.Price as any)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') 
     
     }
      ) as any
      console.log( this.googsList);
      
  }
  addGoode(){
    this.googsList.push( {
      "goodsId": this.randomIdCreate(0, 1000),
      "Name": "",
      "Count": 0,
      "ActionDate":"0",
      "category":"",
      "isDelete":false,
      "Type":"",
      "Price":"0",
      "isEdit":true
    }
   
    )
    this.activeModal= true
    this.isNewAdd = true
    this.goodsService.getGoods.next( this.googsList)
  }
  OnDelete(item:number){
    this.googsList.splice( this.googsList.findIndex(c=>c.goodsId == item),1)
  }
  randomIdCreate(max: number, min: number) {
    var idCreate = Math.floor(Math.random() * (max - min)) + min
    return idCreate;
}
  Edit(id:number){
   var data= this.googsList.filter(x=>x.goodsId == id).forEach(c=>{
    c.isEdit = true
   
   }
    )
    this.isNewAdd=false
   this.googsList = this.googsList
  

  }
  cancel(id:number){
    if(  this.isNewAdd){
      this.googsList.splice( this.googsList.findIndex(c=>c.goodsId == id),1)
    }else{
      this.googsList.filter(x=>x.goodsId == id).forEach(c=>{
        c.isEdit = false
       
       })
    }
  
  }
  isDelete:boolean = false
  openModal(id:number){
    this.googsList.filter(x=>x.goodsId == id).forEach(c=>{
      c.isDelete = true
     
     })
  
  }
  cancelDelete(id:number){
    this.googsList.filter(x=>x.goodsId == id).forEach(c=>{
      c.isDelete = false
     
     })
    
  }
  errorName:boolean=false
  errorCunt:boolean=false
  errorPrice:boolean=false
  OnDSubmit(id:number){
    if(this.name =="" ){
     // alert("لطفا مقادیر را پر کنید")
      this.errorName = true
    }if(this.category =='' ){
      // alert("لطفا مقادیر را پر کنید")
       this.errorCunt = true
     }
     if(this.name !="" ){
      // alert("لطفا مقادیر را پر کنید")
       this.errorName = false
     }if(this.category !='' ){
       // alert("لطفا مقادیر را پر کنید")
        this.errorCunt = false
      }

    if(this.category !=''  &&this.name !=""  ){
      this.googsList.filter(x=>x.goodsId == id).forEach(c=>{
        c.Name = this.name
        c.category= this.category
        c.Price= this.price as any
        c.isEdit = false
       
       })
       this.goodsService.getGoods.next( this.googsList)
       this.googsList = this.googsList 
    }
   
  
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

    this.googsList = this.googsListSearch.filter((x: { Name: string; } ) => x.Name.toLowerCase().includes(searchInput.toLowerCase()));
  }
  else {
    this.googsList = this.googsListSearch
  }
}
formatMoney(item:number){
return   Math.round(item)
  .toString()
  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') ?? "0"
}
ngOnDestroy(): void {
  this.getGoodsSubc?.unsubscribe()
  
}
}