import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCartComponent } from './Components/add-cart/add-cart.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [

  {
    path:"",redirectTo:'products',pathMatch:'full'
  },
  {
    path:"products", component:ProductsComponent
  },
  {
    path:"theCart", component:AddCartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
