<script>
    import { onMount, getContext } from 'svelte'
    
    import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

    let label = 'Node Label';

    function addNode() {
        console.log('AddNodeButton:addNode', label)
        dispatch('addNode', { 'label': label });
  }

</script>


<div id="cy" />
<input type="text" bind:value={label} placeholder="Enter label for new node" />
<button on:click={addNode}>Add Node</button>

<style>
    input {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      white-space: pre-wrap;
    }
  </style>