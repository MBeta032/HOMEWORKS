import { createContext, useEffect, useState, type ReactNode } from "react"
import useCollection from "../hooks/useCollection"
import { useAuth } from "../hooks/useAuth"
import type { ITask } from "../interfaces/ITask.interface"

interface TaskContextType {
  tasks: ITask[]
  loadingTasks: boolean
  error: string
  addTask: (title: string) => Promise<boolean>
  updateTaskTitle: (id: string, title: string) => Promise<boolean>
  toggleTask: (id: string, currentStatus: boolean) => Promise<boolean>
  removeTask: (id: string) => Promise<boolean>
}

export const TaskContext = createContext<TaskContextType | null>(null)

export function TaskProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const { getAll, add, update, remove, error } = useCollection("tasks")

  const [tasks, setTasks] = useState<ITask[]>([])
  const [loadingTasks, setLoadingTasks] = useState(true)

  const loadTasks = async () => {
  console.log("Cargando tareas...")

  if (!user) {
    console.log("No hay usuario en loadTasks")
    setTasks([])
    setLoadingTasks(false)
    return
  }

  setLoadingTasks(true)

  try {
    const documents = await getAll([["userId", "==", user.uid]])
    console.log("Documentos traídos desde Firebase:", documents)

    const mappedTasks: ITask[] = documents.map((item: any) => ({
      id: String(item.id),
      title: String(item.title ?? ""),
      completed: Boolean(item.completed),
    }))

    console.log("Tareas mapeadas:", mappedTasks)
    setTasks(mappedTasks)
  } catch (err) {
    console.error("Error al cargar tareas:", err)
  } finally {
    setLoadingTasks(false)
  }
}

  useEffect(() => {
    loadTasks()
  }, [user])

  const addTask = async (title: string) => {
  console.log("Entró a addTask con:", title)

  if (!user) {
    console.log("No hay user")
    return false
  }

  const cleanTitle = title.trim()
  if (!cleanTitle) {
    console.log("Título vacío")
    return false
  }

  const newId = await add({
    title: cleanTitle,
    completed: false,
    userId: user.uid,
  })

  console.log("ID devuelto por Firebase:", newId)

  if (!newId) return false

  await loadTasks()
  console.log("Tareas recargadas después de agregar")

  return true
}

  const updateTaskTitle = async (id: string, title: string) => {
    const cleanTitle = title.trim()
    if (!cleanTitle) return false

    const ok = await update(id, { title: cleanTitle })
    if (!ok) return false

    await loadTasks()
    return true
  }

  const toggleTask = async (id: string, currentStatus: boolean) => {
    const ok = await update(id, { completed: !currentStatus })
    if (!ok) return false

    await loadTasks()
    return true
  }

  const removeTask = async (id: string) => {
    const ok = await remove(id)
    if (!ok) return false

    await loadTasks()
    return true
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadingTasks,
        error,
        addTask,
        updateTaskTitle,
        toggleTask,
        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}