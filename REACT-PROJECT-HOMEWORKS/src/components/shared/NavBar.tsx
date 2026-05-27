import { Badge } from "./Badge";

export function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__logo">S</span>

        <div>
          <h1>Spotify Edu</h1>
          <p>Explora canciones, rankings y recomendaciones musicales</p>
        </div>
      </div>

      <div className="navbar__badges">
        <Badge variant="tech">Música</Badge>
        <Badge variant="tech">Ranking</Badge>
        <Badge variant="tech">Recomendaciones</Badge>
      </div>
    </header>
  );
}