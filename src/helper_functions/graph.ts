import { writable } from 'svelte/store';
import type { Graph, Node, Edge, GraphState } from '../system_types/graph';
import {graphStore} from '../stores/graphStore';

// Define the getter and setter


export async function getGraphState() : Promise<GraphState> {
    return new Promise((resolve, reject) => {
      graphStore.subscribe((graphState: GraphState) => {
        resolve(graphState);
      });
    });
  }
  
export function setGraphState(graphState: GraphState) {
    graphStore.set(graphState);
  }
  
  // Add additional methods and properties
  graphStore.subscribe((graphState: GraphState) => {
    console.log(graphState);
  });
  

export async function addNode(node: Node): Promise<void> {
    const graphState = await getGraphState();
    graphState.graph.nodes.push(node);
    setGraphState(graphState);
  }
  
export async function addEdge(edge: Edge): Promise<void> {
    const graphState = await getGraphState();
    graphState.graph.edges.push(edge);
    setGraphState(graphState);
  }
  
export async function removeNode(id: string): Promise<void> {
    const graphState = await getGraphState();
    graphState.graph.nodes = graphState.graph.nodes.filter(node => node.id !== id);
    setGraphState(graphState);
  }
  
export async function removeEdge(sourceId: string, targetId: string): Promise<void> {
    const graphState = await getGraphState();
    graphState.graph.edges = graphState.graph.edges.filter(edge => edge.id !== sourceId || edge.id !== targetId);
    setGraphState(graphState);
  }
  
export async function selectNode(id: string): Promise<void> {
    const graphState = await getGraphState();
    const selectedNode = graphState.graph.nodes.find(node => node.id === id);
    if(selectedNode) {
      graphState.selected.selected = selectedNode;
      graphState.selected.neighbors = graphState.graph.nodes.filter(node => node.id !== id);
      graphState.selected.outgoing = graphState.graph.edges.filter(edge => edge.id === id);
      graphState.selected.incoming = graphState.graph.edges.filter(edge => edge.id === id);
      setGraphState(graphState);
    }
  }
  
export async function nodes(): Promise<Node[]> {
    const graphState = await getGraphState();
    return graphState.graph.nodes;
  }
  
export async function edges(): Promise<Edge[]> {
    const graphState = await getGraphState();
    return graphState.graph.edges;
  }