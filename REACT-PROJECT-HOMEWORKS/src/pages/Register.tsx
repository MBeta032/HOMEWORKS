import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../Firebase/config"

export default function Register() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

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
        <h1>Registro</h1>

        <form className="login-form" onSubmit={handleRegister}>
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
              placeholder="Crea una contraseña"
            />
          </div>

          <button type="submit">Crear cuenta</button>

          <button type="button" onClick={() => navigate("/login")}>
            Volver al login
          </button>
        </form>

        {error && <p className="error-text">{error}</p>}
      </section>
    </main>
  )
}