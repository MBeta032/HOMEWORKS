import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const Home = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  return (
    <main className="page">
      <section className="home-container">
        <h1>Bienvenido al dashboard</h1>

        <p>Has iniciado sesión correctamente. Aqui podras encontrar el acceso a Trees</p>
        <p>
          Usuario actual: <strong>{user?.email ?? "Sin usuario"}</strong>
        </p>

        <div className="home-actions">
          <button onClick={() => navigate("/binary-tree")}>
            Ir a Binary Tree
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home