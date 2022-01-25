import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';
import { CartServiceService } from '../Service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem: Product[]=[]

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.cartItem = this.cartService.cartlist
  }


}
