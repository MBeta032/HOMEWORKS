import { useEffect, useState } from "react"

// "interface" en TypeScript = un "molde" o "plantilla"
// Esto NO crea datos, solo define la forma que deben tener los datos
// Aquí decimos: un Contacto SIEMPRE tendrá id, nombre y telefono
interface Contacto {
  id: number
  nombre: string
  telefono: string
}

// Aquí ContactoItem recibe UN contacto para poder mostrarlo
interface ContactoItemProps {
  contacto: Contacto
  onDelete: (id:number) => void
}

// Recibe "contacto" por props y lo muestra dentro de un <li>
function ContactoItem({ contacto, onDelete }: ContactoItemProps) {
  return (
    <li>
      {contacto.nombre} - {contacto.telefono}
      {/* Cuando le doy click, llamo onDelete con el id de este contacto */}
    <button onClick={() => onDelete(contacto.id)}>
      Eliminar
    </button>
    </li>
  )
}

// Este componente de lista recibe TODO el arreglo de contactos
interface ContactoListProps {
  contactos: Contacto[]
  onDelete: (id: number) => void
}

// ContactoList se encarga de recorrer el arreglo y pintar muchos ContactoItem
function ContactoList({ contactos, onDelete }: ContactoListProps) {
  return (
    <ul>
      {/* 
        .map() = "por cada elemento del arreglo, crea algo"
        Aquí por cada contacto "c" creamos un <ContactoItem />
        
        key={c.id} es obligatorio Es como la "placa" única para que React sepa cuál elemento es cuál
      */}
      {contactos.map((c) => (
        <ContactoItem key={c.id} contacto={c} onDelete={onDelete} />
      ))}
    </ul>
  )
}


interface ContactoFormProps {
  // onAdd va a ser "un botón invisible" que nos dará el componente padre
  onAdd: (nombre: string, telefono:string) => void
}

function ContactoForm({ onAdd}: ContactoFormProps) {
  // Por ahora NO usamos onAdd, solo lo recibimos y ya
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")

  // Esta función se dispara cuando el formulario se "envía"
   const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault()

  // evita que alguien agregue un nombre vacío tipo "   "
    if (nombre.trim() === "" || telefono.trim() === "") {
        return
    }

   // Es decir: "Papá (ContactoApp), toma estos datos y agrégalos"
   onAdd(nombre,telefono)

    // Limpiamos los inputs para que vuelvan a quedar vacíos
   setNombre("")
   setTelefono("")
   }



   //onSubmit or onClick cualquiera funciona pero este permite enter y click
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label> Nombre </label>
                <input 
                value = {nombre}
                onChange = {(e) => setNombre(e.target.value)}/>
            </div>
            <div>
                <label>Teléfono</label>
                <input 
                value = {telefono}
                onChange = {(e) => setTelefono(e.target.value)}/>
                <p>{nombre} - {telefono}</p>
            </div>
            
            <button type="submit">Agregar</button>
        </form>
    )
}



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
        telefono: telefono
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
    <div>
      <h1>Agenda de Contactos</h1>
      <p>Contacto de ejemplo:</p>
      <ContactoForm onAdd={handleAddContacto} />
      {/* 
        Aquí llamamos al componente ContactoList y le pasamos el arreglo por props.
      */}
      <ContactoList contactos={contactos} onDelete={handleDeleteContacto}/>
    </div>
  )
}