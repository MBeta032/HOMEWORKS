import { useState } from "react"
import { Stack } from "./algorithms/stack"
import BookForm from "./components/BookForm"
import LibraryList from "./components/LibraryList"
import Button from "./components/Button"
import { booksMockData } from "./data/books.mock"
import type { Libro } from "./interfaces/book.interface"

const loadMockBooks = () => {
  const stack = new Stack()

  booksMockData.forEach((book) => {
    stack.push(book)
  })

  return stack.print()
}

export default function LibroApp() {
  const [books, setBooks] = useState<Libro[]>(loadMockBooks())
  const [lastRemoved, setLastRemoved] = useState<Libro | null>(null)

  const [name, setName] = useState("")
  const [isbn, setIsbn] = useState("")
  const [author, setAuthor] = useState("")
  const [editorial, setEditorial] = useState("")

  const rebuildStack = () => {
    const stack = new Stack()

    books
      .slice()
      .reverse()
      .forEach((book) => {
        stack.push(book)
      })

    return stack
  }

  const handleAddBook = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (
      name.trim() === "" ||
      isbn.trim() === "" ||
      author.trim() === "" ||
      editorial.trim() === ""
    ) {
      return
    }

    const newBook: Libro = {
      id: Date.now(),
      name: name.trim(),
      isbn: isbn.trim(),
      author: author.trim(),
      editorial: editorial.trim(),
    }

    const stack = rebuildStack()
    stack.push(newBook)

    setBooks(stack.print())
    setName("")
    setIsbn("")
    setAuthor("")
    setEditorial("")
  }

  const handleRemoveBook = () => {
    if (books.length === 0) {
      return
    }

    const stack = rebuildStack()
    const removedBook = stack.pop()

    setLastRemoved(removedBook)
    setBooks(stack.print())
  }

  return (
    <main className="page">
      <section className="library-container">
        <h1>Stack de libros</h1>

        <div className="library-info">
          <p>Total de libros: {books.length}</p>
          <p>Libro arriba de la pila: {books.length > 0 ? books[0].name : "Ninguno"}</p>
          <p>Último libro removido: {lastRemoved ? lastRemoved.name : "Ninguno"}</p>
        </div>

        <BookForm
          name={name}
          isbn={isbn}
          author={author}
          editorial={editorial}
          onChangeName={setName}
          onChangeIsbn={setIsbn}
          onChangeAuthor={setAuthor}
          onChangeEditorial={setEditorial}
          onSubmit={handleAddBook}
        />

        <div className="actions">
          <Button
            text="Quitar libro de la pila"
            onClick={handleRemoveBook}
            disabled={books.length === 0}
          />
        </div>

        <h2>Pila de libros</h2>
        <LibraryList books={books} />
      </section>
    </main>
  )
}