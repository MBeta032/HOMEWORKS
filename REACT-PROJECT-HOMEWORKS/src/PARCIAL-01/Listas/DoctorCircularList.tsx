import { DoctorNode } from "../Nodos/DoctorNode";

export class DoctorCircularList {
    head: DoctorNode | null
    tail: DoctorNode | null
    current: DoctorNode | null
    length: number

    constructor () {
        this.head = null
        this.tail = null
        this.current = null
        this.length = 0
    }

    append(id: string, nombre: string, area: string) {
        const newNode = new DoctorNode(id, nombre, area)

        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
            this.current = newNode

            this.head.next = this.head

            this.length = 1
            return
        }

        if (this.tail !== null && this.head !== null) {
            newNode.next = this.head
            this.tail.next = newNode
            this.tail = newNode
            this.length = this.length + 1
        }
    }

    next() {
        if (this.current !== null && this.current.next !== null) {
            this.current = this.current.next
        }
    }
}