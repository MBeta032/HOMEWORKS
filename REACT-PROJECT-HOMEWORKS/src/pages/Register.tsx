import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export default function Register() {
  const { register, logout } = useAuth()
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

    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres")
      return
    }

    try {
      await register(cleanEmail, password)
      await logout()
      navigate("/login")
    } catch (error: any) {
      console.log("REGISTER ERROR:", error.code, error.message)

      if (error.code === "auth/email-already-in-use") {
        setError("Ese correo ya está registrado")
      } else if (error.code === "auth/invalid-email") {
        setError("El correo no es válido")
      } else if (error.code === "auth/weak-password") {
        setError("La contraseña es muy débil")
      } else {
        setError("No se pudo registrar el usuario")
      }
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Registro</h1>

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
              placeholder="Mínimo 8 caracteres"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Registrarse</button>
        </form>

        <p className="auth-switch">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </section>
    </main>
  )
}