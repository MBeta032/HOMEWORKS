import { StudentNodeClass } from "./StudentNode";
import type { Student } from "./types";

export class StudentLinkedList {
    head: StudentNodeClass | null
    tail: StudentNodeClass | null
    length: number

    constructor() {
        this.head = null 
        this.tail = null
        this.length = 0 
    }

    // paso 4 crear función para agregar estudiantes, Si la lista está vacía (head === null): ese nodo será head y tail, 
    // Si NO está vacía: lo conectamos al final usando tail.next y aumentamos lenght 

    append(name: string, age: number, code: string) {
        const newNode = new StudentNodeClass(name, age, code)

        if (this.head === null) {
            this.head = newNode // si esta vacio el head sera el nodo que se acaba de crear y tambien el tail 
            this.tail = newNode
        } else {
            if (this.tail !== null) {
                this.tail.next = newNode //next es como decir apunta ahora la cola apunta el newNode recien creado
            }
            this.tail = newNode
        }
        this.length = this.length +1
    }

    remove(code:string) {
        if (this.head === null ) return 

        if (this.head.code === code) {
            this.head = this.head.next
            if (this.head === null) 
            this.tail = null
            this.length = this.length -1
            return
        }

        let prev = this.head //prev primer nodo donde nos paramos en este caso la cabeza
        let curr = this.head.next //curr nodo sgt al nodo en el que estamos parados

        while (curr !== null) {
            if (curr.code === code){
                prev.next = curr.next  //prev.next ahora el que esta despues del prev es el que estaba despues del current 
                if (curr === this.tail) 
                this.tail = prev
                this.length = this.length - 1 
                return
            }
            prev = curr
            curr = curr.next
        }
    }
    //Paso 06 mostrar la lista - usaremos aray.map recorremos y transformamos 

    toArray() {
        const result: Student [] = []

        let curr = this.head
        while(curr !== null){
            result.push({ name: curr.name, age: curr.age, code: curr.code})
            curr = curr.next
        }

        return result
    }
}

