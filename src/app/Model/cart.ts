export class Cart {
    title: string
    price: number
    qty:number
    totalCost: number
    constructor(title:string,price:number,qty:number,totalCost:number){
        this.title=title
        this.price=price
        this.qty=qty
        this.totalCost=totalCost
    }
}
