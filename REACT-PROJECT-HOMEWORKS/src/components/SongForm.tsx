import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useMusic } from "../hooks/useMusic";
import type { CreateSongInput } from "../interfaces/song.interface";
import { Button } from "./shared/Button";
import { showWarningToast } from "../utils/alerts";

const genres: string[] = [
  "Reggaeton",
  "Trap Latino",
  "Urbano Latino",
  "R&B Latino",
  "Pop Latino",
];

export function SongForm() {
  const navigate = useNavigate();
  const { addNewSong, isSavingSong } = useMusic();

  const [formData, setFormData] = useState<CreateSongInput>({
    title: "",
    artist: "",
    genre: "Reggaeton",
    popularity: 80,
  });

  const handleTextChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;

    setFormData((currentData: CreateSongInput) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleGenreChange = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    setFormData((currentData: CreateSongInput) => ({
      ...currentData,
      genre: event.target.value,
    }));
  };

  const handlePopularityChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData((currentData: CreateSongInput) => ({
      ...currentData,
      popularity: Number(event.target.value),
    }));
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const cleanTitle = formData.title.trim();
    const cleanArtist = formData.artist.trim();

    if (cleanTitle.length < 2) {
      showWarningToast("Escribe un nombre de canción válido.");
      return;
    }

    if (cleanArtist.length < 2) {
      showWarningToast("Escribe el nombre del artista.");
      return;
    }

    if (formData.popularity < 1 || formData.popularity > 100) {
      showWarningToast("La popularidad debe estar entre 1 y 100.");
      return;
    }

    const success = await addNewSong({
      title: cleanTitle,
      artist: cleanArtist,
      genre: formData.genre,
      popularity: formData.popularity,
    });

    if (success) {
      setFormData({
        title: "",
        artist: "",
        genre: "Reggaeton",
        popularity: 80,
      });

      navigate("/buscar");
    }
  };

  return (
    <form className="song-form" onSubmit={handleSubmit}>
      <div className="song-form__group">
        <label htmlFor="title">Nombre de la canción</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleTextChange}
          placeholder="Ejemplo: Nueva canción"
        />
      </div>

      <div className="song-form__group">
        <label htmlFor="artist">Artista</label>
        <input
          id="artist"
          name="artist"
          type="text"
          value={formData.artist}
          onChange={handleTextChange}
          placeholder="Ejemplo: Bad Bunny"
        />
      </div>

      <div className="song-form__group">
        <label htmlFor="genre">Género</label>
        <select
          id="genre"
          value={formData.genre}
          onChange={handleGenreChange}
        >
          {genres.map((genre: string) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="song-form__group">
        <label htmlFor="popularity">Popularidad</label>
        <input
          id="popularity"
          type="number"
          min="1"
          max="100"
          value={formData.popularity}
          onChange={handlePopularityChange}
        />
      </div>

      <Button type="submit">
        {isSavingSong ? "Guardando..." : "Agregar canción"}
      </Button>
    </form>
  );
}