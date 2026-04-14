import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import Header from "../components/shared/Header"
import Button from "../components/shared/Button"

const Home = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  return (
    <>
      <Header />

      <main className="home-page">
        <section className="home-card">
          <p className="badge">Sesión activa</p>
          <h1>Bienvenido al dashboard</h1>

          <p>
            Has iniciado sesión correctamente. Aquí podrás encontrar el acceso a
            Trees.
          </p>

          <p>
            Usuario actual: <strong>{user?.email ?? "Sin usuario"}</strong>
          </p>

          <div className="header-actions">
            <Button
              onClick={() => navigate("/menu-tree")}
              className="primary-button"
            >
              Ir a Menu Tree
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home