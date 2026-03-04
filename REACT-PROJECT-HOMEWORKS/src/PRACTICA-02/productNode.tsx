export class ProductNode { 
    id: string
    name: string
    price: number 
    image: string 
    next: ProductNode | null 
    previous: ProductNode | null

    constructor(id: string, name:string, price:number, image:string) {
        this.id = id
        this.name = name 
        this.price = price
        this.image = image 
        this.next = null 
        this.previous = null
    }
}