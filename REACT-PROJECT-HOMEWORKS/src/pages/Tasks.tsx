import { useNavigate } from "react-router-dom"

export default function Tasks() {
  const navigate = useNavigate()

  return (
    <main className="page">
      <section className="tasks-container">
        <h1>Task App</h1>

        <p>Aquí construiremos el CRUD de tareas con Firebase.</p>

        <div className="tasks-actions">
          <button onClick={() => navigate("/home")}>Volver al Home</button>
        </div>
      </section>
    </main>
  )
}