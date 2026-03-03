import { useEffect, useState } from "react"
import { LinkedList } from "../linked/LinkedList"
import { Node } from "../linked/Node"
import type { Song } from "../spotifySong"
import "./../styles/music.css"

export default function LinkedMusicPage() {
  const [artist, setArtist] = useState("")
  const [query, setQuery] = useState("")

  const [songs, setSongs] = useState<Song[]>([])
  const [lista, setLista] = useState<LinkedList<Song> | null>(null)
  const [current, setCurrent] = useState<Node<Song> | null>(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (query.trim() === "") return

    const fetchSongs = async () => {
      try {
        setLoading(true)
        setError("")

        const resp = await fetch(
          `http://localhost:3001/api/search?artist=${encodeURIComponent(query)}`
        )

        const data = await resp.json()

        if (!resp.ok) {
          setError(data?.error || "Error buscando en Spotify")
          setLoading(false)
          return
        }

        const tracks: Song[] = data.tracks
        setSongs(tracks)

        const nuevaLista = new LinkedList<Song>()
        tracks.forEach((s) => nuevaLista.append(s))

        setLista(nuevaLista)
        setCurrent(nuevaLista.head)

        setLoading(false)
      } catch (e) {
        setError("Error de red (¿está prendido el proxy?)")
        setLoading(false)
      }
    }

    fetchSongs()
  }, [query])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setQuery(artist)
  }

  const handleNext = () => {
    if (current === null) return

    if (current.next !== null) {
      setCurrent(current.next)
      return
    }

    if (lista !== null) {
      setCurrent(lista.head)
    }
  }

  const currentId = current ? current.value.id : ""

  return (
    <div className="musicPage">
      <div className="musicHeader">
        <h2 className="musicTitle">Spotify Search</h2>
        <p className="musicSub">
          Buscas un artista, recibes canciones reales donde participan.
        </p>
      </div>

      <form className="musicSearch" onSubmit={handleSearch}>
        <input
          className="musicInput"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Escribe un artista (ej: Drake)"
        />

        <button className="musicBtn" type="submit">
          Buscar
        </button>

        <button
          className="musicBtn musicBtnSecondary"
          type="button"
          onClick={handleNext}
        >
          Siguiente
        </button>
      </form>

      {loading && <p>Cargando canciones...</p>}
      {error && <p>{error}</p>}

      <div className="musicGrid">
        <div className="playerCard">
          {current === null ? (
            <p>No hay canción seleccionada</p>
          ) : (
            <>
              <div className="playerTop">
                {current.value.imagen ? (
                  <img className="cover" src={current.value.imagen} alt="cover" />
                ) : (
                  <div className="cover" />
                )}

                <div className="playerInfo">
                  <p className="nowPlaying">{current.value.titulo}</p>
                  <p className="artistLine">{current.value.artista}</p>
                </div>
              </div>

              <div className="audioBox">
                {current.value.previewUrl ? (
                  <audio controls src={current.value.previewUrl} />
                ) : (
                  <p>Esta canción no tiene preview</p>
                )}
              </div>
            </>
          )}
        </div>

        <div className="resultsCard">
          <div className="resultsTitle">Resultados</div>

          <ul className="resultsList">
            {songs.map((s) => (
              <li
                key={s.id}
                className={"resultItem " + (s.id === currentId ? "resultActive" : "")}
              >
                <div className="resultLeft">
                  <div className="resultSong">{s.titulo}</div>
                  <div className="resultArtist">{s.artista}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}