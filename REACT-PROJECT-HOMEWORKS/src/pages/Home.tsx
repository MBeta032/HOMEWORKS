import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../Firebase/config"
import { useAuth } from "../hooks/useAuth"

export default function Home() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const handleLogout = async () => {
    await signOut(auth)
    navigate("/login")
  }

  return (
    <main className="page">
      <section className="home-container">
        <h1>Home</h1>

        <p>Bienvenido al sistema</p>

        <p>
          Usuario actual: <strong>{user?.email}</strong>
        </p>

        <div className="home-actions">
          <button onClick={() => navigate("/tasks")}>Ir a Tasks</button>
          <button onClick={() => navigate("/atm")}>Ir a ATM</button>
          <button onClick={() => navigate("/library")}>Ir a Library</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </section>
    </main>
  )
}