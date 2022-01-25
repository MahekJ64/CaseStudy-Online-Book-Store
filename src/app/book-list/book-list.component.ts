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
  enteredBook=""
  searchedBook: Product = {id:0,title:"",genre:"",price:0}

  constructor(private productService: ProductServiceService, private cartService: CartServiceService) { }


  ngOnInit(): void {

    this.books = this.productService.bookList
  }

  addToCart(book:Product){
    this.cartService.addToCart(book)
  //  window.alert('Your product has been added to the cart!');
  }

  searchBook(enteredBook:string){
    this.productService.searchBook(enteredBook)
   // this.searchedBook = {id:0,title:this.enteredBook,genre:"",price:0}
  }
}
