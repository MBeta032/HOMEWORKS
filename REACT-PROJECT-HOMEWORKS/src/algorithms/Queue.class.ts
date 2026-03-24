import type { IATMRecord } from "../interfaces/IATMRecord.interface"

export class Queue {
  private items: IATMRecord[]

  constructor() {
    this.items = []
  }

  enqueue(value: IATMRecord) {
    this.items.push(value)
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }

    return this.items.shift() ?? null
  }

  isEmpty() {
    return this.items.length === 0
  }

  print() {
    return [...this.items].sort((a, b) => a.arrivalDate - b.arrivalDate)
  }
}