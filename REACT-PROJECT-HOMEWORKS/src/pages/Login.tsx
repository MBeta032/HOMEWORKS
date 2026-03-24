import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
    const {login} = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const success = login(email,password)

        if(success) {
            setError("")
            navigate("/home")
            return
        }

        setError("Credenciales Incorrectas")
    }

    return (
    <main className="page">
      <section className="login-container">
        <h1>Demo Login Page</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="juanitoPerez@mail.com"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="***"
            />
          </div>

          <button type="submit">Login</button>
        </form>

        {error && <p className="error-text">{error}</p>}
      </section>
    </main>
    )
}