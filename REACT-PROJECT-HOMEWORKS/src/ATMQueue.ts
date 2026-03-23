export interface PersonaATM {
  id: number
  name: string
  withdrawalAmount: number
  arrivalDate: number
}

export class ATMQueue {
  items: PersonaATM[]
  value: PersonaATM | null

  constructor() {
    this.items = []
    this.value = null
  }

  enqueue(value: PersonaATM) {
    this.items.push(value)
    this.value = value
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

  size() {
    return this.items.length
  }

  print() {
    return this.items
      .slice()
      .sort((a, b) => a.arrivalDate - b.arrivalDate)
  }
}