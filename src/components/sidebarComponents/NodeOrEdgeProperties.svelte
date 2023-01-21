<script>

  let selectedComponentText = "";

  function handleUpdate(event) {
    console.log("NodeOrEdgeProperties:handleUpdate", selectedComponentText, event);
  }
</script>

<div>
  <label class=".section-header"
    >Selected Component: <input
      type="text"
      bind:value={selectedComponentText}
      on:input={handleUpdate}
    /></label
  >
</div>

<style>
  input {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    white-space: pre-wrap;
  }
</style>
