import { Injectable } from '@angular/core';
//import { CartComponent } from '../cart/cart.component';
import { Cart } from '../Model/cart';
import { Product } from '../Model/product';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }

  grandTotal = 0

  cartlist: Cart[]=[]
  cartItem: Cart={productDetails:{id:0,title:"",genre:"",price:0},qty:0,totalCost:0}

  addToCart(b: Product){

    var found: boolean = false
    this.cartlist.forEach((value, index) =>{
      if(value.productDetails.id == b.id){
        value.qty+= 1
        value.totalCost+=b.price
        this.grandTotal+= b.price
        found = true
      }
    })

    if(!found){
      this.cartItem.productDetails=b
    this.cartItem.qty = 1
    this.cartItem.totalCost = b.price*1
    this.cartlist.push(this.cartItem)
    this.cartItem = new Cart()
    this.grandTotal+= b.price
    }
    
  }

  
  
}
