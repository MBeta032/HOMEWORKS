import { useState, type FormEvent } from "react"
import { Stack } from "../algorithms/stack.class"
import BookForm from "../components/library/BookForm"
import LibraryList from "../components/library/LibraryList"
import { booksMockData } from "../data/books.mock.data"
import type { Libro } from "../interfaces/book.interface"
import Header from "../components/shared/Header"

const loadMockBooks = () => {
  const stack = new Stack()

  booksMockData.forEach((book) => {
    stack.push(book)
  })

  return stack.print()
}

export default function Library() {
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

  const handleAddBook = (event: FormEvent<HTMLFormElement>) => {
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
        <Header/>
        <h1>Library</h1>

        <div className="library-info">
          <p>Total de libros: {books.length}</p>
          <p>
            Libro arriba de la pila: {books.length > 0 ? books[0].name : "Ninguno"}
          </p>
          <p>
            Último libro removido: {lastRemoved ? lastRemoved.name : "Ninguno"}
          </p>
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

        <button onClick={handleRemoveBook} disabled={books.length === 0}>
          Quitar libro de la pila
        </button>

        <h2>Pila de libros</h2>
        <LibraryList books={books} />
      </section>
    </main>
  )
}