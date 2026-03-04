import { ComiteNode } from "../Nodos/ComiteNode"

export class ComiteDoubleCircularList {
    head: ComiteNode | null
    tail: ComiteNode | null
    current: ComiteNode | null 
    length: number

    constructor () {
        this.head = null
        this.tail = null 
        this.current = null 
        this.length = 0 
    }

    append(id:string, nombre: string, rol: string){
        const newNode = new ComiteNode(id, nombre,rol)

        if (this.head === null){
            this.head = newNode
            this.tail = newNode
            this.current = newNode

            this.head.next = this.head
            this.head.previous = this.head

            this.length = 1
            return
        } if (this.tail !== null && this.head !== null) {
            newNode.previous = this.tail
            newNode.next = this.head
        
            this.tail.next = newNode
            this.head.previous = newNode

            this.tail = newNode
            this.length = this.length + 1
        }
    }

    next() {
        if (this.current !== null && this.current.next !== null){
            this.current = this.current.next
        }
    }

    previous(){
        if(this.current !== null && this.current.previous !== null){
            this.current = this.current.previous
        }
    }
}