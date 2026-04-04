import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../Firebase/config"

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      setError("")

      await signInWithEmailAndPassword(auth, email, password)

      navigate("/home")
    } catch (error) {
      console.error(error)
      setError("Correo o contraseña incorrectos")
    }
  }

  return (
    <main className="page">
      <section className="login-container">
        <h1>Login</h1>

        <form className="login-form" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Correo</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Ingresa tu correo"
            />
          </div>

          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <button type="submit">Iniciar sesión</button>

          <button type="button" onClick={() => navigate("/register")}>
            Ir a registro
          </button>
        </form>

        {error && <p className="error-text">{error}</p>}
      </section>
    </main>
  )
}