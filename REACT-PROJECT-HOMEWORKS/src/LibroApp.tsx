import { useState } from "react"
import { BookStack, type Libro } from "./BookStack"

const cargarLibrosMock = () => {
  const stack = new BookStack()

  const librosMock: Libro[] = [
    {
      id: 1,
      name: "Clean Code",
      isbn: "9780132350884",
      author: "Robert C. Martin",
      editorial: "Prentice Hall",
    },
    {
      id: 2,
      name: "The Pragmatic Programmer",
      isbn: "9780201616224",
      author: "Andrew Hunt",
      editorial: "Addison-Wesley",
    },
    {
      id: 3,
      name: "Eloquent JavaScript",
      isbn: "9781593279509",
      author: "Marijn Haverbeke",
      editorial: "No Starch Press",
    },
  ]

  librosMock.forEach((libro) => {
    stack.push(libro)
  })

  return stack.print()
}

export default function LibroApp() {
  const [libros, setLibros] = useState<Libro[]>(cargarLibrosMock())
  const [ultimoRemovido, setUltimoRemovido] = useState<Libro | null>(null)

  const [name, setName] = useState("")
  const [isbn, setIsbn] = useState("")
  const [author, setAuthor] = useState("")
  const [editorial, setEditorial] = useState("")

  const reconstruirPila = () => {
    const nuevaPila = new BookStack()

    libros
      .slice()
      .reverse()
      .forEach((libro) => {
        nuevaPila.push(libro)
      })

    return nuevaPila
  }

  const handleAddLibro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      name.trim() === "" ||
      isbn.trim() === "" ||
      author.trim() === "" ||
      editorial.trim() === ""
    ) {
      return
    }

    const nuevoLibro: Libro = {
      id: Date.now(),
      name: name,
      isbn: isbn,
      author: author,
      editorial: editorial,
    }

    const nuevaPila = reconstruirPila()
    nuevaPila.push(nuevoLibro)

    setLibros(nuevaPila.print())

    setName("")
    setIsbn("")
    setAuthor("")
    setEditorial("")
  }

  const handleRemoveLibro = () => {
    if (libros.length === 0) {
      return
    }

    const nuevaPila = reconstruirPila()
    const libroRemovido = nuevaPila.pop()

    setUltimoRemovido(libroRemovido)
    setLibros(nuevaPila.print())
  }

  return (
    <div>
      <h1>Challenge 04 - Stack de Libros</h1>

      <p>Total de libros: {libros.length}</p>
      <p>
        Libro arriba de la pila: {libros.length > 0 ? libros[0].name : "Ninguno"}
      </p>
      <p>
        Último libro removido: {ultimoRemovido ? ultimoRemovido.name : "Ninguno"}
      </p>

      <form onSubmit={handleAddLibro}>
        <div>
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre del libro"
          />
        </div>

        <div>
          <label>ISBN</label>
          <input
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            placeholder="ISBN"
          />
        </div>

        <div>
          <label>Author</label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Autor"
          />
        </div>

        <div>
          <label>Editorial</label>
          <input
            value={editorial}
            onChange={(e) => setEditorial(e.target.value)}
            placeholder="Editorial"
          />
        </div>

        <button type="submit">Agregar Libro</button>
      </form>

      <button onClick={handleRemoveLibro} disabled={libros.length === 0}>
        Quitar Libro de la Pila
      </button>

      <hr />

      <h2>Pila de libros</h2>

      {libros.map((libro) => (
        <div key={libro.id}>
          <p><strong>Name:</strong> {libro.name}</p>
          <p><strong>ISBN:</strong> {libro.isbn}</p>
          <p><strong>Author:</strong> {libro.author}</p>
          <p><strong>Editorial:</strong> {libro.editorial}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}