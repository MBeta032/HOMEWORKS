import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/shared/Button";
import { showErrorAlert } from "../utils/alerts";
import { useAuth } from "../hooks/useAuth";

export function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (password !== confirmPassword) {
      showErrorAlert("Las contraseñas no coinciden.");
      return;
    }

    const success = await register(email, password);

    if (success) {
      navigate("/", { replace: true });
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-card__header">
          <span className="navbar__logo">S</span>
          <h1>Crear cuenta</h1>
          <p>Regístrate para entrar al panel musical.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="register-email">Correo electrónico</label>
          <input
            id="register-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="correo@ejemplo.com"
            required
          />

          <label htmlFor="register-password">Contraseña</label>
          <input
            id="register-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Mínimo 6 caracteres"
            required
          />

          <label htmlFor="register-confirm-password">Confirmar contraseña</label>
          <input
            id="register-confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Repite tu contraseña"
            required
          />

          <Button type="submit">Crear cuenta</Button>
        </form>

        <p className="auth-card__footer">
          ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
      </section>
    </main>
  );
}