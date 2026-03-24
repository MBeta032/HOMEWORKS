import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

export default function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const goToHome = () => {
    navigate("/home")
  }

  const handleLogout = () => {
    logout()
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
        <button onClick={goToHome}>Volver al inicio</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  )
}