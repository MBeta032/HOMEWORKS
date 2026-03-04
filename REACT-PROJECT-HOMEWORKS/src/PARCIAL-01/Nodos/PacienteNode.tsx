export class PacienteNode {
    id: string
    nombre: string 
    turno: number
    next: PacienteNode | null

    constructor (id: string, nombre:string, turno:number){
        this.id = id
        this.nombre = nombre 
        this.turno = turno 
        this.next = null 
    }
}