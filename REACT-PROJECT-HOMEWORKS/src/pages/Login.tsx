import { useState } from "react"
import { useAuth } from "../hooks/useAuth"

export default function Login() {
  const { login } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setError("")

    if (!email || !password) {
      setError("Todos los campos son obligatorios")
      return
    }

    try {
      setIsSubmitting(true)
      await login(email, password)
    } catch (error) {
      setError("Correo o contraseña incorrectos")
    } finally {
      setIsSubmitting(false)
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
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Tu contraseña"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </div>

          {error && <p>{error}</p>}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </section>
    </main>
  )
}