<script lang="ts">
  import { onMount, setContext } from "svelte";
    import { getGraphState, setGraphState, selectNode, resetLastAction } from "../../helper_functions/graph";
    import type { GraphState, Edge } from "../../system_types";
    import { graphStore } from "../../stores/graphStore";
  import { Core } from "cytoscape";

    let graphState: GraphState = {
      selected: null,
      graph: {
        nodes: [],
        edges: [],
      },
      lastAction: "none",
      actedOn: null,
    };

    setContext("graphSharedState", {
    getCyInstance: () => cyInstance,
  });

  let cyInstance : Core | null = null;


    graphStore.subscribe((value) => {
    if (value.lastAction === "selectNode") {
      console.log("selectNode", value.actedOn);
      resetLastAction();
    } else if (value.lastAction === "addEdge") {
      console.log("addEdge", value.actedOn);
      resetLastAction();
    }
  });
  
    onMount(async () => {
      graphState = await getGraphState();
    });


    </script>


  
  <div>
    {#if graphState.selected != null}
      {#if graphState.selected.type === "Edge"}
        <h2>Selected Edge: </h2>
        <p>ID: {graphState.selected.instance.id}</p>
        <p>Source: {graphState.selected.instance.source}</p>
        <p>Target: {graphState.selected.instance.target}</p>
      {:else}
        <h2>Selected Node: </h2>
        <p>ID: {graphState.selected.instance.id}</p>
        <p>Data: {JSON.stringify(graphState.selected.instance.data)}</p>
      {/if}
    {:else}
      <h2>No Node or Edge Selected</h2>
    {/if}
  </div>