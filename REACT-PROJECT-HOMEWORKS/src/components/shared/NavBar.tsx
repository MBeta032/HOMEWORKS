import { Link, useNavigate } from "react-router-dom";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { useAuth } from "../../hooks/useAuth";

export function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async (): Promise<void> => {
    await logout();
    navigate("/login", { replace: true });
  };

  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand">
        <span className="navbar__logo">S</span>

        <div>
          <h1>Spotify Edu</h1>
          <p>Explora canciones, rankings y recomendaciones musicales</p>
        </div>
      </Link>

      <div className="navbar__badges">
        {user !== null && <Badge variant="tech">{user.email}</Badge>}
        <Button variant="secondary" onClick={handleLogout}>
          Cerrar sesión
        </Button>
      </div>
    </header>
  );
}