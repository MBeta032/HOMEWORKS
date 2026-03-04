import { useEffect, useRef, useState } from "react"
import { ComiteDoubleCircularList } from "./Listas/ComiteCircularDoubleList"
import { DoctorCircularList } from "./Listas/DoctorCircularList"
import { PacienteLinkedList } from "./Listas/PacienteLinkedList"
import { HistorialDoubleList } from "./Listas/HistorialDoubleList"
import type { Pacientes } from "./types"

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

  const [pacientesView, setPacientesView] = useState<Pacientes[]>([])
  const [pacienteCurrent, setPacienteCurrent] = useState(pacienteList.head)

  const [doctorCurrent, setDoctorCurrent] = useState(doctorList.current)
  const [historialCurrent, setHistorialCurrent] = useState(historialList.current)
  const [comiteCurrent, setComiteCurrent] = useState(comiteList.current)

  const yaInicializo = useRef(false)
  const [verListaPacientes, setVerListaPacientes] = useState(false)

  const cargarPacientes = () => {
    const arr: Pacientes[] = []
    let temp = pacienteList.head

    while (temp !== null) {
      arr.push({ id: temp.id, nombre: temp.nombre, turno: temp.turno })
      temp = temp.next
    }

    setPacientesView(arr)
  }

  useEffect(() => {
    if (yaInicializo.current) return
    yaInicializo.current = true

    for (let i = 0; i < pacientesFake.length; i = i + 1) {
      const p = pacientesFake[i]
      pacienteList.append(p.id, p.nombre, p.turno)
    }
    setPacienteCurrent(pacienteList.head)
    cargarPacientes()

    for (let i = 0; i < doctoresFake.length; i = i + 1) {
      const d = doctoresFake[i]
      doctorList.append(d.id, d.nombre, d.area)
    }
    setDoctorCurrent(doctorList.current)

    for (let i = 0; i < comiteFake.length; i = i + 1) {
      const c = comiteFake[i]
      comiteList.append(c.id, c.nombre, c.role)
    }
    setComiteCurrent(comiteList.current)

    setHistorialCurrent(historialList.current)
  }, [])

  // doctor cambia cada 10 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      doctorList.next()
      setDoctorCurrent(doctorList.current)
    }, 10000)

    return () => clearInterval(timer)
  }, [])

  const nextPaciente = () => {
    if (pacienteCurrent === null) return
    if (pacienteCurrent.next !== null) setPacienteCurrent(pacienteCurrent.next)
    else setPacienteCurrent(pacienteList.head)
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

  const borrarSeleccionado = () => {
    if (pacienteCurrent === null) return
    borrarPaciente(pacienteCurrent.id)
  }

  const nextDoctor = () => {
    doctorList.next()
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

  const currentPacienteView: Pacientes | null =
    pacienteCurrent === null
      ? null
      : { id: pacienteCurrent.id, nombre: pacienteCurrent.nombre, turno: pacienteCurrent.turno }

  return (
    <div style={pageStyles.page}>
      <h1 style={pageStyles.h1}>HOSPITAL</h1>

      <div style={pageStyles.grid}>
        <Paciente
            current={currentPacienteView}
            pacientes={pacientesView}
            onNext={nextPaciente}
            onAtender={atender}
            onDelete={borrarPaciente}
            showList={verListaPacientes}
            onToggleList={() => setVerListaPacientes(!verListaPacientes)}
            />

        <Doctor current={doctorCurrent} onNext={nextDoctor} />

        <Historial current={historialCurrent} onNext={nextHistorial} onPrev={prevHistorial} />

        <Comite current={comiteCurrent} onNext={nextComite} onPrev={prevComite} />
      </div>
    </div>
  )
}

const pageStyles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    padding: 16,
    background: "#05070f",
  },
  h1: { margin: 0, marginBottom: 14, color: "white", fontSize: 44, letterSpacing: 1 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 14,
    alignItems: "start",
  },
}