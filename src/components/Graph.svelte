<script>
  import { onMount, setContext } from 'svelte'
  import cytoscape from 'cytoscape'
  import dagre from 'cytoscape-dagre'
  import GraphStyles from './GraphStyles.js'
  import { watchResize } from "svelte-watch-resize";



  setContext('graphSharedState', {
    getCyInstance: () => cyInstance
  })

  let refElement = null
  let cyInstance = null
  export let addedNode;

  $: if(addedNode) {
    cyInstance.add({
      group: 'nodes',
      data: addedNode
    })
  }


  onMount(() => {
    cytoscape.use(dagre)

    cyInstance = cytoscape({
      container: refElement,
      style: GraphStyles
    })

    cyInstance.on('add', () => {
      cyInstance
        .makeLayout({
          name: 'dagre',
          rankDir: 'TB',
          nodeSep: 150
        })
        .run()
    })

    cyInstance.on('tap', 'node', (event) => {
      const node = event.target
      const neighborhood = node.neighborhood().add(node)

      cyInstance.elements().addClass('faded')
      neighborhood.removeClass('faded')

      console.log('node', node)
    })
  });





</script>

<div class="graph" bind:this={refElement}>
  {#if cyInstance}
    <slot></slot>
  {/if}
</div>

<style>
  .graph {
    left: 200px;
    height: 100%;
    width: 100%;
  }

</style>