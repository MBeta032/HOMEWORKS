import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function handleSubmit(e: any) {
    e.preventDefault()
    setError("")

    const cleanEmail = email.trim()

    if (!cleanEmail || !password) {
      setError("Todos los campos son obligatorios")
      return
    }

    try {
      await login(cleanEmail, password)
      navigate("/dashboard")
    } catch (error: any) {
      console.log("LOGIN ERROR:", error.code, error.message)

      if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setError("Correo o contraseña incorrectos")
      } else if (error.code === "auth/invalid-email") {
        setError("El correo no es válido")
      } else {
        setError("No se pudo iniciar sesión")
      }
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Iniciar sesión</h1>

        <form onSubmit={handleSubmit} className="auth-form">
          <div>
            <label htmlFor="email">Correo</label>
            <input
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Tu contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Ingresar</button>
        </form>

        <p className="auth-switch">
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </section>
    </main>
  )
}