import Graph, { type GraphNode } from "../algorithms/Graph";
import type {
  IGraphEdge,
  IGraphView,
  IGraphViewNode,
} from "../interfaces/IGraphView";

export function cloneGraph(oldGraph: Graph): Graph {
  const newGraph = new Graph();

  newGraph.people = [...oldGraph.people];
  newGraph.cities = [...oldGraph.cities];

  newGraph.adjList = new Map<GraphNode, GraphNode[]>(
    Array.from(oldGraph.adjList.entries()).map(([node, neighbors]) => [
      node,
      [...neighbors],
    ])
  );

  return newGraph;
}

export function graphToView(graph: Graph): IGraphView {
  const nodes: IGraphViewNode[] = [];
  const links: IGraphEdge[] = [];

  const visitedNodes = new Set<string>();
  const visitedEdges = new Set<string>();

  graph.adjList.forEach((neighbors, node) => {
    if (!visitedNodes.has(node.id)) {
      const isPerson = "age" in node;

      nodes.push({
        id: node.id,
        label: isPerson ? `${node.name} (${node.age})` : node.name,
        color: isPerson ? "#4caf50" : "#2196f3",
      });

      visitedNodes.add(node.id);
    }

    neighbors.forEach((neighbor) => {
      const edgeKey = [node.id, neighbor.id].sort().join("-");

      if (!visitedEdges.has(edgeKey)) {
        links.push({
          source: node.id,
          target: neighbor.id,
        });

        visitedEdges.add(edgeKey);
      }
    });
  });

  return {
    nodes,
    links,
  };
}