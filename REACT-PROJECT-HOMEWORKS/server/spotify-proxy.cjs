const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(cors())

// Guardamos token en memoria para no pedirlo cada vez
let cachedToken = null
let tokenExpiresAt = 0

async function getAccessToken() {
  const now = Date.now()

  // Si hay token y todavía no expira, lo reusamos
  if (cachedToken && now < tokenExpiresAt) {
    return cachedToken
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    throw new Error("Faltan SPOTIFY_CLIENT_ID o SPOTIFY_CLIENT_SECRET en .env")
  }

  // Basic base64(clientId:clientSecret)
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64")

  const body = new URLSearchParams()
  body.append("grant_type", "client_credentials")

  const resp = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  })

  const data = await resp.json()

  if (!resp.ok) {
    throw new Error(`Error token Spotify: ${JSON.stringify(data)}`)
  }

  cachedToken = data.access_token
  tokenExpiresAt = Date.now() + data.expires_in * 1000 - 5000

  return cachedToken
}

// Endpoint: /api/search?artist=...
app.get("/api/search", async (req, res) => {
  try {
    const artist = req.query.artist

    if (!artist || String(artist).trim() === "") {
      return res.status(400).json({ error: "Falta el query param ?artist=" })
    }

    const token = await getAccessToken()

    const q = `artist:${artist}`
    const url =
      "https://api.spotify.com/v1/search?" +
      new URLSearchParams({
        q,
        type: "track",
        limit: "10",
      }).toString()

    const resp = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await resp.json()

    if (!resp.ok) {
      return res.status(resp.status).json(data)
    }

    // Mandamos al front una versión simple (fácil para noobs)
    const tracks = data.tracks.items.map((t) => ({
      id: t.id,
      titulo: t.name,
      artista: t.artists?.[0]?.name ?? "Unknown",
      imagen: t.album?.images?.[0]?.url ?? "",
      previewUrl: t.preview_url ?? "",
    }))

    return res.json({ tracks })
  } catch (err) {
    return res.status(500).json({ error: String(err.message || err) })
  }
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Spotify proxy corriendo en http://localhost:${port}`)
})