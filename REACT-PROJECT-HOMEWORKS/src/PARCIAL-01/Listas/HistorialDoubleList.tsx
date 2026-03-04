import { HistorialNode } from "../Nodos/HistorialNode"

export class HistorialDoubleList {
    head: HistorialNode | null
    tail: HistorialNode | null
    current: HistorialNode | null
    length: number

    constructor () {
        this.head = null
        this.tail = null
        this.current = null
        this.length = 0
    }

    append(pacienteId: string, nombrePaciente: string, doctorId: string, nombreDoctor: string) {
        const newNode = new HistorialNode(pacienteId, nombrePaciente, doctorId, nombreDoctor)

        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
            this.current = newNode
            this.length = 1
            return
        }

        if (this.tail !== null) {
            newNode.previous = this.tail
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

    previous() {
        if (this.current !== null && this.current.previous !== null) {
            this.current = this.current.previous
        }
    }
}