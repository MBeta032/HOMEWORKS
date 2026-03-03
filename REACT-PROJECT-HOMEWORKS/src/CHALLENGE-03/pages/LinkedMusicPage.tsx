import { useEffect, useState } from "react"
import { LinkedList } from "../linked/LinkedList"
import { Node } from "../linked/Node"
import type { Song } from "../spotifySong"

export default function LinkedMusicPage() {
  // 1) Lo que escribes en el input
  const [artist, setArtist] = useState("")

  // 2) Esto es lo que REALMENTE dispara la búsqueda
  // (para que no busque en cada tecla que escribes)
  const [query, setQuery] = useState("")

  // 3) Resultados como array normal para mostrar con .map()
  const [songs, setSongs] = useState<Song[]>([])

  // 4) Estructura de datos: LinkedList y el puntero current
  const [lista, setLista] = useState<LinkedList<Song> | null>(null)
  const [current, setCurrent] = useState<Node<Song> | null>(null)

  // 5) Estado para avisar cargando/error (para noobs es útil)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // useEffect: cuando query cambia, hacemos fetch
  useEffect(() => {
    if (query.trim() === "") {
      return
    }

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

        // data.tracks viene del proxy
        const tracks: Song[] = data.tracks

        // Guardamos en array para .map()
        setSongs(tracks)

        // Creamos y llenamos la LinkedList en el mismo orden
        const nuevaLista = new LinkedList<Song>()
        tracks.forEach((s) => nuevaLista.append(s))

        // Guardamos lista y ponemos current en el head
        setLista(nuevaLista)
        setCurrent(nuevaLista.head)

        setLoading(false)
      } catch (e) {
        setError("Error de red (¿está prendido el servidor proxy?)")
        setLoading(false)
      }
    }

    fetchSongs()
  }, [query])

  // Cuando das Enter o click en Buscar
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setQuery(artist)
  }

  // Botón “Siguiente”: avanza usando current.next
  const handleNext = () => {
    if (current === null) return

    if (current.next !== null) {
      setCurrent(current.next)
      return
    }

    // Si llegaste al final, vuelves al inicio
    if (lista !== null) {
      setCurrent(lista.head)
    }
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>TU LISTA DE CANCIONES</h2>

      <form onSubmit={handleSearch}>
        <input
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Escribe un artista (ej: Drake)"
        />
        <button type="submit">Buscar</button>
      </form>

      {loading && <p>Cargando canciones...</p>}
      {error && <p>{error}</p>}

      <hr />

      {/* Canción actual */}
      {current === null ? (
        <p>No hay canción seleccionada</p>
      ) : (
        <div>
          <p>
            <strong>Reproduciendo:</strong> {current.value.titulo} - {current.value.artista}
          </p>

          {/* Preview de Spotify (a veces viene vacío) */}
          {current.value.previewUrl ? (
            <audio controls src={current.value.previewUrl} />
          ) : (
            <p>Esta canción no tiene preview</p>
          )}
        </div>
      )}

      <button onClick={handleNext}>Siguiente</button>

      <hr />

      {/* Resultados (array) */}
      <p><strong>Resultados:</strong></p>
      <ul>
        {songs.map((s) => (
          <li key={s.id}>
            {s.titulo} - {s.artista}
          </li>
        ))}
      </ul>
    </div>
  )
}