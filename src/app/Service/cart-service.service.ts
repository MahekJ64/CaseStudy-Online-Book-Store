import { Injectable } from '@angular/core';
import { Cart } from '../Model/cart';
import { Product } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }

  cartlist: Product[]=[]

  addToCart(b: Product){
   // qty: number
   // cartItem: Cart = new Cart(title:b.title,price:b.price,)
    this.cartlist.push(b)
  }
}
