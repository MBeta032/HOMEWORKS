import { useState } from "react"

type BinaryTreeControlProps = {
  values: number[]
  onAddValue: (value: number) => {
    ok: boolean
    message: string
  }
  onSearchValue: (value: number) => boolean
  onResetTree: () => void
}

const BinaryTreeControl = ({
  values,
  onAddValue,
  onSearchValue,
  onResetTree,
}: BinaryTreeControlProps) => {
  const [insertValue, setInsertValue] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const [message, setMessage] = useState("")
  const [searchMessage, setSearchMessage] = useState("")

  const handleInsert = () => {
    const parsedValue = Number(insertValue)

    if (!Number.isInteger(parsedValue)) {
      setMessage("Ingresa un número entero válido")
      return
    }

    const result = onAddValue(parsedValue)
    setMessage(result.message)

    if (result.ok) {
      setInsertValue("")
    }
  }

  const handleSearch = () => {
    const parsedValue = Number(searchValue)

    if (!Number.isInteger(parsedValue)) {
      setSearchMessage("Ingresa un número entero válido")
      return
    }

    const exists = onSearchValue(parsedValue)

    setSearchMessage(
      exists
        ? `Sí, el valor ${parsedValue} existe en el árbol`
        : `No, el valor ${parsedValue} no existe en el árbol`
    )
  }

  return (
    <section className="binary-tree-card">
      <h2>Control del árbol</h2>

      <div className="binary-tree-box">
        <h3>Insertar valor</h3>
        <input
          type="number"
          value={insertValue}
          onChange={event => setInsertValue(event.target.value)}
          placeholder="Ejemplo: 55"
        />
        <button onClick={handleInsert}>Agregar valor</button>
        {message && <p>{message}</p>}
      </div>

      <div className="binary-tree-box">
        <h3>Buscar valor</h3>
        <input
          type="number"
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)}
          placeholder="Ejemplo: 40"
        />
        <button onClick={handleSearch}>Buscar valor</button>
        {searchMessage && <p>{searchMessage}</p>}
      </div>

      <div className="binary-tree-box">
        <h3>Valores actuales</h3>
        <p>{values.join(" - ")}</p>
      </div>

      <button onClick={onResetTree}>Restablecer árbol</button>
    </section>
  )
}

export default BinaryTreeControl