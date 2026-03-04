
export interface Pacientes {
    id: string
    nombre: string
    turno: number
}

export interface Doctor {
    id: string
    nombre: string
    area: string
}

export interface HistorialAtencion {
    pacienteId: string
    nombrePaciente: string
    doctorId: string
    nombreDoctor: string
}

export interface ComiteAdministrativo {
    id: string
    nombre: string
    role: string
}