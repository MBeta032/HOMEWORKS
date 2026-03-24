import type { Libro } from "../interfaces/book.interface"
import BookCard from "./BookCard"

interface LibraryListProps {
  books: Libro[]
}

export default function LibraryList({ books }: LibraryListProps) {
  if (books.length === 0) {
    return <p>No hay libros en la pila.</p>
  }

  return (
    <section className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  )
}