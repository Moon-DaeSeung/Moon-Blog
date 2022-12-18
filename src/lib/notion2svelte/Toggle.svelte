<script>
  import IndentGroup from "./IndentGroup.svelte"
  let open = false
</script>

<div>
  <div>
    <button on:click|stopPropagation={() => (open = !open)}>
      <svg viewBox="0 0 2 3" aria-hidden="true">
        <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
        <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
      </svg>
    </button>
    <slot />
  </div>
  {#if open}
    <IndentGroup>
      <slot name="children" />
    </IndentGroup>
  {/if}
</div>

<style>
  /* div { */
  /* border: solid double 0.5px wheat;
		background: radial-gradient(coral, wheat); */
  /* } */
  button {
    width: 1.5rem;
    text-align: center;
  }
  svg {
    width: 30px;
    height: 15px;
    display: block;
  }
  path {
    fill: black;
  }
</style>
