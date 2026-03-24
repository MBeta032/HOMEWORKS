import type { Libro } from "../interfaces/book.interface"

export const booksMockData: Libro[] = [
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