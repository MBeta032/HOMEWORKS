import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence
} from "firebase/auth"
import { auth } from "../Firebase/config"
import { useAuth } from "../hooks/useAuth"
import Button from "../components/shared/Button"

export default function Register() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    if (user) {
      navigate("/home")
    }
  }, [user, navigate])

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      setError("")

      await setPersistence(auth, browserSessionPersistence)
      await createUserWithEmailAndPassword(auth, email, password)

      navigate("/home")
    } catch (error) {
      console.error(error)
      setError("No se pudo crear la cuenta")
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Registro</h1>

        <form className="auth-form" onSubmit={handleRegister}>
          <div>
            <label htmlFor="email">Correo</label>
            <input
              id="email"
              className="auth-input"
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              placeholder="Ingresa tu correo"
            />
          </div>

          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              className="auth-input"
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              placeholder="Crea una contraseña"
            />
          </div>

          <Button type="submit" className="primary-button">
            Crear cuenta
          </Button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <p className="auth-text">
          ¿Ya tienes cuenta? <Link to="/login">Volver al login</Link>
        </p>
      </section>
    </main>
  )
}