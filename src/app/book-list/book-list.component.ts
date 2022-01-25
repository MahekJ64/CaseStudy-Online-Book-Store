import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';
import { CartServiceService } from '../Service/cart-service.service';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Product[] =[]

  constructor(private productService: ProductServiceService, private cartService: CartServiceService) { }


  ngOnInit(): void {

    this.books = this.productService.bookList
  }

  addToCart(book:Product){
    this.cartService.addToCart(book)
  }
}
