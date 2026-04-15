import { useAuth } from "../hooks/useAuth"

export default function Dashboard() {
  const { user, logout } = useAuth()

  async function handleLogout() {
    await logout()
  }

  return (
    <main>
      <h1>Sistema de archivos</h1>
      <p>Bienvenido: {user?.email}</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </main>
  )
}