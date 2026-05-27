import { AuthProvider } from "./context/AuthContext";
import { MusicProvider } from "./context/MusicContext";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <AuthProvider>
      <MusicProvider>
        <AppRouter />
      </MusicProvider>
    </AuthProvider>
  );
}

export default App;