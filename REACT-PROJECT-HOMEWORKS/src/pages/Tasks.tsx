import { useState, type FormEvent } from "react"
import { useTasks } from "../hooks/useTasks"
import Header from "../components/shared/Header"
import Button from "../components/shared/Button"

function Tasks() {
  const {
    tasks,
    loadingTasks,
    error,
    addTask,
    updateTaskTitle,
    toggleTask,
    removeTask,
  } = useTasks()

  const [newTask, setNewTask] = useState("")
  const [editingId, setEditingId] = useState("")
  const [editText, setEditText] = useState("")

  const completedCount = tasks.filter((task) => task.completed).length
  const pendingCount = tasks.length - completedCount

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const ok = await addTask(newTask)

    if (ok) {
      setNewTask("")
    }
  }

  const handleStartEdit = (id: string, title: string) => {
    setEditingId(id)
    setEditText(title)
  }

  const handleCancelEdit = () => {
    setEditingId("")
    setEditText("")
  }

  const handleSaveEdit = async (id: string) => {
    const ok = await updateTaskTitle(id, editText)

    if (ok) {
      setEditingId("")
      setEditText("")
    }
  }

  return (
    <div className="page">
      <div className="tasks-container">
        <Header />

        <h1>Task App</h1>
        <p>Gestión de tareas</p>

        <div className="tasks-summary">
          <div className="tasks-summary-card">
            <span>Total</span>
            <strong>{tasks.length}</strong>
          </div>

          <div className="tasks-summary-card">
            <span>Pendientes</span>
            <strong>{pendingCount}</strong>
          </div>

          <div className="tasks-summary-card">
            <span>Completadas</span>
            <strong>{completedCount}</strong>
          </div>
        </div>

        <form className="tasks-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Escribe una tarea"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />

          <Button
            text="Agregar tarea"
            type="submit"
            disabled={!newTask.trim()}
          />
        </form>

        {error && <p className="error-text">{error}</p>}

        {loadingTasks ? (
          <p>Cargando tareas...</p>
        ) : tasks.length === 0 ? (
          <p>No hay tareas registradas</p>
        ) : (
          <div className="tasks-list">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`task-card ${task.completed ? "is-completed" : ""}`}
              >
                {editingId === task.id ? (
                  <div className="task-edit">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />

                    <div className="task-actions">
                      <Button
                        text="Guardar"
                        onClick={() => handleSaveEdit(task.id)}
                      />
                      <Button
                        text="Cancelar"
                        onClick={handleCancelEdit}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="task-top">
                      <div className="task-info">
                        <h3>{task.title}</h3>
                        <p
                          className={`task-state ${
                            task.completed ? "completed" : "pending"
                          }`}
                        >
                          {task.completed ? "Completada" : "Pendiente"}
                        </p>
                      </div>
                    </div>

                    <div className="task-actions">
                      <Button
                        text="Editar"
                        onClick={() => handleStartEdit(task.id, task.title)}
                      />

                      <Button
                        text={
                          task.completed
                            ? "Marcar pendiente"
                            : "Marcar completada"
                        }
                        onClick={() => toggleTask(task.id, task.completed)}
                      />

                      <Button
                        text="Eliminar"
                        onClick={() => removeTask(task.id)}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Tasks