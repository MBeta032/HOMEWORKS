import { MusicProvider } from "./context/MusicContext";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <MusicProvider>
      <AppRouter />
    </MusicProvider>
  );
}

export default App;