import { useState } from "react"
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
  type QueryConstraint,
  type WhereFilterOp,
} from "firebase/firestore"
import { db } from "../Firebase/config"

type FilterItem = [string, WhereFilterOp, unknown]

function useCollection(table: string) {
  const [results, setResults] = useState<any[]>([])
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState("")

  const getAll = async (filters: FilterItem[] = []) => {
    setIsPending(true)
    setError("")

    try {
      const tableRef = collection(db, table)

      const constraints: QueryConstraint[] = filters.map(
        ([field, operator, value]) => where(field, operator, value)
      )

      const q = query(tableRef, ...constraints)
      const response = await getDocs(q)

      const documents = response.docs.map((docItem) => ({
        id: docItem.id,
        ...docItem.data(),
      }))

      setResults(documents)
      return documents
    } catch (error) {
      console.error("Error al obtener documentos:", error)
      setError("No se pudieron cargar los datos")
      return []
    } finally {
      setIsPending(false)
    }
  }

  const add = async (data: Record<string, unknown>) => {
    setIsPending(true)
    setError("")

    try {
      const docRef = await addDoc(collection(db, table), data)
      return docRef.id
    } catch (error) {
      console.error("Error al agregar documento:", error)
      setError("No se pudo agregar el registro")
      return null
    } finally {
      setIsPending(false)
    }
  }

  const update = async (id: string, data: Record<string, unknown>) => {
    setIsPending(true)
    setError("")

    try {
      await updateDoc(doc(db, table, id), data)
      return true
    } catch (error) {
      console.error("Error al actualizar documento:", error)
      setError("No se pudo actualizar el registro")
      return false
    } finally {
      setIsPending(false)
    }
  }

  const remove = async (id: string) => {
    setIsPending(true)
    setError("")

    try {
      await deleteDoc(doc(db, table, id))
      return true
    } catch (error) {
      console.error("Error al eliminar documento:", error)
      setError("No se pudo eliminar el registro")
      return false
    } finally {
      setIsPending(false)
    }
  }

  return {
    results,
    isPending,
    error,
    getAll,
    add,
    update,
    remove,
  }
}

export default useCollection