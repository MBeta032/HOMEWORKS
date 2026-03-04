import { PacienteNode } from "../Nodos/PacienteNode";

export class PacienteLinkedList {
    head: PacienteNode | null 
    tail: PacienteNode | null
    length: number

    constructor() {
        this.head = null 
        this.tail = null 
        this.length = 0 
    }

    append(id:string, nombre: string, turno: number) {
        const newNode = new PacienteNode(id, nombre, turno)

        if (this.head === null) {
            this.head = newNode 
            this.tail = newNode
        } else {
            if (this.tail !== null) {
                this.tail.next = newNode 
            }
            this.tail = newNode
        }
        this.length = this.length +1
    }

    remove(id:string) {
        if (this.head === null ) return 

        if (this.head.id === id) {
            this.head = this.head.next
            if (this.head === null) 
            this.tail = null
            this.length = this.length -1
            return
        }

        let prev = this.head 
        let curr = this.head.next 
        while (curr !== null) {
            if (curr.id === id){
                prev.next = curr.next 
                if (curr === this.tail) 
                this.tail = prev
                this.length = this.length - 1 
                return
            }
            prev = curr
            curr = curr.next
        }
    }
}

