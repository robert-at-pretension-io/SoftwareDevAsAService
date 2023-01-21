import { writable } from 'svelte/store';
import type { GraphState } from '../system_types/graph.d';

// Create the store
export const graphStore = writable<GraphState>({
    graph: {
      nodes: [],
      edges: []
    },
    selected: {
      selected: {
        id: '',
        label: '',
        data: {}
      },
      neighbors: null,
      outgoing: null,
      incoming: null
    }
  });