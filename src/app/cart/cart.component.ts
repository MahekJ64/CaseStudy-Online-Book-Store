import { Component, OnInit } from '@angular/core';
import { Cart } from '../Model/cart';
//import { Product } from '../Model/product';
import { CartServiceService } from '../Service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  grandTotal = 0
  cartItemArray: Cart[]=[]

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.cartItemArray = this.cartService.cartlist
    this.grandTotal = this.cartService.grandTotal
  }

  incQtyInCart(item:Cart){
    item.qty+=1;
    item.totalCost+= item.productDetails.price
    this.grandTotal+=item.productDetails.price
  }

  decQtyInCart(item: Cart){
    item.qty-=1;
    item.totalCost-= item.productDetails.price

    if(item.qty==0){
      let i = this.cartItemArray.indexOf(item)
     this.cartItemArray.splice(i,1)
    }

    this.grandTotal-=item.productDetails.price
  }
 


}
