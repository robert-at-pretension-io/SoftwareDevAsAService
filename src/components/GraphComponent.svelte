<script lang="ts">
  import { onMount, setContext } from "svelte";
  import cytoscape, { Core } from "cytoscape";
  import dagre from "cytoscape-dagre";
  import GraphStyles from "./GraphStyles.js";
  // import { Node, Edge, Graph } from '../system_types/graph';
  import { graphStore } from "../stores/graphStore";
  import {
    edges,
    nodes,
    resetLastAction,
    selectNode,
    selectEdge
  } from "../helper_functions/graph";

  setContext("graphSharedState", {
    getCyInstance: () => cyInstance,
  });

  let refElement : HTMLElement | null = null;
  let cyInstance : Core | null = null;

  graphStore.subscribe((value) => {
    console.log("graphStore.subscribe", value);
    console.log("last action was", value.lastAction);
    console.log("acted on", value.actedOn);
    if (cyInstance && value.lastAction === "addNode" && value.actedOn != null) {
      cyInstance.add({
        group: "nodes",
        data: { ...value.actedOn },
      });
      resetLastAction();
    } else if (cyInstance && value.lastAction === "addEdge"&& value.actedOn != null) {
      cyInstance.add({
        group: "edges",
        data: { ...value.actedOn },
      });
      resetLastAction();
    }
  });

  onMount(async () => {
    nodes().then((nodes) => {
      nodes.forEach((node) => {
        cyInstance?.add({
          group: "nodes",
          data: { ...node },
        });
      });
    });

    edges().then((edges) => {
      edges.forEach((edge) => {
        cyInstance?.add({
          group: "edges",
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
      if (cyInstance) {
        cyInstance.layout({
          name: "dagre",
        }).run();
      }});

    cyInstance.on("select", "node", (evt) => {
      const selectedNode = evt.target.data();
      selectNode(selectedNode.id);
    });

    cyInstance.on("select", "edge", (event) => {
      console.log("selectedEdge", event.target.data());
      selectEdge(event.target.data().source, event.target.data().target);
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
