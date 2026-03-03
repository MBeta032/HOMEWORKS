import { useEffect, useState } from "react"
import { DoublyLinkedList } from "../doubly/DoublyLinkedList"
import { DoubleNode } from "../doubly/DoubleNote"
import "./../styles/history.css"

const paginasFake = ["/home", "/search", "/product", "/cart"]

export default function HistoryPage() {
  const [historial, setHistorial] = useState<DoublyLinkedList<string> | null>(null)
  const [current, setCurrent] = useState<DoubleNode<string> | null>(null)

  useEffect(() => {
    const list = new DoublyLinkedList<string>()
    paginasFake.forEach((p) => list.append(p))

    setHistorial(list)
    setCurrent(list.head)
  }, [])

  const handleBack = () => {
    if (current !== null && current.previous !== null) {
      setCurrent(current.previous)
    }
  }

  const handleForward = () => {
    if (current !== null && current.next !== null) {
      setCurrent(current.next)
    }
  }

  return (
    <div className="historyPage">
      <div className="browser">
        <div className="browserTop">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />

          <button className="navBtn" onClick={handleBack}>⟵</button>
          <button className="navBtn" onClick={handleForward}>⟶</button>

          <div className="addressBar">
            {current ? current.value : "Ninguna"}
          </div>
        </div>

        <div className="browserBody">
          <h2 className="historyTitle">Historial (Doubly Linked List)</h2>

          <p>
            <strong>Print:</strong> {historial ? historial.print() : "..."}
          </p>

          <ul className="fakeList">
            {paginasFake.map((p) => (
              <li key={p} className="fakeItem">
                <span>{p}</span>
                <span className="badge">{current && current.value === p ? "actual" : ""}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}