// Un Node es "una cajita" de la lista
// Tiene 2 partes como dice el PDF:
// 1) value: el dato que guardo
// 2) next: referencia (puntero) al siguiente Node (o null si no hay)
export class Node<T> {
  value: T
  next: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}