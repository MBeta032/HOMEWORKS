import { useState } from "react";

interface SongSearchProps {
  onSearchTextChange: (text: string) => void;
  exactMatch: boolean;
  suggestionsCount: number;
}

export function SongSearch({
  onSearchTextChange,
  exactMatch,
  suggestionsCount,
}: SongSearchProps) {
  const [searchText, setSearchText] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;

    setSearchText(value);
    onSearchTextChange(value);
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
            {suggestionsCount === 1
              ? "1 sugerencia disponible"
              : `${suggestionsCount} sugerencias disponibles`}
          </small>
        </div>
      )}
    </div>
  );
}