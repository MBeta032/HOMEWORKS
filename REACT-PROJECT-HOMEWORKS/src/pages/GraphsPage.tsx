import { Header } from "../components/shared/Header";
import GraphForm from "../components/GraphForm";
import GraphSearch from "../components/GraphSearch";
import GraphVisualizer from "../components/GraphVisualizer";
import { GraphProvider } from "../context/GraphContext";

const GraphPage = () => {
  return (
    <GraphProvider>
      <main className="page">
        <Header />

        <section className="layout">
          <div className="side-panel">
            <GraphForm />
            <GraphSearch />
          </div>

          <GraphVisualizer />
        </section>
      </main>
    </GraphProvider>
  );
};

export default GraphPage;