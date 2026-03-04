import { ProductNode } from "./productNode";

export class ProductCircularList {
    head: ProductNode | null
    tail: ProductNode | null
    current: ProductNode | null
    length: number

    constructor () {
        this.head = null
        this.tail = null
        this.current = null 
        this.length = 0 
    }

    append(id: string, name:string, price:number, image:string) {
        const newNode = new ProductNode(id, name, price, image)

        if (this.head === null) {
            this.head = newNode // si esta vacio el head sera el nodo que se acaba de crear y tambien el tail 
            this.tail = newNode
            this.current = newNode

            this.head.next = this.head 
            this.head.previous = this.head

            this.length = 1
        } if (this.tail !== null && this.head !== null) {
            newNode.previous = this.tail
            newNode.next = this.head

            this.tail.next = newNode
            this.head.previous = newNode 

            this.tail = newNode
            this.length = this.length + 1
        }
        this.tail = newNode
        }

        next() {
            if (this.current !== null && this.current.next !== null) {
                this.current = this.current.next
            }
        }

        previous () {
            if (this.current !== null && this.current.previous !== null){
                this.current = this.current.previous
            }
        }

}