import { useEffect, useState } from "react"
import "./contactos.css"

import ContactoForm from "./ContactoForm"
import ContactoList from "./ContactoList"
import type { Contacto } from "./types"

// Este es el componente principal de tu mini app de contactos
export default function ContactoApp() {
  // useState(true) = creamos una "cajita" llamada cargando que empieza en true
  // setCargando es la función que cambia ese valor
  const [cargando, setCargando] = useState(true)

  // Aquí guardamos el arreglo de contactos en "estado" Empieza vacío [] y luego lo llenamos después de 2 segundos
  const [contactos, setContactos] = useState<Contacto[]>([])

  // useEffect = algo que se ejecuta automáticamente cuando el componente aparece en pantalla El [] significa: "ejecútalo solo una vez al inicio"
  useEffect(() => {
    // setTimeout = esperar un tiempo y luego ejecutar algo
    const timer = setTimeout(() => {
      // Esta lista simula "datos que llegan del servidor"
      const contactosIniciales: Contacto[] = [
        { id: 1, nombre: "Sofia", telefono: "+573014587942" },
        { id: 2, nombre: "Miguel", telefono: "+573001112233" },
        { id: 3, nombre: "Daniel", telefono: "+573159998877" },
      ]

      // Guardamos esos contactos en el estado y ya tengamos una lista real
      setContactos(contactosIniciales)

      // Apagamos el loader para que deje de mostrarse "Cargando..."
      setCargando(false)
    }, 2000)

    // Esta función se llama cuando el componente se va clearTimeout evita que quede el timer "colgado"
    return () => clearTimeout(timer)
  }, [])

  // Si cargando es true, devolvemos SOLO el mensaje y no mostramos el resto
  // Esto se pone después de declarar hooks (useState/useEffect)
  if (cargando) {
    return <p>Cargando...</p>
  }

  const handleAddContacto = (nombre: string, telefono: string) => {
    const nuevoContacto: Contacto = {
      id: Date.now(),
      nombre: nombre,
      telefono: telefono,
    }

    // prev = lista anterior
    // ...prev = copia lo anterior
    // , nuevoContacto = agrega al final
    setContactos((prev) => [...prev, nuevoContacto])
  }

  const handleDeleteContacto = (id: number) => {
    // prev = la lista anterior de contactos
    // filter = devuelve una lista nueva sin el contacto cuyo id coincide
    setContactos((prev) => prev.filter((c) => c.id !== id))
  }

  // Cuando cargando ya es false, mostramos la app normal
  return (
    <div className="app">
      <h1 className="title">Agenda de Contactos</h1>

      <ContactoForm onAdd={handleAddContacto} />

      <ContactoList contactos={contactos} onDelete={handleDeleteContacto} />
    </div>
  )
}