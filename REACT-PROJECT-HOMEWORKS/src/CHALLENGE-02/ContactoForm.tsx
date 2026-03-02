import { useState } from "react"

interface ContactoFormProps {
  // onAdd va a ser "un botón invisible" que nos dará el componente padre
  onAdd: (nombre: string, telefono: string) => void
}

export default function ContactoForm({ onAdd }: ContactoFormProps) {
  // Por ahora NO usamos onAdd, solo lo recibimos y ya
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")

  // Esta función se dispara cuando el formulario se "envía"
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // evita que alguien agregue un nombre vacío tipo "   "
    if (nombre.trim() === "" || telefono.trim() === "") {
      return
    }

    // Es decir: "Papá (ContactoApp), toma estos datos y agrégalos"
    onAdd(nombre, telefono)

    // Limpiamos los inputs para que vuelvan a quedar vacíos
    setNombre("")
    setTelefono("")
  }

  //onSubmit or onClick cualquiera funciona pero este permite enter y click
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Nombre</label>
        <input
          className="input"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="field">
        <label className="label">Teléfono</label>
        <input
          className="input"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Agregar
      </button>
    </form>
  )
}