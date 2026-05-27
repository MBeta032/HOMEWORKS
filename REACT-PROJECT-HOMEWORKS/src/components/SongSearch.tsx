import type { ChangeEvent } from "react";
import { useMusic } from "../hooks/useMusic";

export function SongSearch() {
  const { searchText, handleSearchTextChange, exactMatch, suggestions } =
    useMusic();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    handleSearchTextChange(event.target.value);
  };

  const hasText = searchText.trim().length > 0;

  return (
    <div className="song-search">
      <label htmlFor="song-search">¿Qué canción quieres escuchar?</label>

      <input
        id="song-search"
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Busca por nombre de canción..."
      />

      {hasText && (
        <div className="song-search__message">
          {exactMatch ? (
            <p className="song-search__success">
              Encontramos esta canción en el catálogo.
            </p>
          ) : (
            <p className="song-search__warning">
              No encontramos una coincidencia exacta. Revisa las sugerencias.
            </p>
          )}

          <small>
            {suggestions.length === 1
              ? "1 sugerencia disponible"
              : `${suggestions.length} sugerencias disponibles`}
          </small>
        </div>
      )}
    </div>
  );
}