import { useEffect, useState } from "react"
import { DoublyLinkedList } from "../doubly/DoublyLinkedList"
import { DoubleNode } from "../doubly/DoubleNote"

const paginasFake = ["/home", "/search", "/product", "/cart"]

export default function HistoryPage() {
  const [historial, setHistorial] = useState<DoublyLinkedList<string> | null>(null)
  const [current, setCurrent] = useState<DoubleNode<string> | null>(null)

  useEffect(() => {
    const list = new DoublyLinkedList<string>()

    // llenamos con datos fake (como pide la actividad) :contentReference[oaicite:6]{index=6}
    paginasFake.forEach((p) => list.append(p))

    setHistorial(list)
    setCurrent(list.head)
  }, [])

  const handleBack = () => {
    // si no hay current, no hacemos nada
    if (current === null) return

    // si existe previous, voy hacia atrás
    if (current.previous !== null) {
      setCurrent(current.previous)
    }
  }

  const handleForward = () => {
    if (current === null) return

    // si existe next, voy hacia adelante
    if (current.next !== null) {
      setCurrent(current.next)
    }
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>Doubly Linked List - Historial navegador</h2>

      <p>
        <strong>Estoy en:</strong> {current ? current.value : "Ninguna"}
      </p>

      <button onClick={handleBack}>Atrás</button>
      <button onClick={handleForward}>Adelante</button>

      <hr />

      {/* Esto solo es para ver las páginas fake con .map() */}
      <p><strong>Paginas fake:</strong></p>
      <ul>
        {paginasFake.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <p><strong>Print historial:</strong> {historial ? historial.print() : "..."}</p>
    </div>
  )
}