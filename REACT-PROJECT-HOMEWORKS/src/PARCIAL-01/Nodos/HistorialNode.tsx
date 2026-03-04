export class HistorialNode {
    pacienteId: string
    nombrePaciente: string 
    doctorId: string
    nombreDoctor: string 
    next: HistorialNode|null
    previous: HistorialNode|null

    constructor (pacienteId:string ,nombrePaciente:string, doctorId:string, nombreDoctor: string){
        this.pacienteId = pacienteId
        this.nombrePaciente = nombrePaciente  
        this.nombreDoctor = nombreDoctor 
        this.doctorId = doctorId
        this.next = null 
        this.previous = null
    }
}