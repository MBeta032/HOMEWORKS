import { Link } from "react-router-dom";
import { Button } from "../components/shared/Button";
import { DashboardSection } from "../components/shared/DashboardSection";
import { useMusic } from "../hooks/useMusic";

export function HomePage() {
  const { songs, topSongs } = useMusic();
  const mostPopularSong = topSongs[0];

  return (
    <div className="home-page">
      <section className="music-dashboard__hero">
        <div>
          <span className="music-dashboard__eyebrow">Spotify Edu</span>
          <h1>Descubre música urbana latina</h1>
          <p>
            Busca canciones, revisa las más populares y encuentra
            recomendaciones similares desde un solo panel.
          </p>

          <div className="home-page__actions">
            <Link to="/buscar">
              <Button>Buscar música</Button>
            </Link>

            <Link to="/ranking">
              <Button variant="secondary">Ver populares</Button>
            </Link>
          </div>
        </div>

        <div className="music-dashboard__summary">
          <article>
            <strong>{songs.length}</strong>
            <span>Canciones</span>
          </article>

          <article>
            <strong>{topSongs.length}</strong>
            <span>En el ranking</span>
          </article>

          <article>
            <strong>Latino</strong>
            <span>Catálogo principal</span>
          </article>
        </div>
      </section>

      <DashboardSection
        title="Resumen del catálogo"
        subtitle="Explora canciones de reggaetón, trap latino y urbano latino."
      >
        <div className="home-page__resume">
          <article>
            <h3>Canción destacada</h3>
            <p>
              {mostPopularSong !== undefined
                ? `${mostPopularSong.title} - ${mostPopularSong.artist}`
                : "Todavía no hay canción destacada."}
            </p>
          </article>

          <article>
            <h3>Qué puedes hacer</h3>
            <p>
              Puedes buscar canciones por nombre, revisar las más populares y
              descubrir recomendaciones relacionadas.
            </p>
          </article>
        </div>
      </DashboardSection>
    </div>
  );
}