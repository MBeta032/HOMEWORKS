export class ComiteNode {
    id:string 
    nombre:string 
    role:string
    next: ComiteNode|null
    previous: ComiteNode|null

    constructor (id: string, nombre: string, role: string){
        this.id = id 
        this.nombre = nombre 
        this.role = role 
        this.next = null 
        this.previous = null
    }
}