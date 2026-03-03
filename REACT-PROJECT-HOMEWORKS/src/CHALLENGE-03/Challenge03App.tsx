import { useState } from "react"
import LinkedMusicPage from "./pages/LinkedMusicPage"
import HistoryPage from "./pages/HistoryPage"
import "./styles/challenge03.css"

export default function Challenge03App() {
  const [page, setPage] = useState<"music" | "history">("music")

  return (
    <div className="c03-shell">
      <div className="c03-nav">
        <button
          className={"c03-tab " + (page === "music" ? "c03-tab-active" : "")}
          onClick={() => setPage("music")}
        >
          Música (LinkedList)
        </button>

        <button
          className={"c03-tab " + (page === "history" ? "c03-tab-active" : "")}
          onClick={() => setPage("history")}
        >
          Historial (Doubly)
        </button>
      </div>

      <div className="c03-content">
        {page === "music" ? <LinkedMusicPage /> : <HistoryPage />}
      </div>
    </div>
  )
}