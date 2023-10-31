import { Component, OnInit,Input } from '@angular/core';
import { Product } from "src/app/models/product"
import { CartService } from 'src/app/services/cart.service';
import{ MessengerService} from "src/app/services/messenger.service"
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem !: Product
  @Input() addedtowishlist!:boolean;

  constructor(
    private msg : MessengerService,
    private cartservice : CartService,
    private wishListservice : WishlistService,
    ) {}

  ngOnInit() {
  }
  handleaddtocart(){
    this.cartservice.addProductsToCart(this.productItem).subscribe(()=>{
      this.msg.sendmsg(this.productItem);
    })
    
  }

  handleaddtowishlist(){
    this.wishListservice.addToWishList(this.productItem.id).subscribe(()=>{
      this.addedtowishlist = true;
    })
  }
  handleremovefromwishlist(){
    this.wishListservice.removeFromWishList(this.productItem.id).subscribe(()=>{
      this.addedtowishlist = false;
    })
  }
}
