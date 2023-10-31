import { Component, OnInit } from '@angular/core';
import{ProductService} from 'src/app/services/product.service'
import {Product} from 'src/app/models/product'  
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  productList : Product[] = []
  wishlist :number[] = []
  constructor(private productservice : ProductService,
              private wishlistservice : WishlistService) {
   }

  ngOnInit() {
    this.loadproducts();
    this.loadwishlist();
  }
  loadproducts(){
    this.productservice.getProducts().subscribe((products) =>{
      
      this.productList = products;
      
    })
  }

  loadwishlist(){
    this.wishlistservice.getWishList().subscribe(productIds =>{
      this.wishlist = productIds;
    } )
    
  }

}
