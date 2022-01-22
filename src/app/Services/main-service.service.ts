import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http:HttpClient) { }

  fetchProducts(){
    return this.http.get<any>("https://fakestoreapi.com/products").pipe(map((response )=>{
     return response 
    }))
  }
}
