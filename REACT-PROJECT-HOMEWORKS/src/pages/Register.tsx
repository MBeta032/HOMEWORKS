import { useState } from "react"
import { useAuth } from "../hooks/useAuth"

export default function Register() {
  const { register } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setError("")
    setSuccess("")

    if (!email || !password) {
      setError("Todos los campos son obligatorios")
      return
    }

    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres")
      return
    }

    try {
      setIsSubmitting(true)
      await register(email, password)
      setSuccess("Usuario registrado correctamente")
      setEmail("")
      setPassword("")
    } catch (error) {
      setError("No se pudo registrar el usuario")
    } finally {
      setIsSubmitting(false)
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
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Mínimo 8 caracteres"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </div>

          {error && <p>{error}</p>}
          {success && <p>{success}</p>}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registrando..." : "Registrarse"}
          </button>
        </form>
      </section>
    </main>
  )
}