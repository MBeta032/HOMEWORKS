import type { Song } from "../interfaces/song.interface";
import { Badge } from "./shared/Badge";

interface SongCardProps {
  song: Song;
  rank?: number;
  isSelected?: boolean;
  onClick?: (song: Song) => void;
}

export function SongCard({
  song,
  rank,
  isSelected = false,
  onClick,
}: SongCardProps) {
  const handleClick = (): void => {
    if (onClick !== undefined) {
      onClick(song);
    }
  };

  return (
    <article
      className={`song-card ${isSelected ? "song-card--selected" : ""}`}
      onClick={handleClick}
    >
      {rank !== undefined && <span className="song-card__rank">#{rank}</span>}

      <div className="song-card__info">
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
        <Badge variant="genre">{song.genre}</Badge>
      </div>

      <div className="song-card__popularity">
        <strong>{song.popularity}</strong>
        <small>Popularidad</small>
      </div>
    </article>
  );
}