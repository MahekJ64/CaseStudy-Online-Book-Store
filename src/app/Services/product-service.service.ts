import { Injectable } from '@angular/core';
import { Product } from 'src/app/Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  bookList: Product[] = [
    new Product(1,"The Kite Runner", "Historical Fiction", 199),
    new Product(2,"The Da Vinci Code", "Thriller", 345),
    new Product(3,"The Lost Symbol", "Thriller", 249),
    new Product(4,"The Rebecca Notebook", "Crime", 475),
    new Product(5,"A Thousand Splendid Suns", "Historical Fiction", 299)
  ]

  constructor() { }
}
