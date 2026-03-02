import ContactoItem from "./ContactoItem"
import type { Contacto } from "./types"

// Este componente de lista recibe TODO el arreglo de contactos
interface ContactoListProps {
  contactos: Contacto[]
  onDelete: (id: number) => void
}

// ContactoList se encarga de recorrer el arreglo y pintar muchos ContactoItem
export default function ContactoList({ contactos, onDelete }: ContactoListProps) {
  return (
    <ul className="list">
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