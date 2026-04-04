import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"

export default function Home() {
  const navigate = useNavigate()

  const user = auth.currentUser

  const goToATM = () => {
    navigate("/atm")
  }

  const goToLibrary = () => {
    navigate("/library")
  }

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
          <button onClick={goToATM}>Ir a ATM</button>
          <button onClick={goToLibrary}>Ir a Library</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </section>
    </main>
  )
}