export class DoctorNode {
    id:string 
    nombre:string 
    area:string
    next: DoctorNode|null
    previous: DoctorNode|null

    constructor (id: string, nombre: string, area: string){
        this.id = id 
        this.nombre = nombre 
        this.area = area 
        this.next = null 
        this.previous = null 
    }
}