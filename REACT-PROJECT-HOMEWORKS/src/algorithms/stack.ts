import type { Libro } from "../interfaces/book.interface"

export class Stack {
  private items: Libro[]

  constructor() {
    this.items = []
  }

  push(value: Libro) {
    this.items.push(value)
  }

  pop() {
    if (this.isEmpty()) {
      return null
    }

    return this.items.pop() ?? null
  }

  isEmpty() {
    return this.items.length === 0
  }

  print() {
    return [...this.items].reverse()
  }
}