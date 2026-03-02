import type { Contacto } from "./types"

// Aquí ContactoItem recibe UN contacto para poder mostrarlo
interface ContactoItemProps {
  contacto: Contacto
  onDelete: (id: number) => void
}

// Recibe "contacto" por props y lo muestra dentro de un <li>
export default function ContactoItem({ contacto, onDelete }: ContactoItemProps) {
  return (
    <li className="item">
      <div className="item-info">
        <span className="item-name">{contacto.nombre}</span>
        <span className="item-phone">{contacto.telefono}</span>
      </div>

      <button className="btn btn-danger" onClick={() => onDelete(contacto.id)}>
        Eliminar
      </button>
    </li>
  )
}