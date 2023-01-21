<script lang="ts">
  import { onMount, setContext } from "svelte";
  import cytoscape from "cytoscape";
  import dagre from "cytoscape-dagre";
  import GraphStyles from "./GraphStyles.js";
  // import { Node, Edge, Graph } from '../system_types/graph';
  import { writable } from 'svelte/store';
  import { graphStore } from '../stores/graphStore';
  import { addEdge, addNode, setGraphState, getGraphState, edges, nodes } from '../helper_functions/graph';

  

  setContext("graphSharedState", {
    getCyInstance: () => cyInstance,
  });

  let refElement = null;
  let cyInstance = null;


  onMount(async () => {

    nodes().then((nodes) => {
      nodes.forEach((node) => {
        cyInstance.add({
          group: "nodes",
          id: node.id,
          data: { ...node },
        });
      });
    });

    edges().then((edges) => {
      edges.forEach((edge) => {
        cyInstance.add({
          group: "edges",
          id: edge.id,
          data: { ...edge },
        });
      });
    });



    cytoscape.use(dagre);

    cyInstance = cytoscape({
      container: refElement,
      style: GraphStyles,
    });

    cyInstance.on("add", () => {
      cyInstance
        .makeLayout({
          name: "dagre",
          rankDir: "TB",
          nodeSep: 150,
        })
        .run();
    });


    cyInstance.on("select", "node", (evt) => {
      const selectedNode = evt;
      // dispatch("nodeSelected", { node: selectedNode });
    });


    cyInstance.on("select", "edge", (event) => {

      
      let selectedEdge = event.target;
      let sourceId = selectedEdge.data("source");
      let targetId = selectedEdge.data("target");

      const nodes = cyInstance.nodes();

      let sources = nodes
        .filter((node) => node.id() !== targetId)
        .map((node) => node.id());

      let targets = nodes
        .filter((node) => node.id() !== sourceId)
        .map((node) => node.id());

      console.log("selectedEdge", selectedEdge);
    });
  });
</script>

<div class="graph" bind:this={refElement}>
  {#if cyInstance}
    <slot />
  {/if}
</div>

<style>
  .graph {
    left: 200px;
    height: 100%;
    width: 100%;
  }
</style>
