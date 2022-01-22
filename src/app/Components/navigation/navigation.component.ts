import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
 public myTotal:number=0
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((results:any)=>{
this.myTotal=results.length
    })
  }

}
