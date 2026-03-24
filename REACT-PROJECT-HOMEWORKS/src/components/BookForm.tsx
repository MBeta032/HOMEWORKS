import type { FormEvent } from "react"
import Button from "./Button"

interface BookFormProps {
  name: string
  isbn: string
  author: string
  editorial: string
  onChangeName: (value: string) => void
  onChangeIsbn: (value: string) => void
  onChangeAuthor: (value: string) => void
  onChangeEditorial: (value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export default function BookForm({
  name,
  isbn,
  author,
  editorial,
  onChangeName,
  onChangeIsbn,
  onChangeAuthor,
  onChangeEditorial,
  onSubmit,
}: BookFormProps) {
  return (
    <form onSubmit={onSubmit} className="book-form">
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => onChangeName(e.target.value)}
          placeholder="Nombre del libro"
        />
      </div>

      <div>
        <label htmlFor="isbn">ISBN</label>
        <input
          id="isbn"
          type="text"
          value={isbn}
          onChange={(e) => onChangeIsbn(e.target.value)}
          placeholder="ISBN"
        />
      </div>

      <div>
        <label htmlFor="author">Autor</label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => onChangeAuthor(e.target.value)}
          placeholder="Autor"
        />
      </div>

      <div>
        <label htmlFor="editorial">Editorial</label>
        <input
          id="editorial"
          type="text"
          value={editorial}
          onChange={(e) => onChangeEditorial(e.target.value)}
          placeholder="Editorial"
        />
      </div>

      <Button type="submit" text="Agregar libro" />
    </form>
  )
}