import { DoubleNode } from "./DoubleNote"

// DoublyLinkedList = lista de DoubleNodes conectados por next y previous
export class DoublyLinkedList<T> {
  head: DoubleNode<T> | null
  tail: DoubleNode<T> | null
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // append: agrega al final
  append(value: T) {
    const newNode = new DoubleNode(value)

    // Si está vacía, el nuevo es head y tail
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
      this.length = 1
      return
    }

    // Si no está vacía, conectamos:
    // tail.next -> newNode
    // newNode.previous -> tail
    if (this.tail !== null) {
      this.tail.next = newNode
      newNode.previous = this.tail
    }

    // el nuevo ahora es tail
    this.tail = newNode
    this.length = this.length + 1
  }

  // size: cuántos elementos hay
  size() {
    return this.length
  }

  // peek: buscar un nodo por value (recorriendo hacia adelante)
  peek(value: T) {
    let current = this.head

    while (current !== null) {
      if (current.value === value) {
        return current
      }
      current = current.next
    }

    return null
  }

  // remove: elimina el primer nodo con ese value y reconecta neighbors
  remove(value: T) {
    if (this.head === null) {
      return null
    }

    let current = this.head

    while (current !== null) {
      if (current.value === value) {
        // Caso 1: si es head, movemos head al siguiente
        if (current === this.head) {
          this.head = current.next

          // si head existe, su previous debe ser null
          if (this.head !== null) {
            this.head.previous = null
          }

          // si borré el único, tail también debe quedar null
          if (current === this.tail) {
            this.tail = null
          }

          this.length = this.length - 1
          return current
        }

        // Caso 2: si es tail, movemos tail al anterior
        if (current === this.tail) {
          this.tail = current.previous

          if (this.tail !== null) {
            this.tail.next = null
          }

          this.length = this.length - 1
          return current
        }

        // Caso 3: está en el medio
        // conectamos: previous <-> next
        const prev = current.previous
        const next = current.next

        if (prev !== null) {
          prev.next = next
        }

        if (next !== null) {
          next.previous = prev
        }

        this.length = this.length - 1
        return current
      }
    }

    return null
  }

  // print: imprime de head a tail
  print() {
    let current = this.head
    let result = ""

    while (current !== null) {
      result = result + String(current.value) + " <-> "
      current = current.next
    }

    result = result + "null"
    return result
  }
}