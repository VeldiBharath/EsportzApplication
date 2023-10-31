import { Injectable } from '@angular/core';
import {wishListurl } from "src/app/config/api";
import {HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class WishlistService {

  constructor(private http :HttpClient) {}

  getWishList(){
    return this.http.get(wishListurl).pipe(
      map((result:any) =>{
        let productIds:any[] = []
          result.forEach((item: { id: any; }) =>productIds.push(item.id))
        return productIds;
      })
    )
  }

  addToWishList(productId : any){
    return this.http.post(wishListurl ,{id:productId})
  }
  removeFromWishList(productId:any){
    return this.http.delete(wishListurl + '/'+productId)
  }
}
