export interface IGraphEdge {
    source: string,
    target: string
}

export interface IGraphViewNode {
    id: string;
    label: string;
    color?: string;
}

export interface IGraphView {
  nodes: IGraphViewNode[];
  links: IGraphEdge[];
}