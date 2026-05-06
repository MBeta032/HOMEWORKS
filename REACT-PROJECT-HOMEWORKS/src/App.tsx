import { SmartSearchProvider } from "./context/SmartSearchContext";
import { GraphsPage } from "./pages/GraphsPage";

function App() {
  return (
    <SmartSearchProvider>
      <GraphsPage />
    </SmartSearchProvider>
  );
}

export default App;