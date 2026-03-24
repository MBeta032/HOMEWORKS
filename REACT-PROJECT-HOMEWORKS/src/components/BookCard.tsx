import type { Libro } from "../interfaces/book.interface"

interface BookCardProps {
  book: Libro
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <article className="book-card">
      <p>
        <strong>Nombre:</strong> {book.name}
      </p>

      <p>
        <strong>ISBN:</strong> {book.isbn}
      </p>

      <p>
        <strong>Autor:</strong> {book.author}
      </p>

      <p>
        <strong>Editorial:</strong> {book.editorial}
      </p>
    </article>
  )
}