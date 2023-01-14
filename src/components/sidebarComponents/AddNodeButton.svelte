<script>
    import { onMount, getContext } from 'svelte'
    
    import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

    let label;

    function addNode() {
        console.log('AddNodeButton:addNode', label)
        dispatch('addNode', { 'label': label });
  }

</script>


<div id="cy" />
<input type="text" bind:value={label} placeholder="Enter label for new node" />
<button on:click={addNode}>Add Node</button>
