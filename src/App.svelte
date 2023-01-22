<script lang="ts">
  import GraphComponent from './components/GraphComponent.svelte';
  import Sidebar from './components/Sidebar.svelte';
  import ModifyNodesOrEdges from './components/sidebarComponents/ModifyNodesOrEdges.svelte';
  import AddNodeButton from './components/sidebarComponents/AddNodeButton.svelte';
  import NodeOrEdgeProperties from './components/sidebarComponents/NodeOrEdgeProperties.svelte';
  import type {Graph,  selectedGraphComponent, GraphState} from './system_types';
  import {setGraphState} from './helper_functions/graph';
  
  const graph: Graph = {
    nodes: [
      {
        id: '1',
        label: 'Node 1',
        data: { someData: 'value' },
      },
      {
        id: '2',
        label: 'Node 2',
        data: { someOtherData: 'value2' },
      },
      {
        id: '3',
        label: 'Node 3',
        data: { yetAnotherData: 'value3' },
      },
    ],
    edges: [
      {
        id: 'a',
        source: '1',
        target: '2',
        label: 'Edge 1',
      },
      {
        id: 'b',
        source: '2',
        target: '3',
        label: 'Edge 2',
      },
    ],
  };

const selectedComponent: selectedGraphComponent = {
  type: 'Node',
  instance: graph.nodes[0],
  neighbors: graph.nodes,
  outgoing: graph.edges.filter(edge => edge.source === graph.nodes[0].id),
  incoming: graph.edges.filter(edge => edge.target === graph.nodes[0].id)
}

let graphState: GraphState =
{
  graph: graph,
  selected: selectedComponent,
  lastAction: 'none',
  actedOn: null
}

setGraphState(graphState);

  let sections = [
  { header: 'Add Node', component: AddNodeButton, open: true },
  { header: 'Properties', component: NodeOrEdgeProperties, open: true},
  { header: 'Modify Nodes or Edges', component: ModifyNodesOrEdges, open: true },
];

</script>
<Sidebar sections={sections}   />
<GraphComponent />

