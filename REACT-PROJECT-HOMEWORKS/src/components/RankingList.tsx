import { useMusic } from "../hooks/useMusic";
import { EmptyState } from "./shared/EmptyState";
import { SongCard } from "./SongCard";
import type { Song } from "../interfaces/song.interface";

export function RankingList() {
  const { topSongs } = useMusic();

  if (topSongs.length === 0) {
    return (
      <EmptyState
        message="Todavía no hay canciones para mostrar."
        detail="Cuando tengamos canciones disponibles, aparecerán en esta sección."
      />
    );
  }

  return (
    <div className="ranking-list">
      {topSongs.map((song: Song, index: number) => (
        <SongCard key={song.id} song={song} rank={index + 1} />
      ))}
    </div>
  );
}