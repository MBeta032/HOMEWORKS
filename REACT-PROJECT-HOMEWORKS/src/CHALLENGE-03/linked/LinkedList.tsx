import { Node } from "./Node";

// LinkedList = una cadena de Nodes conectados

export class LinkedList<T> {
    head: Node<T> | null
    tail: Node<T> | null
    length:number

    constructor() {

        // head = primer nodo
        // tail = último nodo
        // length = cuántos nodos hay

        this.head = null
        this.tail = null
        this.length = 0
    }

  // append: agrega un nuevo nodo al final (lo más común)

   append(value:T) {
    const newNode = new Node(value)

    //Si la lista esta vacía (head es null), el nuevo es head y tail
    if (this.head === null) {
        this.head = newNode
        this.tail = newNode
        this.length = 1
        return
    }

    //Si ya hay nodos el tail actual apunta al nuevo y el nuevo se vuelve tail

    if (this.tail !== null){
        this.tail.next = newNode
   }

   this.tail = newNode
   this.length = this.length + 1
    }

    //peek: buscar un nodo por value (devuelve el nodo o null)
    peek(value:T) {
        let current = this.head

        while (current !== null){
            if(current.value === value) {
                return current
            }
            current = current.next
        }
        return null
    }

    //Size: devuelve cuantos elementos hay 
    size(){
        return this.length
    }

    //remove: Elimina el primer nodo que tenga ese value une el anterior con el siguiente 
    remove(value: T) {
        if (this.head === null){
            return null
        }

        // Caso especial: el que quiero borrar es el head
        if (this.head.value === value) {
        const removed = this.head
        this.head = this.head.next
        this.length = this.length - 1

        // Si al borrar quedó vacía, tail también debe quedar null
        if (this.head === null) {
            this.tail = null
        }
        return removed
        }

        //Caso normal: recorro buscando el nodo anterior al que quiero borrar 
        let prev = this.head
        let current = this.head.next

        while (current !== null) {

            if (current.value === value) {

                // “saltamos” el nodo current
                prev.next = current.next
                this.length = this.length - 1

                // Si el que borré era el tail, actualizo tail
                if (current === this.tail) {
                this.tail = prev
                }
                return current
            }

            prev = current
            current = current.next
            }

            return null
        }

  // print: devuelve un string con el contenido de la lista
  print() {
    let current = this.head
    let result = ""

    while (current !== null) {
      result = result + String(current.value) + " -> "
      current = current.next
    }

    result = result + "null"
    return result
  }
}