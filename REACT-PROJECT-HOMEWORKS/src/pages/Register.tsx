import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

export default function Register() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleRegister = async () => {
    try {
      setError("")

      await createUserWithEmailAndPassword(auth, email, password)

      navigate("/home")
    } catch (error) {
      console.error(error)
      setError("No se pudo crear la cuenta")
    }
  }

  return (
    <main className="page">
      <section className="login-container">
        <h1>Register</h1>

        <div className="login-form">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
          </div>

          <button type="button" onClick={handleRegister}>
            Crear cuenta
          </button>

          <button type="button" onClick={() => navigate("/login")}>
            Volver al Login
          </button>
        </div>

        {error && <p className="error-text">{error}</p>}
      </section>
    </main>
  )
}