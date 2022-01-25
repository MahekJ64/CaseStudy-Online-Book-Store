export class Product {
    id:number
    title:string
    genre: string
    price:number

    constructor(id:number, title:string, genre: string, price: number){
        this.id=id
        this.title=title
        this.genre=genre
        this.price=price
    }
}
