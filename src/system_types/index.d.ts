export type Node = {
  id: string;
  label?: string;
  data?: any;
  source? : null; // need these purely for type checking
  target? : null; // need these purely for type checking... they will never ben assigned
};

export type Edge = {
  id: string;
  source: string; // Node id
  target: string; // Node id
  label?: string;
  data?: any; // purely for type checking.. never will be assigned
};

export type Graph = {
  nodes: Node[];
  edges: Edge[];
};

export type selectedGraphComponent = {
    type: "Node" | "Edge" | null;
    instance: Node | Edge;
    neighbors: Node[] | null;
    outgoing: Edge[] | null;
    incoming: Edge[] | null;
}

export type GraphState = {
  graph: Graph;
  selected: selectedGraphComponent | null;
  lastAction: "addNode" | "addEdge" | "removeNode" | "removeEdge" | "selectNode" | "deselectNode" | "none" | "selectEdge" | "deselectEdge" | "updateNode" | "updateEdge";
  actedOn: Node | Edge | null;
};