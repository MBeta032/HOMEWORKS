export class StudentNodeClass { 
    name: string
    age: number 
    code: string 
    next: StudentNodeClass | null 

    constructor(name:string, age:number, code:string) {
        this.name = name 
        this.age = age
        this.code = code 
        this.next = null 
    }
}