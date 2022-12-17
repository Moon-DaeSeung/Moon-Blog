<script>
  import { pageIn, pageOut } from "$lib/hero-transition"
  export let src = ""
  export let height = "100%"
  export let heroKey = src
</script>

<img
  style="height: {height};"
  {src}
  alt="ARIA Fail. Sorry!"
/>

<style>
  .inner-shadow {
    /* bottom inset deep box-shadow */
    box-shadow: inset 0 -3rem 2rem -2rem hsla(0, 0%, 13%, 0.427);
    /* box-shadow: 0 10px 30px hsla(0, 0%, 13%, 0.5) inset; */
    /* box-shadow: inset 0 0 100px -10px hsla(0, 0%, 13%, 0.5); */
    /* box-shadow: inset 0 0 0.5rem 1rem hsla(0, 0%, 13%, 0.5); */
  }

  img {
    width: 100%;
    object-fit: cover;
  }

</style>
