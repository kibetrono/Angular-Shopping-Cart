import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartItems:any=[]
public productList=new BehaviorSubject([])
  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product:any){
this.cartItems.push(product);
this.productList.next(product)
    
  }
addtoCart(product:any){
  this.cartItems.push(product)
  this.productList.next(this.cartItems)
  this.getTotalPrice()
  console.log(this.cartItems);
  
}

getTotalPrice() : number{
let Gtotal=0
this.cartItems.map((data:any)=>{
  Gtotal+=data.total;
})
return Gtotal
}
 
removeCart(product:any){
  this.cartItems.map((data:any,index:any)=>{
    if(product.id===data.id){
      this.cartItems.splice(index,1)
    }
  })
this.productList.next(this.cartItems)
}

removeAllCart(){
  this.cartItems=[]
  this.productList.next(this.cartItems)
}
}
