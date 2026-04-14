import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword
} from "firebase/auth"
import { auth } from "../Firebase/config"
import { useAuth } from "../hooks/useAuth"
import Button from "../components/shared/Button"

export default function Login() {
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

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      setError("")

      await setPersistence(auth, browserSessionPersistence)
      await signInWithEmailAndPassword(auth, email, password)

      navigate("/home")
    } catch (error) {
      console.error(error)
      setError("Correo o contraseña incorrectos")
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Login</h1>

        <form className="auth-form" onSubmit={handleLogin}>
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
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <Button type="submit" className="primary-button">
            Iniciar sesión
          </Button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <p className="auth-text">
          ¿No tienes cuenta? <Link to="/register">Ir a registro</Link>
        </p>
      </section>
    </main>
  )
}