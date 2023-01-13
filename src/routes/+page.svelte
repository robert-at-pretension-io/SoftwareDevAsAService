<script>
import cytoscape from 'cytoscape';
import { onMount } from 'svelte';

let cyto = cytoscape({
  container: document.getElementById('cy'),
  elements: [
    { data: { id: 'a' } },
    { data: { id: 'b' } },
    { data: { id: 'ab', source: 'a', target: 'b' } }
  ],
  layout: {
    name: 'grid',
    rows: 1
  }
});
</script>

<div id='cy'></div>