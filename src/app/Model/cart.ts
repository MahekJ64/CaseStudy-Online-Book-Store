import { Product } from "./product"

export class Cart {
    productDetails: Product
    qty:number
    totalCost: number
    constructor(){
        this.productDetails = {id:0,title:"",genre:"",price:0}
        this.qty=0
        this.totalCost=0
    }
}
