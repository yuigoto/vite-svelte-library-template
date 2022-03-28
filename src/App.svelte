<script lang="ts">
  import { TestLabel, TestToggle } from "$lib";

  let checked: boolean = false;
</script>

<div class="container">
  <h1>Hello, Svelte!</h1>

  <p>Test project for the library boilerplate!</p>

  <TestLabel name="John Doe" />

  <br />
  <br />

  <TestToggle size={16} bind:checked />

  <p>Status: {checked}</p>
</div>

<style lang="scss">
  .container {
    border: 1px solid #d3d7cf;
    padding: 2rem;
    border-radius: 1rem;

    h1 {
      margin: 0;
    }
  }
</style>
