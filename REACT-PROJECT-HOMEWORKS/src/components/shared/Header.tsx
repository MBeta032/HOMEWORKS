import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../../Firebase/config"
import { useAuth } from "../../hooks/useAuth"

export default function Header() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const goToHome = () => {
    navigate("/home")
  }

  const handleLogout = async () => {
    await signOut(auth)
    navigate("/login")
  }

  return (
    <header className="app-header">
      <div className="app-header-left">
        <p>
          Usuario actual: <strong>{user?.email}</strong>
        </p>
      </div>

      <div className="app-header-actions">
        <button onClick={goToHome}>Volver al Home</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  )
}