import type { ChangeEvent } from "react";
import type { Song } from "../interfaces/song.interface";
import { useMusic } from "../hooks/useMusic";
import { EmptyState } from "./shared/EmptyState";
import { SongCard } from "./SongCard";

export function RelatedSongs() {
  const {
    songs,
    selectedSongId,
    relatedSongs,
    handleSelectRelatedSong,
  } = useMusic();

  const handleSelectChange = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    handleSelectRelatedSong(event.target.value);
  };

  const selectedSong = songs.find((song: Song) => song.id === selectedSongId);

  return (
    <div className="related-songs">
      <label htmlFor="related-song-select">Elige una canción</label>

      <select
        id="related-song-select"
        value={selectedSongId}
        onChange={handleSelectChange}
      >
        <option value="">Selecciona una canción</option>

        {songs.map((song: Song) => (
          <option key={song.id} value={song.id}>
            {song.title} - {song.artist}
          </option>
        ))}
      </select>

      <div className="related-songs__adjacency">
        <strong>Canciones recomendadas:</strong>

        {selectedSong === undefined ? (
          <p>Selecciona una canción para ver recomendaciones.</p>
        ) : (
          <p>
            Si te gusta {selectedSong.title}, también podrías escuchar{" "}
            {relatedSongs.length > 0
              ? relatedSongs.map((song: Song) => song.title).join(", ")
              : "otras canciones del catálogo próximamente"}
            .
          </p>
        )}
      </div>

      <div className="related-songs__results">
        {relatedSongs.length === 0 ? (
          <EmptyState
            message="No hay recomendaciones disponibles por ahora."
            detail="Selecciona otra canción para descubrir opciones similares."
          />
        ) : (
          relatedSongs.map((song: Song) => (
            <SongCard key={song.id} song={song} />
          ))
        )}
      </div>
    </div>
  );
}