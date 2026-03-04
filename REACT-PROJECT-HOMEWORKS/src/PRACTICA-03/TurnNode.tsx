export class TurnNode { 
    number: number 
    name: string
    next: TurnNode | null 
    previous: TurnNode | null

    constructor(number:number, name:string) {
        this.number = number
        this.name = name 
        this.next = null 
        this.previous = null
    }
}