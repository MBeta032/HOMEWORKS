import { useState, useEffect } from "react"

import { ComiteDoubleCircularList } from "./Listas/ComiteCircularDoubleList"
import { DoctorCircularList } from "./Listas/DoctorCircularList"
import { PacienteLinkedList } from "./Listas/PacienteLinkedList"
import { HistorialDoubleList } from "./Listas/HistorialDoubleList"

import Paciente from "./Pacientes"
import Doctor from "./Doctores"
import Historial from "./Historial"
import Comite from "./Comite"

const pacientesFake = [
  { id: "P1", nombre: "Ana", turno: 1 },
  { id: "P2", nombre: "Juan", turno: 2 },
  { id: "P3", nombre: "Sofia", turno: 3 },
  { id: "P4", nombre: "Mateo", turno: 4 },
]

const doctoresFake = [
  { id: "D1", nombre: "Dr. Carlos", area: "Urgencias" },
  { id: "D2", nombre: "Dra. Paula", area: "Pediatría" },
  { id: "D3", nombre: "Dr. Andrés", area: "Medicina General" },
]

const comiteFake = [
  { id: "C1", nombre: "Laura", role: "Directora" },
  { id: "C2", nombre: "Pedro", role: "Secretario" },
  { id: "C3", nombre: "Mariana", role: "Tesorera" },
]

export default function AppHospital() {
  const [pacienteList] = useState(new PacienteLinkedList())
  const [doctorList] = useState(new DoctorCircularList())
  const [historialList] = useState(new HistorialDoubleList())
  const [comiteList] = useState(new ComiteDoubleCircularList())

  const [pacientesView, setPacientesView] = useState<any[]>([])
  const [pacienteCurrent, setPacienteCurrent] = useState(pacienteList.head)

  const [doctorCurrent, setDoctorCurrent] = useState(doctorList.current)
  const [historialCurrent, setHistorialCurrent] = useState(historialList.current)
  const [comiteCurrent, setComiteCurrent] = useState(comiteList.current)

  const cargarPacientes = () => {
    const arr: any[] = []
    let temp = pacienteList.head

    while (temp !== null) {
      arr.push({ id: temp.id, nombre: temp.nombre, turno: temp.turno })
      temp = temp.next
    }

    setPacientesView(arr)
  }

  useEffect(() => {
    if (pacienteList.length > 0 || doctorList.length > 0 || comiteList.length > 0) return

    // PACIENTES
    for (let i = 0; i < pacientesFake.length; i = i + 1) {
      const p = pacientesFake[i]
      pacienteList.append(p.id, p.nombre, p.turno)
    }
    setPacienteCurrent(pacienteList.head)
    cargarPacientes()

    // DOCTORES
    for (let i = 0; i < doctoresFake.length; i = i + 1) {
      const d = doctoresFake[i]
      doctorList.append(d.id, d.nombre, d.area)
    }
    setDoctorCurrent(doctorList.current)

    // COMITE
    for (let i = 0; i < comiteFake.length; i = i + 1) {
      const c = comiteFake[i]
      comiteList.append(c.id, c.nombre, c.role)
    }
    setComiteCurrent(comiteList.current)

    // HISTORIAL
    setHistorialCurrent(historialList.current)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      doctorList.next()
      setDoctorCurrent(doctorList.current)
    }, 10000)

    return () => clearInterval(timer)
  }, [])

  const nextPaciente = () => {
    if (pacienteCurrent === null) return

    if (pacienteCurrent.next !== null) {
      setPacienteCurrent(pacienteCurrent.next)
    } else {
      setPacienteCurrent(pacienteList.head)
    }
  }

  const atender = () => {
    if (pacienteCurrent === null) return
    if (doctorList.current === null) return

    const p = pacienteCurrent
    const d = doctorList.current
    const siguiente = p.next

    pacienteList.remove(p.id)
    cargarPacientes()

    historialList.append(p.id, p.nombre, d.id, d.nombre)
    historialList.current = historialList.tail
    setHistorialCurrent(historialList.current)

    if (siguiente !== null) setPacienteCurrent(siguiente)
    else setPacienteCurrent(pacienteList.head)
  }

  const borrarPaciente = (id: string) => {
    pacienteList.remove(id)
    cargarPacientes()
    setPacienteCurrent(pacienteList.head)
  }

  const nextDoctor = () => {
    doctorList.next()
    setDoctorCurrent(doctorList.current)
  }
 const prevDoctor = () => {
  const lista: any = doctorList

  if (lista.previous) lista.previous()
  else if (lista.prev) lista.prev()

  setDoctorCurrent(doctorList.current)
}

  const nextHistorial = () => {
    historialList.next()
    setHistorialCurrent(historialList.current)
  }

  const prevHistorial = () => {
    historialList.previous()
    setHistorialCurrent(historialList.current)
  }

  const nextComite = () => {
    comiteList.next()
    setComiteCurrent(comiteList.current)
  }

  const prevComite = () => {
    comiteList.previous()
    setComiteCurrent(comiteList.current)
  }

  const currentPacienteSimple =
    pacienteCurrent === null
      ? null
      : { id: pacienteCurrent.id, nombre: pacienteCurrent.nombre, turno: pacienteCurrent.turno }

  return (
    <div className="hospital-page">
      <h1 className="hospital-title">HOSPITAL</h1>

      <div className="hospital-grid">
        <Paciente
          current={currentPacienteSimple}
          pacientes={pacientesView}
          onNext={nextPaciente}
          onAtender={atender}
          onDelete={borrarPaciente}
        />

        <Doctor current={doctorCurrent} onNext={nextDoctor} onPrev={prevDoctor} />
        <Historial current={historialCurrent} onNext={nextHistorial} onPrev={prevHistorial} />

        <Comite current={comiteCurrent} onNext={nextComite} onPrev={prevComite} />
      </div>
    </div>
  )
}