import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../../Firebase/config"
import { useAuth } from "../../hooks/useAuth"
import Button from "./Button"

export default function Header() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const goToHome = () => {
    navigate("/home")
  }

  const goToMenuTree = () => {
    navigate("/menu-tree")
  }

  const handleLogout = async () => {
    await signOut(auth)
    navigate("/login")
  }

  return (
    <header className="app-header">
      <div className="header-brand">
        <strong>Menu Tree App</strong>
        <span>{user?.email ?? "Sin usuario"}</span>
      </div>

      <div className="header-actions">
        <Button onClick={goToHome} className="secondary-button">
          Volver al Home
        </Button>

        <Button onClick={goToMenuTree} className="secondary-button">
          Menu Tree
        </Button>

        <Button onClick={handleLogout} className="danger-button">
          Logout
        </Button>
      </div>
    </header>
  )
}