import { useContext } from "react";
import { MusicContext } from "../context/MusicContext";

export function useMusic() {
  const context = useContext(MusicContext);

  if (context === undefined) {
    throw new Error("useMusic debe usarse dentro de MusicProvider.");
  }

  return context;
}