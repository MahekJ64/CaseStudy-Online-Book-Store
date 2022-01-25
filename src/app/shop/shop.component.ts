import { Component, OnInit } from '@angular/core';
//import { title } from 'process';
//import { Product } from '../Model/product';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

 // enteredTitle: string=""
 // book: Product | {} = {}

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
  }

 // searchBookByTitle(){}

}
