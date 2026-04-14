import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../Firebase/config'

function useCollection<T extends { id: string }>(path: string | null) {
  const [documents, setDocuments] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!path) {
      setDocuments([])
      setLoading(false)
      setError('')
      return
    }

    setLoading(true)
    setError('')

    const collectionRef = collection(db, path)

    const unsubscribe = onSnapshot(
      collectionRef,
      snapshot => {
        const results = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          } as T
        })

        setDocuments(results)
        setLoading(false)
      },
      () => {
        setError('No se pudo leer la colección')
        setLoading(false)
      }
    )

    return unsubscribe
  }, [path])

  return { documents, loading, error }
}

export { useCollection }