import { useState } from "react"
import LinkedMusicPage from "./pages/LinkedMusicPage"
import HistoryPage from "./pages/HistoryPage"

export default function Challenge03App() {
  const [page, setPage] = useState<"music" | "history">("music")

  return (
    <div>
      <button onClick={() => setPage("music")}>Página Música (LinkedList)</button>
      <button onClick={() => setPage("history")}>Página Historial (Doubly)</button>

      <hr />

      {page === "music" ? <LinkedMusicPage /> : <HistoryPage />}
    </div>
  )
}