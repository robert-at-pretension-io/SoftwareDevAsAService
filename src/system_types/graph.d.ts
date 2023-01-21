export type Node = {
  id: string;
  label?: string;
  data?: any;
};

export type Edge = {
  id: string;
  source: string; // Node id
  target: string; // Node id
  label?: string;
};

export type Graph = {
  nodes: Node[];
  edges: Edge[];
};

export type selectedGraphComponent = {
    selected: Edge | Node;
    neighbors: Node[] | null;
    outgoing: Edge[] | null;
    incoming: Edge[] | null;
}

export type GraphState = {
  graph: Graph;
  selected: selectedComponent;
};