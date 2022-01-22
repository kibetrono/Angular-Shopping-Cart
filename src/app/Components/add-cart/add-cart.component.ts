import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {

  public products:any=[]
   public grandTotal!:number 
   constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((response:any)=>{
      this.products=response
      this.grandTotal =this.cartService.getTotalPrice()
    })
   
  }
  remove(item:any){
this.cartService.removeCart(item)
  }

  emptyTheCart(){
    this.cartService.removeAllCart()
  }

}
