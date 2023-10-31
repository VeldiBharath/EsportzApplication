import { Component , OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {
  cartItems:any = []
  carttotal = 0;

  constructor(private msg : MessengerService,
    private cartservice : CartService) {}

  ngOnInit() {
     this.handlesubscription();
     this.loadCartItems();
}

handlesubscription(){
  this.msg.getmsg().subscribe((product : any) => {
    this.loadCartItems();
})

}

loadCartItems(){
  this.cartservice.getCartItems().subscribe((items:CartItem[]) =>{
    this.cartItems = items;
    this.calccarttotal();
  })
}
  
  calccarttotal(){
    this.carttotal = 0;
    this.cartItems.forEach((item: { price: number; qty: number; }) =>{
      this.carttotal+=(item.price * item.qty)
     
    })
  }

}
