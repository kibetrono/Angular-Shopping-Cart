import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { MainServiceService } from 'src/app/Services/main-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
allProducts:any;
  constructor(private mainServiceService:MainServiceService,private cartService:CartService) { }

  ngOnInit(): void {

    this.mainServiceService.fetchProducts().subscribe(data=>{
this.allProducts=data
this.allProducts.array.forEach((gdata:any) => {
  Object.assign(gdata,{quantity:1,total:gdata.price})
});
    },error=>{
      console.log(error);
      
    })
  }

  addToCart(product:any){

    this.cartService.addtoCart(product)
  }

}
