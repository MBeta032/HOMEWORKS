export interface Libro {
  id: number
  name: string
  isbn: string
  author: string
  editorial: string
}

export class BookStack {
  items: Libro[]
  value: Libro | null

  constructor() {
    this.items = []
    this.value = null
  }

  push(value: Libro) {
    this.items.push(value)
    this.value = value
  }

  pop() {
    if (this.isEmpty()) {
      return null
    }

    return this.items.pop() ?? null
  }

  peek() {
    return this.items.length > 0
      ? this.items[this.items.length - 1] ?? null
      : null
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  print() {
    return this.items.slice().reverse()
  }
}