<script>
  import { heroIn, heroOut } from "$lib/hero-transition"
  export let src = ""
  export let height = "100%"
  export let heroKey = src
</script>

<img
  style="height: {height};"
  in:heroIn={heroKey}
  out:heroOut={heroKey}
  {src}
  alt="ARIA Fail. Sorry!"
/>

<style>
  img {
    width: 100%;
    object-fit: cover;
  }
</style>
