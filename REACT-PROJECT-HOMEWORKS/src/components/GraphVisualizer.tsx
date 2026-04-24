// @ts-ignore
import { Graph as D3Graph } from "react-d3-graph";
import { useGraph } from "../hooks/useGraph";
import { graphToView } from "../utils/utils";

const graphConfig = {
  directed: false,
  height: 500,
  width: 800,
  nodeHighlightBehavior: true,
  node: {
    color: "#4caf50",
    size: 500,
    fontSize: 12,
    labelProperty: "label",
    highlightStrokeColor: "blue",
  },
  link: {
    highlightColor: "lightblue",
  },
  d3: {
    gravity: -300,
    linkLength: 150,
  },
};

export default function GraphVisualizer() {
  const { graph } = useGraph();

  const graphData = graphToView(graph);

  return (
    <section className="card graph-container">
      <h2>Visualización del grafo</h2>

      {graphData.nodes.length === 0 ? (
        <p>Agrega ciudades y personas para visualizar el grafo.</p>
      ) : (
        <D3Graph
          id="friends-cities-graph"
          data={graphData}
          config={graphConfig}
        />
      )}
    </section>
  );
}