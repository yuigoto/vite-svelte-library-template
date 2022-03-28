<script lang="ts">
  export let checked: boolean = false;
  export let size: number | string = 32;

  $: fontSize = typeof size === "number" ? `${size}px` : size;

  const toggle = () => (checked = !checked);
</script>

<div
  class="toggle"
  class:checked
  on:click={toggle}
  style="font-size: {fontSize}"
/>

<style lang="scss">
  @keyframes toggle_hovered {
    0% {
      box-shadow: 0 0 0 0.125rem rgba(0, 0, 0, 0.25);
    }

    60% {
      box-shadow: 0 0 0 0.5rem rgba(0, 0, 0, 0);
    }
  }

  .toggle {
    background: #555753;
    width: 2em;
    height: 1em;
    border: 1px solid #888a85;
    display: inline-block;
    position: relative;
    border-radius: 0.5em;
    overflow: hidden;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      -webkit-animation: 1s ease-out toggle_hovered;
      -moz-animation: 1s ease-out toggle_hovered;
      animation: 1s ease-out toggle_hovered;
    }

    &:before {
      content: "";
      background-color: #babdb6;
      width: calc(1em - 2px);
      height: calc(1em - 2px);
      display: block;
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 50%;
      transition: 0.3s;
    }

    &.checked {
      background: #d3d7cf;

      &:before {
        background: #c35c00;
        left: calc(50% + 1px);
      }
    }
  }
</style>
