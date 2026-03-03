// DoubleNode = "vagón" del tren, pero con puerta para ir adelante Y atrás
// Tiene:
// - value: el dato (ej: "/home")
// - next: el siguiente nodo (adelante)
// - previous: el nodo anterior (atrás)
export class DoubleNode<T> {
  value: T
  next: DoubleNode<T> | null
  previous: DoubleNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
    this.previous = null
  }
}